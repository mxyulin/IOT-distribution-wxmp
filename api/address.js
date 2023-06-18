// 地址接口
export default {
  getAddress: {
    url: 'api/Address/',
    method: 'GET',
    auth: true,
    desc: '获取收件地址'
  },
  addAdress: {
    url: 'api/Address/',
    method: 'POST',
    auth: true,
    desc: '添加收货地址'
  },
  updAddress: {
    url: 'api/Address/',
    method: 'PUT',
    auth: true,
    desc: '修改收货地址'
  },
  upPayQrcode: {
    url: 'api/Address/',
    method: 'DELETE',
    auth: true,
    desc: '删除收获地址'
  },
}
