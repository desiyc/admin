import React, { Component, useRef, useState } from 'react'
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table'
import { Button } from 'antd'
// import Edit from './Edit'
export default function index() {
  /*--------------------- Hook ---------------------*/
  const actionRef: any = useRef<ActionType>()
  const [visible, setVisble]: any = useState(false)
  const [editItem, setEditItem]: any = useState()
  const columns: ProColumns<any>[] = [
    {
      title: '首次登录时间',
      dataIndex: 'createdAt',
      hideInSearch: true,
    },
    {
      title: '注册时间',
      dataIndex: 'createdAt',
      hideInSearch: true,
    },
    {
      title: '账号绑定信息',
      dataIndex: 'createdAt',
      hideInSearch: true,
    },
    {
      title: '账号',
      dataIndex: 'createdAt',
    },
    {
      title: '密码',
      dataIndex: 'createdAt',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'opetation',
      hideInSearch: true,
      align: 'center',
      render: (text, record) => (
        <>
          <a onClick={() => {}}>删除账号</a>
          <a onClick={() => {}}>取消绑定</a>
        </>
      ),
    },
  ]

  /*--------------------- 生命周期 ---------------------*/
  /*--------------------- 响应 ------------------------*/
  //新建编辑
  const onCreate = (record: any) => {
    setEditItem(record)
    setVisble(true)
  }
  /*--------------------- 渲染 ----------------------*/
  return (
    <div>
      <ProTable
        search={{ labelWidth: 'auto' }}
        rowKey="id"
        actionRef={actionRef}
        columns={columns}
        bordered
        request={async (params = {}, sort, filter) => {
          // const res = await requestGet('department/depList', { ...params })
          // return {
          //   data: res.data,
          //   success: true,
          //   total: res.count,
          // }
        }}
        pagination={{
          pageSize: 10,
        }}></ProTable>
      {/* <Edit
          title={`${editItem ? '编辑' : '新建'}科室`}
          visible={visible}
          editItem={editItem}
          onOk={(payload: any) => {
            // effect(NDemo, payload.id ? EPut : EPost, payload).then(() => {
            //   actionRef.current.reload()
            //   setVisble(false)
            // })
          }}
          onCancel={() => {
            setVisble(false)
          }}
        /> */}
    </div>
  )
}
