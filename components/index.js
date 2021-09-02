/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例
 */
const getCtx = (selector, ctx = getCurrentPages()[getCurrentPages().length - 1]) => {
    const componentCtx = ctx.selectComponent(selector)

    if (!componentCtx) {
        throw new Error('无法找到对应的组件，请按文档说明使用组件')
    }

    return componentCtx
}

const $ciActionSheet = (selector = '#ci-actionsheet', ctx) => getCtx(selector, ctx)
const $ciBackdrop = (selector = '#ci-backdrop', ctx) => getCtx(selector, ctx)
const $ciToast = (selector = '#ci-toast', ctx) => getCtx(selector, ctx)
const $ciLoading = (selector = '#ci-loading', ctx) => getCtx(selector, ctx)
const $ciDialog = (selector = '#ci-dialog', ctx) => getCtx(selector, ctx)
const $ciToptips = (selector = '#ci-toptips', ctx) => getCtx(selector, ctx)
const $ciGallery = (selector = '#ci-gallery', ctx) => getCtx(selector, ctx)
const $ciNotification = (selector = '#ci-notification', ctx) => getCtx(selector, ctx)
const $ciKeyBoard = (selector = '#ci-keyboard', ctx) => getCtx(selector, ctx)
const $ciSelect = (selector = '#ci-select', ctx) => getCtx(selector, ctx)
const $ciCalendar = (selector = '#ci-calendar', ctx) => getCtx(selector, ctx)
const $stopciRefresher = (selector = '#ci-refresher', ctx) => getCtx(selector, ctx).finishPullToRefresh()

export {
    $ciActionSheet,
    $ciBackdrop,
    $ciToast,
    $ciLoading,
    $ciDialog,
    $ciToptips,
    $ciGallery,
    $ciNotification,
    $ciKeyBoard,
    $ciSelect,
    $ciCalendar,
    $stopciRefresher,
}