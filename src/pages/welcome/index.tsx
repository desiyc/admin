import { Button, message, Result, Space } from 'antd'

import { PlusOutlined, SmileOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import RichTextInput from '../../components/RichTextInput'

export default () => {
  useEffect(() => {
    //一级页面面包屑隐藏
    const miss: any = document.querySelector('.ant-page-header')
    miss.style.display = 'none'
    return () => {
      miss.style.display = 'block'
    }
  }, [])
  return (
    <div
      style={{
        height: '100vh',
      }}>
      <Result icon={<SmileOutlined />} title="Great, we successed!" extra={<Button type="primary">Next</Button>} />
      <div>富文本组件</div>
      <RichTextInput />
    </div>
  )
}
