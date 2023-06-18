// 订单接口
export default {
  getOrderList: {
    url: 'Personal/',
    method: 'GET',
    auth: true,
    desc: '拉取所有订单'
  },
  getOrderDetail: {
    url: 'api/Personal/',
    method: 'POST',
    auth: true,
    desc: '获取订单详情'
  },
  subOrder: {
    url: 'app01/Orders/',
    method: 'POST',
    auth: true,
    desc: '提交新订单'
  },
  updOrder: {
    url: 'Personal/',
    method: 'POST',
    auth: true,
    desc: '修改订单'
  },
  getProfitOrderList: {
    url: 'Fenli/',
    method: 'GET',
    auth: true,
    desc: '拉取所有分利订单'
  },
  getWillProfitOrderList: {
    url: 'DFenli/',
    method: 'GET',
    auth: true,
    desc: '拉取待分利订单'
  },
  getCanProfitingOrderList: {
    url: 'KFenli/',
    method: 'GET',
    auth: true,
    desc: '拉取可分利订单'
  },
  getProfitedOrderList: {
    url: 'YFenli/',
    method: 'GET',
    auth: true,
    desc: '拉取已分利订单'
  }
}
