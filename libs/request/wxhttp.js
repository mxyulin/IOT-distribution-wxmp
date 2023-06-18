import apiMap from '@/api/index';
import appConfig from '@/app.config.js';
import Request from './request';
// import { Base64 } from '/utils/base64';

const appInst = getApp();
const wxRequest = new Request();

/**
 * * wx$http 请求接口的封装
 * @param {*} apiKey 接口关键字 e.g. -> user.login
 * @param {*} data 请求参数
 * @param {*} toastBefore 请求前提示
 * @param {*} toastAfter 响应后提示
 * @param {*} customHeader 接口定制请求头
 * @returns 
 */
export default function (
  apiKey,
  data = {},
  toastBefore = '',
  toastAfter = true,
  customHeader = {}
) {
  // 通过关键字获取 api
  let api = getAPI(apiKey);

  // 注入请求拦截器
  wxRequest.interceptor.request((options) => {
    let token = wx.getStorageSync('token');

    // 校验登陆
    if (api.auth && !token) {
      // 隐藏可能启用的全局 loading
      wx.hideLoading();
      wx.redirectTo({
        url: '/packgeUser/login/login',
      });

      throw (`未登录或登陆失效, 已阻止请求${api.url}~`);
    }

    // 添加校验密钥到请求头
    token && (options.header['authorization'] = appConfig.clientSecret + ' ' + token);

    // 添加接口定制的请求头内容
    for (let field in customHeader) {
      options.header[field] = customHeader[field];
    }

    // 请求前提示
    if (toastBefore != '') {
      wx.showLoading({
        title: toastBefore,
        mask: true
      })
    }

    // debugger;
    return options;
  })

  wxRequest.interceptor.response((response) => {
    // debugger
    wx.hideLoading();

    // todo 处理错误响应

    // todo 处理token过期,

    // 错误请求提示
    if (response.data && (response.code != 200)) {
      toastAfter && wx.showToast({
        title: response.data.msg || '请求出错, 稍后重试~',
        icon: 'none',
        duration: 1000,
        mask: false
      });
    }

    return response;
  })

  return wxRequest.request({
    url: api.url,
    method: api.method,
    data
  })
}

// helper func
function getAPI(apiKey) {
  // 拆分 apiKey 为数组
  let apiKeys = apiKey.split('.');
  let api = apiMap;

  // 逐层遍历获取到 api
  apiKeys.forEach(key => {
    api = api[key];
  });

  return api;
}

// 校验 session_key
function checkSession() {
  wx.checkSession({
    success: res => {
      // session_key 未过期
      wx.login({
        success: (res) => {
          if (res.code) {
            // debugger;
            wx.setStorageSync('authCode', res.code);
          }

          else {

          }
        },

        fail
      })
    },

    fail: res => {
      // session_key 过期


    }
  })
}
