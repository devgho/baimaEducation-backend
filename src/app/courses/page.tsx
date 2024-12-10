'use client'

import { useState } from 'react'
import { Table, Button, Input, Select, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CourseData {
  key: string
  id: number
  image: string
  name: string
  location: string
  category: string
  duration: string
  quantity: number
  price: number
  originalPrice: number
  studentCount: number
  commentCount: number
  status: string
  updateTime: string
}

export default function CoursesPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<CourseData> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '课程图片',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      render: (image) => (
        <img src={image} alt="课程图片" className="w-16 h-16 object-cover rounded" />
      ),
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '课程区域',
      dataIndex: 'location',
      key: 'location',
      width: 100,
    },
    {
      title: '课程类别',
      dataIndex: 'category',
      key: 'category',
      width: 120,
    },
    {
      title: '课程时长',
      dataIndex: 'duration',
      key: 'duration',
      width: 100,
    },
    {
      title: '课程数量',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      align: 'center',
    },
    {
      title: '售价',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      render: (price) => <span className="text-red-500">¥{price.toFixed(2)}</span>,
    },
    {
      title: '原价',
      dataIndex: 'originalPrice',
      key: 'originalPrice',
      width: 100,
      render: (price) => <span>¥{price.toFixed(2)}</span>,
    },
    {
      title: '学员数',
      dataIndex: 'studentCount',
      key: 'studentCount',
      width: 80,
    },
    {
      title: '评论数',
      dataIndex: 'commentCount',
      key: 'commentCount',
      width: 80,
    },
    {
      title: '课程状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => (
        <span className={status === '正常' ? 'text-green-500' : 'text-gray-500'}>
          {status}
        </span>
      ),
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Space>
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small">删除</Button>
        </Space>
      ),
    },
  ]

  const mockData: CourseData[] = [
    {
      key: '1',
      id: 5,
      image: '/course1.jpg',
      name: '超级vip课程',
      location: '杭州市',
      category: '超级vip课程',
      duration: '120分钟',
      quantity: 20,
      price: 150.00,
      originalPrice: 150.00,
      studentCount: 0,
      commentCount: 1,
      status: '正常',
      updateTime: '2024-11-14 15:42:01',
    },
    {
      key: '2',
      id: 4,
      image: '/course2.jpg',
      name: '皇家体验',
      location: '广州市',
      category: '皇家体验',
      duration: '60分钟',
      quantity: 30,
      price: 199.00,
      originalPrice: 299.00,
      studentCount: 30,
      commentCount: 2,
      status: '正常',
      updateTime: '2024-11-13 10:14:27',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input.Search
            placeholder="搜索课程名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Select defaultValue="全部" style={{ width: 120 }}>
            <Select.Option value="全部">全部</Select.Option>
            <Select.Option value="广州市">广州市</Select.Option>
            <Select.Option value="杭州市">杭州市</Select.Option>
          </Select>
        </div>
        <Button type="primary">添加课程</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1500 }}
        pagination={{
          total: 35,
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
