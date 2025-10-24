// src/utils/to.js

/**
 * 路由跳转工具函数
 * @param {String} path - 要跳转的路径
 * @param {Object} params - 路由参数（可选）
 * @param {Object} query - 查询参数（可选）
 */
export function handleClick(path, params = {}, query = {}) {
  // 验证路径参数
  if (!path) {
    console.error('路径参数不能为空');
    return;
  }

  // 获取路由实例（需要在Vue组件中调用时传入）
  try {
    // 如果使用Vue 3 + Vue Router 4
    import('@/main.js').then(module => {
      const { router } = module.default;
      if (router) {
        router.push({ path, params, query });
      }
    });
  } catch (error) {
    console.error('路由跳转失败:', error);
  }
}

/**
 * 使用路由实例进行跳转（推荐在组件内使用）
 * @param {Object} router - Vue Router实例
 * @param {String} path - 要跳转的路径
 * @param {Object} params - 路由参数（可选）
 * @param {Object} query - 查询参数（可选）
 */
export function handleClickWithRouter(router, path, params = {}, query = {}) {
  // 验证参数
  if (!router) {
    console.error('Vue Router实例不能为空');
    return;
  }
  
  if (!path) {
    console.error('路径参数不能为空');
    return;
  }

  // 执行跳转
  router.push({ path, params, query });
}

/**
 * 命名路由跳转
 * @param {Object} router - Vue Router实例
 * @param {String} name - 路由名称
 * @param {Object} params - 路由参数（可选）
 * @param {Object} query - 查询参数（可选）
 */
export function handleNamedRoute(router, name, params = {}, query = {}) {
  if (!router) {
    console.error('Vue Router实例不能为空');
    return;
  }
  
  if (!name) {
    console.error('路由名称不能为空');
    return;
  }

  router.push({ name, params, query });
}

// 默认导出
export default {
  handleClick,
  handleClickWithRouter,
  handleNamedRoute
}