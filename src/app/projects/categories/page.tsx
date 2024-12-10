'use client'

import { useState } from 'react'
import { Table, Input, Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CategoryData {
  key: string
  id: number
  name: string
  icon: string
  isActive: boolean
  isVIP: boolean
  sortOrder: number
  createTime: string
}

export default function CategoriesPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<CategoryData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width: 180,
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
      width: 100,
      render: (icon) => (
        <img src={icon} alt="分类图标" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '是否启用',
      dataIndex: 'isActive',
      key: 'isActive',
      width: 100,
      render: (isActive) => (isActive ? '是' : '否'),
    },
    {
      title: '是否VIP项目',
      dataIndex: 'isVIP',
      key: 'isVIP',
      width: 100,
      render: (isVIP) => (isVIP ? '是' : '否'),
    },
    {
      title: '分类排序',
      dataIndex: 'sortOrder',
      key: 'sortOrder',
      width: 100,
    },
    {
      title: '添加时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => (
        <Space>
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small">删除</Button>
        </Space>
      ),
    },
  ]

  const mockData: CategoryData[] = []

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <Input.Search
          placeholder="分类名"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary">查询</Button>
        <Button type="primary">+ 添加分类</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        locale={{ emptyText: '暂无数据' }}
        pagination={{
          total: 0,
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
