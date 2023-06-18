// 公共接口
export default {
  upload: {
    url: '',
    method: 'POST',
    auth: true,
    desc: '上传文件'
  },
  smsSend: {
    url: '',
    method: 'GET',
    auth: false,
    desc: '发送短信'
  },
  // getDistricts: {
  //   url: 'https://restapi.amap.com/v3/config/district',// 完整 url 不用像普通接口那样通过请求拦截器组合
  //   method: 'GET',
  //   auth: false,
  //   desc: '获取高德地图提供的省市区街道数据'
  // }
}
