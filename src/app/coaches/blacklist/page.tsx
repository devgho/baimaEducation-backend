'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Select, DatePicker } from 'antd'
import type { ColumnsType } from 'antd/es/table'
const { RangePicker } = DatePicker

interface BlacklistData {
  key: string
  id: number
  coachName: string      // 教练
  blacklistUser: string  // 拉黑用户
  description: string    // 拉黑描述
  addTime: string       // 添加时间
}

export default function BlacklistPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<BlacklistData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '教练',
      dataIndex: 'coachName',
      width: 120,
    },
    {
      title: '拉黑用户',
      dataIndex: 'blacklistUser',
      width: 120,
    },
    {
      title: '拉黑描述',
      dataIndex: 'description',
      width: 300,
      ellipsis: true,
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right',
      render: () => (
        <div className="space-x-2">
          <Button type="link">编辑</Button>
          <Button type="link" danger>解除拉黑</Button>
        </div>
      ),
    },
  ]

  const mockData: BlacklistData[] = [
    {
      key: '1',
      id: 1,
      coachName: '张教练',
      blacklistUser: '王小明',
      description: '多次爽约，态度恶劣，影响教练正常工作',
      addTime: '2024-03-14 16:00:00',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="教练/用户名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <RangePicker 
            placeholder={['开始时间', '结束时间']}
            style={{ width: 300 }}
          />
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </div>
        <Button type="primary" danger>添加黑名单</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1200 }}
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