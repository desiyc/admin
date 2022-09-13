import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import './index.less'
import { initModels, initRequest, reducer } from 'dva17'
import { Provider } from 'react-redux'
import models from './models'
import { ConfigProvider, notification } from 'antd'
import { KEY_TOKEN, SERVER_HOME } from './common/config'
import { HashRouter } from 'react-router-dom'

initRequest(
  SERVER_HOME,
  (status, data: any) => {
    console.log('status, message: ', status, data)
    if (401 == status) {
      confirm('登录失效，请重新登录')
      localStorage.removeItem(KEY_TOKEN)
      location.reload() //刷新页面重新登录
    } else {
      let { error, message } = data
      notification.error({ message, duration: 2 })
    }
  },
  false //是否打印request记录
)

ReactDOM.render(
  <ConfigProvider>
    <Provider store={initModels(models, false /*是否打印dva17记录 */)}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')!
)
