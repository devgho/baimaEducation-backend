'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Select } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CTagData {
  key: string
  id: number
  standardName: string  // 标准名称
  sortOrder: number    // 排序序号
  status: string      // 状态
  addTime: string
  updateTime: string
}

export default function CTagPage() {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('')

  const columns: ColumnsType<CTagData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '标准名称',
      dataIndex: 'standardName',
      width: 150,
    },
    {
      title: '排序序号',
      dataIndex: 'sortOrder',
      width: 100,
      align: 'right',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
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
      width: 200,
      render: () => (
        <div className="space-x-2">
          <Button type="link">编辑</Button>
          <Button type="link">删除</Button>
          <Button type="link">添加时段</Button>
        </div>
      ),
    },
  ]

  const mockData: CTagData[] = [
    {
      key: '1',
      id: 1,
      standardName: '标准名称示例',
      sortOrder: 1,
      status: '启用',
      addTime: '2024-03-14 10:00:00',
      updateTime: '2024-03-14 10:00:00',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="标准名称"
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
              { value: '', label: '全部状态' },
              { value: 'enabled', label: '启用' },
              { value: 'disabled', label: '禁用' },
            ]}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加标签</Button>
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