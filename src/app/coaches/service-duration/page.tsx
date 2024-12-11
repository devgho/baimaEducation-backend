'use client'

import { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

interface ServiceDurationData {
  key: string
  id: number
  coachName: string
  phone: string
  locationEnabled: string
  onlineMinutes: number
  onlineDays: number
  coachStatus: string
  serviceArea: string
}

export default function ServiceDurationPage() {
  const [searchText, setSearchText] = useState('')
  const [phoneText, setPhoneText] = useState('')
  const [areaText, setAreaText] = useState('')

  const columns: ColumnsType<ServiceDurationData> = [
    {
      title: '教练头像',
      dataIndex: 'id',
      width: 80,
      render: () => (
        <img src="/avatar-placeholder.jpg" alt="头像" className="w-10 h-10 object-cover rounded-full" />
      ),
    },
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '姓名/电话',
      dataIndex: 'coachName',
      width: 200,
      render: (_, record) => (
        <div>
          <div>{record.coachName}</div>
          <div className="text-gray-400">{record.phone}</div>
        </div>
      ),
    },
    {
      title: '在线时长/分',
      dataIndex: 'onlineMinutes',
      width: 120,
      align: 'right',
    },
    {
      title: '在线天数/天',
      dataIndex: 'onlineDays',
      width: 120,
      align: 'right',
    },
    {
      title: '服务区域',
      dataIndex: 'serviceArea',
      width: 200,
    },
    {
      title: '是否开启实时位置',
      dataIndex: 'locationEnabled',
      width: 120,
      render: (status) => (
        <span className={status === '已开启' ? 'text-green-500' : 'text-red-500'}>
          {status}
        </span>
      ),
    },
    {
      title: '教练状态',
      dataIndex: 'coachStatus',
      width: 100,
      render: (status) => (
        <span className={status === '可服务' ? 'text-green-500' : 'text-red-500'}>
          {status}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Button type="link" className="text-red-500">
          查看服务时长
        </Button>
      ),
    },
  ]

  const mockData: ServiceDurationData[] = [
    {
      key: '1',
      id: 1,
      coachName: '洪流',
      phone: '13268124477',
      locationEnabled: '已开启',
      onlineMinutes: 422713,
      onlineDays: 205,
      coachStatus: '可服务',
      serviceArea: '广东省广州市番禺区区政府路',
    },
    {
      key: '2',
      id: 2,
      coachName: '胡明',
      phone: '15020984177',
      locationEnabled: '已开启',
      onlineMinutes: 379600,
      onlineDays: 263,
      coachStatus: '可服务',
      serviceArea: '广东省广州市番禺区区政府路',
    },
    {
      key: '7',
      id: 7,
      coachName: '陈波',
      phone: '13576895554',
      locationEnabled: '未开启',
      onlineMinutes: 0,
      onlineDays: 0,
      coachStatus: '不可服务',
      serviceArea: '',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center space-x-4">
        <Input
          placeholder="教练ID"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Input
          placeholder="教练电话"
          value={phoneText}
          onChange={(e) => setPhoneText(e.target.value)}
          style={{ width: 200 }}
        />
        <Input
          placeholder="服务区域"
          value={areaText}
          onChange={(e) => setAreaText(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary">查询</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1500 }}
        pagination={{
          total: 11,
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