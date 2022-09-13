import React from 'react'
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons'

import Welcome from './welcome'


export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/Welcome',
        name: '欢迎页面',
        icon: <CrownOutlined />,
        component: <Welcome />,
      }
    ],
  },
  location: {
    pathname: '/',
  },
}
