'use client'

import React, { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface TagData {
  key: string
  id: number
  tagName: string
  count: number
  adminNote: string
  addTime: string
  updateTime: string
}

export default function TagsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<TagData> = [
    {
      title: '标签名称',
      dataIndex: 'tagName',
      width: 150,
    },
    {
      title: '人数',
      dataIndex: 'count',
      width: 100,
      align: 'right',
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 120,
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => (
        <Button type="link" danger>删除</Button>
      ),
    },
  ]

  const mockData: TagData[] = [
    {
      key: '1',
      id: 1,
      tagName: '标签名称',
      count: 0,
      adminNote: '系统默认',
      addTime: '2024-11-25 16:42:52',
      updateTime: '2024-11-25 16:42:52',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="标签名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加标签</Button>
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