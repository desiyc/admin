import React, { Component, useRef, useState } from 'react'
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table'
import { Button, Select } from 'antd'

export default function index() {
  /*--------------------- Hook ---------------------*/

  const actionRef: any = useRef<ActionType>()
  const [visible, setVisble]: any = useState(false)
  const [editItem, setEditItem]: any = useState()
  const columns: ProColumns<any>[] = [
    {
      title: '日期',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
    },
    {
      title: '激活人数',
      dataIndex: 'a',
      hideInSearch: true,
    },
    {
      title: '新增人数',
      dataIndex: 'b',
      hideInSearch: true,
    },
    {
      title: '注册人数',
      dataIndex: 'c',
      hideInSearch: true,
    },
    {
      title: '登录人数',
      dataIndex: 'd',
      hideInSearch: true,
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
        toolbar={{
          actions: [
            <Button
              key="primary"
              type="primary"
              onClick={() => {
                onCreate(null)
              }}>
              导出
            </Button>,
          ],
        }}
        pagination={{
          pageSize: 10,
        }}></ProTable>
    </div>
  )
}
