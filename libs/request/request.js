import options from "./options";

/**
 * * 将 wx.request 封装成类
 * @property {Object} interceptor 拦截器注入接口
 * @property {Function} setConfig 配置项写入接口
 * @property {Function} request 发起请求接口
 */
export default class Request {
  #options = options;

  constructor() {
    // 拦截器
    this.interceptor = {
      request: cb => {
        if (cb) {
          this.requestBefore = cb;
        }

        else {
          this.requestBefore = Request.#requestBefore;
        }
      },

      response: cb => {
        if (cb) {
          this.responseAfter = cb;
        }

        else {
          this.responseAfter = Request.#responseAfter;
        }
      }
    }
  }

  /**
 * set request custom options
 * @param {Function} cb
 * @returns
 */
  setOptions(cb) {
    return cb(this.#options);
  }

  async request(apiOptions = {}) {
    let options = Request.#mergeOptions(apiOptions, this.#options);

    // 合并 url
    options.url = Request.#mergeUrl(options);

    // 调用请求拦截器处理 options
    this.requestBefore(options);

    // 返回响应拦截器处理过的数据 
    return new Promise((resolve, reject) => {
      options.success = res => {
        let result = this.responseAfter(res.data);

        resolve(result);
      };

      options.fail = err => {
        let result = this.responseAfter(err);

        reject(result);
      }

      // debugger;
      // 准备就绪发送请求
      wx.request(options);
    })

  }

  // helper func
  static #mergeOptions(customOpt, defaultOpt) {
    return { ...defaultOpt, ...customOpt };
  }

  // helper func
  static #mergeUrl(options) {
    let apiUrl = options.url;
    let baseUrl = options.baseUrl
    let isUrl = /(http|https):\/\/([\w.]+\/?)\S*/.test(apiUrl);

    return isUrl ? apiUrl : (baseUrl + apiUrl);
  }

  // default req interceptor
  static #requestBefore(options) {
    return options;
  }

  // default res interceptor
  static #responseAfter(response) {
    return response;
  }
}
