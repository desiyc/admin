import { effect, useLoading } from 'dva17'
import { Alert } from 'antd'
import { LoginForm, ProFormText } from '@ant-design/pro-form'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import { EUserLogin, NUser } from '../../common/action'

export default () => {
  const { loading } = useLoading(NUser) //读取model的effect加载状态
  console.log('loading: ', loading)
  /*--------------------- 生命周期 ---------------------*/

  /*--------------------- 响应 ---------------------*/

  /*--------------------- 渲染 ---------------------*/
  return (
    <div className="login_form">
      <LoginForm
        title="后台管理系统"
        message={(msg: any) => <Alert message={msg} />}
        onFinish={async values => {
          await effect(NUser, EUserLogin, values)
          console.log('values: ', values)
        }}>
        <ProFormText
          name="phone"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          initialValue="desiyc"
          rules={[
            {
              required: true,
              message: '请输入手机!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          initialValue="desiyc"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginForm>
    </div>
  )
}
