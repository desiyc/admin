import React from 'react'
import images from '../../assets/images'

export default ({ collapsed }: any) => {
  return (
    <a
      style={{
        lineHeight: '48rpx',
        display: 'flex',
        height: 48,
        color: 'rgba(255, 255, 255, 0.65)',
        alignItems: 'center',
      }}
      href="https://www.orbitsoft.cn"
      target="_blank"
      rel="noreferrer">
      <img
        alt="pro-logo"
        src={images.logo}
        style={{
          width: 16,
          height: 16,
          margin: '0 16px',
          marginRight: 10,
        }}
      />
      {!collapsed && '星轨软件支持'}
    </a>
  )
}
