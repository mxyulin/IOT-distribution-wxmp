import appConfig from '@/app.config';

export default {
  baseUrl: appConfig.baseUrl,
  header: {
    'Content-Type': 'application/json'
  },
  data: {},
  method: 'POST',
  dataType: 'json'
}
