// 扫码接口
export default {
  checkGoodsForgeryByQrcode: {
    url: 'app01/Yanwei/',
    method: 'POST',
    auth: true,
    desc: '扫码认主'
  },
  getGoodsDetailByQrcode: {
    url: 'app01/ToShop/',
    method: 'POST',
    auth: true,
    desc: '扫码获取商品信息'
  }
}
