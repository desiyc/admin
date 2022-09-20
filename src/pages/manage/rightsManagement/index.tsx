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
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '账号',
      dataIndex: 'account',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '操作',
      dataIndex: 'opetation',
      hideInSearch: true,
      align: 'center',
      render: (text, record) => (
        <>
          <a
            onClick={() => {
              onCreate(record)
            }}>
            编辑
          </a>
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
        toolbar={{
          actions: [
            <Button
              key="primary"
              type="primary"
              onClick={() => {
                onCreate(null)
              }}>
              新建
            </Button>,
          ],
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
