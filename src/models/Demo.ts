import { requestDelete, requestGet, requestPost, requestPut } from 'dva17'
import { EDelete, EGet, EPost, EPut, NDemo, RSetState } from '../common/action'

export default {
  namespace: NDemo,
  state: {
    list: null,
  },
  reducers: {
    [RSetState](state: any, payload: any) {
      return { ...state, ...payload }
    },
  },
  effects: {
    //  标准CURD示例
    async [EGet]({ payload }: any, reducer: any) {
      let res = await requestGet('demo', payload)
      reducer(RSetState, { list: res })
    },
    async [EPost]({ payload }: any) {
      await requestPost('demo', payload)
    },
    async [EPut]({ payload }: any) {
      await requestPut(`demo/${payload.id}`, payload)
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`demo/${payload}`)
    },
  },
}
