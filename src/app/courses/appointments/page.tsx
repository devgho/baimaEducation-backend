'use client'

import { useState } from 'react'
import { Table, Input, Tag, Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface AppointmentData {
  key: string
  id: number
  orderNumber: string
  courseName: string
  studentInfo: {
    id: string
    phone: string
  }
  coachInfo: {
    id: string
    phone: string
  }
  storeInfo: {
    name: string
    phone: string
  }
  appointmentTime: string
  appointmentStatus: string
  orderStatus: string
  paymentTime: string
  createTime: string
}

export default function CourseAppointmentsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<AppointmentData> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      width: 180,
    },
    {
      title: '预约项目',
      dataIndex: 'courseName',
      key: 'courseName',
      width: 180,
    },
    {
      title: '下单用户信息',
      key: 'studentInfo',
      width: 180,
      render: (_, record) => (
        <div>
          <div>{record.studentInfo.id}</div>
          <div className="text-gray-400 text-sm">号码: {record.studentInfo.phone}</div>
        </div>
      ),
    },
    {
      title: '预约教练信息',
      key: 'coachInfo',
      width: 180,
      render: (_, record) => (
        <div>
          <div>{record.coachInfo.id}</div>
          <div className="text-gray-400 text-sm">号码: {record.coachInfo.phone}</div>
        </div>
      ),
    },
    {
      title: '预约门店/号码',
      key: 'storeInfo',
      width: 180,
      render: (_, record) => (
        <div>
          <div>{record.storeInfo.name}</div>
          <div className="text-gray-400 text-sm">号码: {record.storeInfo.phone}</div>
        </div>
      ),
    },
    {
      title: '预约时间',
      dataIndex: 'appointmentTime',
      key: 'appointmentTime',
      width: 160,
    },
    {
      title: '预约状态',
      dataIndex: 'appointmentStatus',
      key: 'appointmentStatus',
      width: 100,
      render: (status) => (
        <Tag color={status === '预约成功' ? 'success' : 'processing'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      width: 100,
      render: (status) => (
        <Tag color={
          status === '待评价' ? 'warning' : 
          status === '待接单' ? 'default' : 
          'default'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: '支付时间',
      dataIndex: 'paymentTime',
      key: 'paymentTime',
      width: 160,
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
        <Button type="link" size="small">详情</Button>
      ),
    },
  ]

  const mockData: AppointmentData[] = [
    {
      key: '21',
      id: 21,
      orderNumber: '202411195557949',
      courseName: '沉浸式体验课1',
      studentInfo: {
        id: '小魔法ID: (1)',
        phone: '13268124477',
      },
      coachInfo: {
        id: '御师ID: (2)',
        phone: '15920994177',
      },
      storeInfo: {
        name: '广州市天河店',
        phone: '020-12345678',
      },
      appointmentTime: '2024-11-19 17:00',
      appointmentStatus: '预约成功',
      orderStatus: '待评价',
      paymentTime: '2024-11-19 16:23:35',
      createTime: '2024-11-19 16:22:33',
    },
    {
      key: '20',
      id: 20,
      orderNumber: '202411199997505',
      courseName: '沉浸式体验课1',
      studentInfo: {
        id: '小魔法ID: (1)',
        phone: '13268124477',
      },
      coachInfo: {
        id: '御师ID: (2)',
        phone: '15920994177',
      },
      storeInfo: {
        name: '广州市番禺店',
        phone: '020-87654321',
      },
      appointmentTime: '2024-11-19 16:30',
      appointmentStatus: '预约成功',
      orderStatus: '待接单',
      paymentTime: '2024-11-19 16:09:48',
      createTime: '2024-11-19 16:08:48',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center space-x-4">
        <Space>
          <Input.Search
            placeholder="用户ID/手机号"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Input.Search
            placeholder="教练ID/手机号"
            style={{ width: 200 }}
          />
          <Input.Search
            placeholder="订单号"
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </Space>
      </div>

      <div className="mb-4">
        <Space>
          <Button>全部</Button>
          <Button>广州市</Button>
          <Button>杭州市</Button>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1800 }}
        pagination={{
          total: 21,
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
