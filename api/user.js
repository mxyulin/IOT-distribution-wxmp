// 用户接口
export default {
  wxLogin: {
    url: 'WeixinLogin/',
    method: 'POST',
    auth: false,
    desc: '微信注册登陆'
  },
  getWxPhone: {
    url: 'WeChatPhone/',
    method: 'POST',
    auth: false,
    desc: '获取微信手机号'
  },
  getProfitQrcode: {
    url: 'QR/',
    method: 'GET',
    auth: true,
    desc: '获取分利码'
  },
  upPayQrcode: {
    url: 'AddQR/',
    method: 'POST',
    auth: true,
    desc: '上传收款码'
  },
  // todo 退出登陆
  // todo 上传头像
  // todo 上传昵称
}
