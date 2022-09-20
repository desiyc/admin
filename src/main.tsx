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
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment' //在原有的基础上加上下面三行代码
import 'moment/locale/zh-cn'
moment.updateLocale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
})
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
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </HashRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')!
)
