import React from 'react'
import { CreditCardOutlined, DashboardOutlined } from '@ant-design/icons'

import Welcome from './welcome'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/Welcome',
        name: 'Hello',
        icon: <CreditCardOutlined />,
        component: <Welcome />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
}
