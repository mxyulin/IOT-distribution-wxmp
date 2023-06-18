/* 工具函数 */

// tanbar 判断
function isTabbar() {
  let pages = getCurrentPages();
  if (pages.length === 0) return false;

  let prePage = pages[pages.length - 1];
  let preRoute = prePage.route;
  if (preRoute == 'pages/index/index' || preRoute == 'pages/user/user') return true;
}

/**
 * 类型验证
 * @param {Any} data 
 * @param {String} expectedType tring, bumber, boolean, array, object, ...
 * @returns 
 */
function checkType(data, expectedType) {
  // 如果 data 是基本类型
  if (typeof data !== "object") {
    // 直接使用 typeof 运算符和 expectedType 比较
    return typeof data === expectedType;
  } else {
    // 如果 data 是引用类型
    // 使用 Object.prototype.toString.call 方法获取 data 的内部类型
    let actualType = Object.prototype.toString.call(data);
    // 去掉前后的 "[object " 和 "]"
    actualType = actualType.slice(8, -1);
    // 将 actualType 转换为小写
    actualType = actualType.toLowerCase();
    // 使用 actualType 和 expectedType 比较
    return actualType === expectedType;
  }
}

/**
 * 深拷贝
 * @param {Object} obj 
 * @param {Map} map 
 * @returns 
 */
function deepClone(obj, map = new Map()) {
  // 如果 obj 是 null 或者不是对象，直接返回 obj
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 如果 map 中已经有 obj，说明已经复制过，直接返回 map 中的值
  if (map.has(obj)) {
    return map.get(obj);
  }
  // 根据 obj 的类型创建一个新的对象
  let clone = new obj.constructor();
  // 将 obj 和 clone 存入 map，防止循环引用
  map.set(obj, clone);
  // 遍历 obj 的每个属性
  for (let key in obj) {
    // 如果 obj 自身拥有该属性
    if (obj.hasOwnProperty(key)) {
      // 递归地复制该属性的值，并赋给 clone
      clone[key] = deepClone(obj[key], map);
    }
  }
  // 返回 clone
  return clone;
}

// 价格保留两位小数
function formatPrice(price) {
  // debugger;
  if (checkType(price, 'number') || checkType(price, 'string')) {
    price = price.toString();
  }

  else {
    throw new Error('tools: price must be number or string.')
  }

  let [int, dec] = price.split('.');
  let isDec = Boolean(dec);// 是否有小数

  // 如果有小数
  if (isDec) {
    let isBeyoundTowNum = dec.length >= 2;
    dec = isBeyoundTowNum ? dec.slice(0, 2) : (dec + '0');

    return `${Number(int)}.${dec}`;// Number(int) 处理空字符串
  }

  // 如果没有小数
  else {
    return `${Number(int)}.00`;// Number(int) 处理空字符串
  }
}

export {
  isTabbar,
  checkType,
  deepClone,
  formatPrice
};

