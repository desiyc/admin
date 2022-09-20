import React, { Component, useRef, useState } from 'react'
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table'

export default function index() {
  /*--------------------- Hook ---------------------*/
  const actionRef: any = useRef<ActionType>()
  const [visible, setVisble]: any = useState(false)
  const [editItem, setEditItem]: any = useState()
  const columns: ProColumns<any>[] = [
    {
      title: '日期',
      dataIndex: 'createdAt',
    },
    {
      title: '激活人数',
      dataIndex: 'a',
    },
    {
      title: '新增人数',
      dataIndex: 'b',
    },
    {
      title: '注册人数',
      dataIndex: 'c',
    },
    {
      title: '登录人数',
      dataIndex: 'd',
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
        search={false}
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
    </div>
  )
}
