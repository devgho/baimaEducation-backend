'use client'

import { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

interface TravelModelData {
  key: string
  id: number
  name: string
  type: string
  enabled: boolean
  addTime: string
  updateTime: string
}

export default function TravelModelsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<TravelModelData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '出行方式',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 120,
    },
    {
      title: '是否启用',
      dataIndex: 'enabled',
      width: 100,
      render: (enabled) => (
        <span className={enabled ? 'text-green-500' : 'text-red-500'}>
          {enabled ? '是' : '否'}
        </span>
      ),
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </>
      ),
    },
  ]

  const mockData: TravelModelData[] = [
    {
      key: '1',
      id: 1,
      name: '出租车',
      type: '出租车',
      enabled: true,
      addTime: '2024-10-21 21:26:18',
      updateTime: '2024-10-21 21:26:18',
    }
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="出行方式"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1000 }}
        pagination={{
          total: 1,
          current: 1,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条`,
        }}
      />
    </div>
  )
} 