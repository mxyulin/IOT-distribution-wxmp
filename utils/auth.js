/* 用户校验登陆模块 */

const appInst = getApp();

// 获取鉴权码 有效期5分钟
const getAuthCode = function() {
  wx.login({
    success: (res) => {
      // debugger;
      wx.setStorageSync('authCode', res.code);
    },
  })
}

export { getAuthCode };

