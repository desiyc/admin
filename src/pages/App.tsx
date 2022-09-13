import React, { useEffect, useState } from 'react'
import { effect, useConnect } from 'dva17'
import 'antd/dist/antd.css'
import '@ant-design/pro-form/dist/form.css'
import '@ant-design/pro-table/dist/table.css'
import '@ant-design/pro-layout/dist/layout.css'
import { PageLoading, ProSettings } from '@ant-design/pro-layout'
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout'
import defaultProps from './Routes'
import RightContent from '../components/RightContent'
import MenuFooter from '../components/MenuFooter'
import { EUserAutoLogin, NUser } from '../common/action'
import { UserState } from '../common/interface'
import Login from './login'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true, menuHeaderRender: false, menu: { defaultOpenAll: false } })
  const location = useLocation()
  const navigation = useNavigate()
  console.log('pathname: ', location)
  const { status } = useConnect(NUser)
  /*--------------------- 生命周期 ---------------------*/
  useEffect(() => {
    effect(NUser, EUserAutoLogin)
  }, [])
  /*--------------------- 响应 ---------------------*/

  /*--------------------- 渲染 ---------------------*/
  if (status == UserState.loading) {
    return <PageLoading />
  } else if (status == UserState.login) {
    return <Login />
  } else {
    return (
      <div
        id="test-pro-layout"
        style={{
          height: '100vh',
        }}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname: location.pathname,
          }}
          //底部菜单取消
          // menuFooterRender={(props: { collapsed: any }) => <MenuFooter collapsed={props?.collapsed} />}
          onMenuHeaderClick={(e: any) => console.log(e)}
          menuItemRender={(item: { path: any; component: any }, dom: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
            //配置默认跳转项
            if (location.pathname === '/') {
              navigation('/Welcome')
            }
            //a链接跳转没有herf报错解决方案
            return (
              <a
                href=""
                onClick={e => {
                  e.preventDefault()
                  navigation(item.path)
                }}>
                {dom}
              </a>
            )
          }}
          //面包屑配置
          itemRender={(route, params, routes, paths) => {
            return <span>{route?.breadcrumbName}</span>
          }}
          rightContentRender={() => <RightContent />}
          {...settings}>
          <PageContainer title={false}>
            <Routes location={location.pathname}>
              {defaultProps.route.routes.map(({ name, path, component, routes }: any, i: any) => {
                return (
                  <Route key={i} path={path} element={component}>
                    {routes &&
                      routes.map(({ name, path: path2, component, routes }: any, j: any) => {
                        let subPath = path2.slice(path.length + 1)
                        return <Route key={j} path={subPath} element={component} />
                      })}
                  </Route>
                )
              })}
            </Routes>
          </PageContainer>
        </ProLayout>
      </div>
    )
  }
}
