/*--------------- model namespace ---------------*/
export const NUser = 'NUser'
export const NDemo = 'NDemo'

/*--------------- reducers ---------------*/
export const RSetState = 'RSetState'

/*--------------- effects ---------------*/
// 通用
export const EPost = 'EPost' //创建新数据
export const EGet = 'EGet' //获取列表
export const EPut = 'EPut' //更新数据
export const EDelete = 'EDelete' //删除数据
export const EGetone = 'EGetone' //获取详情

// 用户
export const EUserAutoLogin = 'EUserAutoLogin' //页面启动自动登录
export const EUserLogin = 'EUserLogin' //登录
export const EUserLogout = 'EUserLogout' //退出
