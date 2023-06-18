// 商品接口
export default {
  getGoodsList: {
    url: 'Goods/all/',
    method: 'GET',
    auth: false,
    desc: '拉取所有商品'
  },
  getGoodsDetail: {
    url: 'Goods/good/',
    method: 'GET',
    auth: false,
    desc: '获取商品详情'
  }
}
