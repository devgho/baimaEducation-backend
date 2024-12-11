'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Select } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface TitleData {
  key: string
  id: number
  group: string      // 职称介绍
  name: string       // 职称名称
  sort: number       // 排序
  status: string     // 状态
  adminNote: string  // 管理员备注
  addTime: string    // 添加时间
  updateTime: string // 更新时间
}

export default function TitlesPage() {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('')

  const columns: ColumnsType<TitleData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '职称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '职称介绍',
      dataIndex: 'group',
      width: 150,
    },
    {
      title: '排序',
      dataIndex: 'sort',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 200,
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
      fixed: 'right',
      render: () => (
        <Button type="link">编辑</Button>
      ),
    },
  ]

  const mockData: TitleData[] = [
    {
      key: '1',
      id: 1,
      name: '高级教练',
      group: '资深教练职称',
      sort: 1,
      status: '启用',
      adminNote: '系统默认',
      addTime: '2024-03-14 10:00:00',
      updateTime: '2024-03-14 10:00:00',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="职称名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Select
            placeholder="请选择状态"
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
            style={{ width: 200 }}
            options={[
              { value: '', label: '全部' },
              { value: 'enabled', label: '启用' },
              { value: 'disabled', label: '禁用' },
            ]}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加职称</Button>
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