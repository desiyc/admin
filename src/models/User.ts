import { notification } from 'antd'
import { requestGet, requestPost, requestPut } from 'dva17'
import { EGet, EUserAutoLogin, EUserLogin, EUserLogout, NUser, RSetState } from '../common/action'
import { KEY_TOKEN } from '../common/config'
import { UserState } from '../common/interface'

export default {
  namespace: NUser,
  state: {
    currentUser: null,
    status: UserState.loading,
    admin: {
      phone: 'desiyc',
      password: 'desiyc',
    },
  },
  reducers: {
    [RSetState](state: any, payload: any) {
      return { ...state, ...payload }
    },
  },
  effects: {
    async [EUserAutoLogin]({ payload: history }: any, { reducer }: any) {
      let oldToken = localStorage.getItem(KEY_TOKEN)
      if (oldToken == 'admin') {
        reducer(RSetState, { currentUser: { name: '管理员' }, status: UserState.autherized })
      } else {
        reducer(RSetState, { status: UserState.login })
      }
      //有接口，则自动登录
      // const admin = JSON.parse('' + localStorage.getItem('admin') + '')
      // console.log('admin: ', admin)
      //每次刷新页面，绑定token
      // const token: any = localStorage.getItem(KEY_TOKEN)
      // bindJWTToken(token)
      // reducer(RSetState, { currentUser: admin, status: UserState.autherized })
      // if (admin) {
      //   reducer(RSetState, { currentUser: admin, status: UserState.autherized })
      // } else {
      //   reducer(RSetState, { status: UserState.login })
      // }
      // return admin
    },
    // 登录
    async [EUserLogin]({ payload, state }: any, { reducer }: any) {
      if (payload.phone == state.admin.phone && payload.password == state.admin.password) {
        let token = 'admin'
        localStorage.setItem(KEY_TOKEN, token)
        reducer(RSetState, { currentUser: { name: '管理员' }, status: UserState.autherized })
      } else {
        notification.error({ message: '账号或密码错误', duration: 2 })
      }
      //有登录接口
      // let { data } = await requestPost(`auth/login`, payload)
      // console.log('data: ', data)
      // // 绑定并缓存token
      // bindJWTToken(data.token)
      // localStorage.setItem('token', data.token)
      // localStorage.setItem('admin', JSON.stringify(data.user))
      // reducer(RSetState, { currentUser: data.user, status: UserState.autherized })
    },
    async [EUserLogout]({ payload }: any, { reducer }: any) {
      /**
       * 退出登录，并且将当前的 url 保存
       */
      localStorage.removeItem(KEY_TOKEN)
      reducer(RSetState, { status: UserState.login })
      location.reload()
    },
  },
}
