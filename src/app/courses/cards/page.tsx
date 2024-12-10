'use client'

import { useState } from 'react'
import { Table, Input, Tag, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CourseCardData {
  key: string
  id: number
  userId: string
  userPhone: string
  courseName: string
  price: number
  duration: number
  isUsed: boolean
  expiryTime: string
  useNumber: string
  useTime: string
  createTime: string
}

export default function CourseCardsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<CourseCardData> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '用户ID',
      key: 'user',
      width: 180,
      render: (_, record) => (
        <div>
          <div>{record.userId}</div>
          <div className="text-gray-400 text-sm">号码: {record.userPhone}</div>
        </div>
      ),
    },
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName',
      width: 180,
    },
    {
      title: '课程价格',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      render: (price) => <span className="text-red-500">¥{price.toFixed(2)}</span>,
    },
    {
      title: '课程时长(小时)',
      dataIndex: 'duration',
      key: 'duration',
      width: 120,
      render: (duration) => `${duration}小时`,
    },
    {
      title: '是否已使用',
      dataIndex: 'isUsed',
      key: 'isUsed',
      width: 100,
      render: (isUsed) => (
        <Tag color={isUsed ? 'success' : 'default'}>
          {isUsed ? '已使用' : '未使用'}
        </Tag>
      ),
    },
    {
      title: '截止时间',
      dataIndex: 'expiryTime',
      key: 'expiryTime',
      width: 160,
    },
    {
      title: '使用单号',
      dataIndex: 'useNumber',
      key: 'useNumber',
      width: 180,
      render: (number) => number || '--无--',
    },
    {
      title: '使用时间',
      dataIndex: 'useTime',
      key: 'useTime',
      width: 160,
      render: (time) => time || '--未使用--',
    },
    {
      title: '生成时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 160,
    },
  ]

  const mockData: CourseCardData[] = [
    {
      key: '59',
      id: 59,
      userId: '小魔法ID: (1)',
      userPhone: '13268124477',
      courseName: '沉浸式体验课1',
      price: 299.00,
      duration: 2,
      isUsed: false,
      expiryTime: '2024-12-19 16:22:33',
      useNumber: '',
      useTime: '',
      createTime: '2024-11-19 16:22:33',
    },
    {
      key: '56',
      id: 56,
      userId: '小魔法ID: (1)',
      userPhone: '13268124477',
      courseName: '沉浸式体验课1',
      price: 299.00,
      duration: 2,
      isUsed: true,
      expiryTime: '2024-12-19 15:50:27',
      useNumber: '202411195557949',
      useTime: '2024-11-19 16:23:35',
      createTime: '2024-11-19 15:50:27',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center space-x-4">
        <Input.Search
          placeholder="用户ID/手机号"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Input.Search
          placeholder="课程名称"
          style={{ width: 200 }}
        />
        <Input.Search
          placeholder="课程编号"
          style={{ width: 200 }}
        />
        <Button type="primary">查询</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1600 }}
        pagination={{
          total: 59,
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
