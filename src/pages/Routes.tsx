import React from 'react'
import { CreditCardOutlined, DashboardOutlined } from '@ant-design/icons'

import Welcome from './welcome'
import Overview from './data/overview/index'
import Statistics from './data/statistics/index'
import AccountManagement from './manage/accountManagement/index'
import RightsManagement from './manage/rightsManagement/index'
import ContentManagement from './manage/contentManagement/index'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/data',
        name: '数据概览',
        icon: <DashboardOutlined />,
        routes: [
          {
            parent: '/data',
            path: '/data/overview',
            name: '概况简要',
            component: <Overview />,
          },
          {
            parent: '/data',
            path: '/data/statistics',
            name: '数据统计',
            component: <Statistics />,
          },
        ],
      },
      {
        path: '/manage',
        name: '客服后台',
        icon: <CreditCardOutlined />,
        routes: [
          {
            parent: '/manage',
            path: '/manage/accountManagement',
            name: '账号管理',
            component: <AccountManagement />,
          },
          {
            parent: '/manage',
            path: '/manage/rightsManagement',
            name: '权限管理',
            component: <RightsManagement />,
          },
          {
            parent: '/manage',
            path: '/manage/contentManagement',
            name: '内容管理',
            component: <ContentManagement />,
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
}
