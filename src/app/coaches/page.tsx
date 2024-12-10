'use client'

import { useState } from 'react'
import { Table, Input, Button, Space, Select, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CoachData {
  key: string
  id: number
  avatar: string
  name: string
  phone: string
  isCertified: boolean
  gender: string
  age: number
  city: string
  isActive: boolean
  status: string
  totalIncome: number
  balance: number
  fare: number
  totalFareIncome: number
  totalOrders: number
  userRating: number
  reviewStatus: string
  updateTime: string
}

export default function CoachesPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<CoachData> = [
    {
      title: '教练ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 100,
      render: (avatar) => (
        <img src={avatar} alt="头像" className="w-10 h-10 object-cover rounded-full" />
      ),
    },
    {
      title: '教练姓名',
      dataIndex: 'name',
      key: 'name',
      width: 180,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: '是否认证',
      dataIndex: 'isCertified',
      key: 'isCertified',
      width: 100,
      render: (isCertified) => (
        <Tag color={isCertified ? 'success' : 'error'}>
          {isCertified ? '已认证' : '未认证'}
        </Tag>
      ),
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 80,
    },
    {
      title: '所在城市',
      dataIndex: 'city',
      key: 'city',
      width: 100,
    },
    {
      title: '是否在线',
      dataIndex: 'isActive',
      key: 'isActive',
      width: 100,
      render: (isActive) => (
        <Tag color={isActive ? 'green' : 'volcano'}>
          {isActive ? '在线' : '离线'}
        </Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
    },
    {
      title: '总收入',
      dataIndex: 'totalIncome',
      key: 'totalIncome',
      width: 100,
      render: (income) => <span className="text-red-500">¥{income.toFixed(2)}</span>,
    },
    {
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
      width: 100,
      render: (balance) => <span className="text-red-500">¥{balance.toFixed(2)}</span>,
    },
    {
      title: '车费',
      dataIndex: 'fare',
      key: 'fare',
      width: 100,
      render: (fare) => <span className="text-red-500">¥{fare.toFixed(2)}</span>,
    },
    {
      title: '总车费收入',
      dataIndex: 'totalFareIncome',
      key: 'totalFareIncome',
      width: 120,
      render: (income) => <span className="text-red-500">¥{income.toFixed(2)}</span>,
    },
    {
      title: '总订单数',
      dataIndex: 'totalOrders',
      key: 'totalOrders',
      width: 100,
    },
    {
      title: '用户评分',
      dataIndex: 'userRating',
      key: 'userRating',
      width: 100,
    },
    {
      title: '审核状态',
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      width: 100,
      render: (status) => (
        <Tag color={status === '通过' ? 'success' : 'warning'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '更新日期',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 400,
      render: () => (
        <div>
          <Space wrap>
            <Button type="link" size="small">编辑</Button>
            <Button type="link" size="small">服务地址</Button>
            <Button type="link" size="small">充值</Button>
            <Button type="link" size="small">标签</Button>
            <Button type="link" size="small">审核</Button>
          </Space>
          <Space wrap>
            <Button type="link" size="small">统计</Button>
            <Button type="link" size="small">期数</Button>
            <Button type="link" size="small">详情</Button>
            <Button type="link" size="small">检测</Button>
            <Button type="link" size="small">添加评论</Button>
          </Space>
        </div>
      ),
    },
  ]

  const mockData: CoachData[] = [
    {
      key: '1',
      id: 28,
      avatar: '/avatar1.jpg',
      name: '张三',
      phone: '15858236203',
      isCertified: false,
      gender: '女',
      age: 23,
      city: '杭州市',
      isActive: false,
      status: '关闭',
      totalIncome: 0,
      balance: 0,
      fare: 0,
      totalFareIncome: 0,
      totalOrders: 0,
      userRating: 0,
      reviewStatus: '通过',
      updateTime: '2024-12-09 10:00:00',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input.Search
            placeholder="教练ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Input.Search
            placeholder="教练信息"
            style={{ width: 200 }}
          />
          <Select defaultValue="全部" style={{ width: 120 }}>
            <Select.Option value="全部">全部</Select.Option>
            <Select.Option value="个人教练">个人教练</Select.Option>
            <Select.Option value="机构教练">机构教练</Select.Option>
          </Select>
          <Select defaultValue="全部" style={{ width: 120 }}>
            <Select.Option value="全部">全部</Select.Option>
            <Select.Option value="在线">在线</Select.Option>
            <Select.Option value="离线">离线</Select.Option>
          </Select>
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加教练</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 2000 }}
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
