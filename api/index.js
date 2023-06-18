import address from "./address";
import common from "./common";
import goods from "./goods";
import order from "./order";
import sancode from "./sancode";
import user from "./user";

// 接口注册表
export default {
  common, // 公共
  user,// 用户
  goods,// 商品,
  order,// 订单
  sancode,// 扫码
  address,// 地址
}