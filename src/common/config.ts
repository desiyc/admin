const LOCAL_SERVER = false

export const IS_DEBUG = false
export const SERVER_HOME = LOCAL_SERVER ? 'http://127.0.0.1:8000/admin/v1/' : 'https://s2d.orbitsoft.cn/demo/admin/v1/'

//项目token命名(后期需要修改)
export const KEY_TOKEN = 'project_token'
//上传地址(富文本编辑器)
export const UPLOAD_SERVER_HOME = 'http://s2d.orbitsoft.cn:15620/file/upload'
