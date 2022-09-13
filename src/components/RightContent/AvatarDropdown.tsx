import React, { useCallback } from 'react'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Menu, Spin } from 'antd'
import HeaderDropdown from './HeaderDropdown'
import { NUser, EUserLogout } from '../../common/action'
import styles from './index.module.less'
import { effect, useConnect } from 'dva17'
import images from '../../assets/images'

/**
 * 退出登录，并且将当前的 url 保存
 */

export default () => {
  const { currentUser } = useConnect(NUser)
  /*--------------------- 生命周期 ---------------------*/

  /*--------------------- 响应 ---------------------*/
  const onLogout = async (event: any) => {
    await effect(NUser, EUserLogout, history)
  }
  /*--------------------- 渲染 ---------------------*/
  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  )

  if (!currentUser || !currentUser.name) {
    return loading
  }
  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onLogout}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={images.logo} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  )
}
