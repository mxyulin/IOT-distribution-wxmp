import { checkType, deepClone } from '@/utils/tools';
import componentMixins from './component';
import pageMixins from './page';


/* 参与合并的配置项 */
const originProp = ['data', 'options', 'properties', 'methods'];// 源属性，可根据需求扩充其他属性
const originHooks = [
  // page hooks
  'onLoad',
  'onShow',
  'onReady',
  'onHide',
  'onUnload',
  'onRouteDone',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onShareTimeline',
  'onAddToFavorites',
  'onPageScroll',
  'onResize',
  'onTabItemTap',
  'onSaveExitState',
  // component hooks
  'created',
  'attached',
  'ready',
  'moved',
  'detached',
];// 源 hooks

/**
 * 劫持 Page, Component 改造 options
 * @param {Function} apiFunc Page, Component
 * @returns 
 */
export default function (apiFunc) {
  const originFunc = apiFunc;

  return apiFunc = options => {
    // debugger;
    if (Array.isArray(pageMixins)) {
      options = options.properties ?
        merge(componentMixins, options) :
        merge(pageMixins, options);// 组件和页面分别混入不同的 mixins

      originFunc(options);
    }

    else {
      throw new Error('mixins must be Array.');
    }
  }
}

/**
 * 合并配置项
 * @param {Object} mixins 
 * @param {Object} options 
 */
function merge(mixins, options) {
  // debugger;
  mixins.forEach(mixin => {
    // 类型验证
    if (!checkType(mixin, 'object')) {
      throw new Error('mixin must be Object.');
    }

    for (let [key, val] of Object.entries(mixin)) {
      // 混入对象属性
      if (originProp.indexOf(key) > -1) {
        if (checkType(val, 'object')) {
          let propObj = deepClone(val);
          options[key] = { ...propObj, ...options[key] };
        }

        else {
          throw new Error(`mixin: prop '${key}' must be Object.`);
        }
      }

      // 混入hooks
      else if (originHooks.indexOf(key) > -1) {
        if (checkType(val, 'function')) {
          const originHook = options[key];// 缓存原本的 hooks

          options[key] = function (...args) {
            val.call(this, ...args);// 先执行 mixins 中的 hook
            originHook && originHook.call(this, ...args);// 再执行 originHook
          }
        }

        else {
          throw new Error(`mixin: hook '${key}' must be function.`);
        }
      }

      // 混入自定义方法和全局属性
      else {
        /* 如果options没有该字段，就混入该字段。
        有的话不混入，优先应用 options 中的同名字段值
        全局属性不考虑值为 null, undefined, Map, Set, BigInt的类型*/
        if (!options[key]) {
          (checkType(val, 'object') || checkType(val, 'array')) && (options[key] = deepClone(val));// 引用类型深拷贝
          (checkType(val, 'number') || checkType(val, 'string') || checkType(val, 'boolean') || checkType(val, 'function')) && (options[key] = val);// 非引用类型赋值
        }

        else {
          throw new Error(`mixin: field '${key}' already exists.`);
        }
      }
    }
  });

  return options;

  // 合并生命周期
  // function mergeHooks(key) {
  //   const originHook = options[key];// 缓存原本的 hooks

  //   return function (...args) {
  //     val.call(this, ...args);// 先执行 mixins 中的 hook
  //     originHook && originHook.call(this, ...args);// 再执行 originHook
  //   }
  // }
}
