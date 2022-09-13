import { Space } from 'antd'
import React from 'react'
import Avatar from './AvatarDropdown'
import styles from './index.module.less'

export default () => {
  return (
    <Space className={styles.right}>
      <Avatar />
    </Space>
  )
}
