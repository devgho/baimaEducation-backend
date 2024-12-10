'use client'

import { useState } from 'react'
import { Table, Input, Space, Button, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface PurchaseData {
  key: string
  id: number
  userId: string
  userPhone: string
  orderNumber: string
  courseName: string
  price: number
  discountPrice: number
  originalPrice: number
  quantity: number
  paymentStatus: string
  paymentMethod: string
  purchaseTime: string
  paymentTime: string
}

export default function CoursePurchasesPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<PurchaseData> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '用户/号码',
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
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      width: 180,
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
      title: '优惠券金额',
      dataIndex: 'discountPrice',
      key: 'discountPrice',
      width: 100,
      render: (price) => <span className="text-green-500">¥{price.toFixed(2)}</span>,
    },
    {
      title: '实付金额',
      dataIndex: 'originalPrice',
      key: 'originalPrice',
      width: 100,
      render: (price) => <span>¥{price.toFixed(2)}</span>,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 80,
      align: 'center',
    },
    {
      title: '支付状态',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      width: 100,
      render: (status) => (
        <Tag color={status === '已支付' ? 'success' : status === '未支付' ? 'warning' : 'error'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '支付方式',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      width: 100,
    },
    {
      title: '购买时间',
      dataIndex: 'purchaseTime',
      key: 'purchaseTime',
      width: 160,
    },
    {
      title: '支付时间',
      dataIndex: 'paymentTime',
      key: 'paymentTime',
      width: 160,
      render: (time) => time || '--未支付--',
    },
  ]

  const mockData: PurchaseData[] = [
    {
      key: '54',
      id: 54,
      userId: 'ID: (7)',
      userPhone: '13819126511',
      orderNumber: '202411291015159',
      courseName: '超级vip课程',
      price: 150.00,
      discountPrice: 0.00,
      originalPrice: 150.00,
      quantity: 1,
      paymentStatus: '待支付',
      paymentMethod: '微信支付',
      purchaseTime: '2024-11-29 11:14:00',
      paymentTime: '',
    },
    {
      key: '53',
      id: 53,
      userId: '小魔法ID: (1)',
      userPhone: '13268124477',
      orderNumber: '202411195710085',
      courseName: '沉浸式体验课1',
      price: 299.00,
      discountPrice: 0.00,
      originalPrice: 299.00,
      quantity: 1,
      paymentStatus: '已支付',
      paymentMethod: '余额支付',
      purchaseTime: '2024-11-19 16:22:33',
      paymentTime: '2024-11-19 16:22:33',
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
          placeholder="订单号"
          style={{ width: 200 }}
        />
        <Button type="primary">查询</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1600 }}
        pagination={{
          total: 54,
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
