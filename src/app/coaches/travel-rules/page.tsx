'use client'

import { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

interface TravelRuleData {
  key: string
  id: number
  serviceName: string
  city: string
  travelMode: string
  startKm: number
  startPrice: number
  perKm: number
  perKmPrice: number
  timeLimit: number
  enabled: boolean
  addTime: string
  updateTime: string
}

export default function TravelRulesPage() {
  const [searchText, setSearchText] = useState('')
  const [travelModeText, setTravelModeText] = useState('')

  const columns: ColumnsType<TravelRuleData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '服务名称',
      dataIndex: 'serviceName',
      width: 150,
    },
    {
      title: '城市',
      dataIndex: 'city',
      width: 120,
    },
    {
      title: '出行方式',
      dataIndex: 'travelMode',
      width: 120,
    },
    {
      title: '起步公里(km)',
      dataIndex: 'startKm',
      width: 120,
      align: 'right',
    },
    {
      title: '起步价格',
      dataIndex: 'startPrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${price.toFixed(2)}`,
    },
    {
      title: '超出公里(km)',
      dataIndex: 'perKm',
      width: 120,
      align: 'right',
    },
    {
      title: '超出价格/公里',
      dataIndex: 'perKmPrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${price.toFixed(2)}`,
    },
    {
      title: '时间限制',
      dataIndex: 'timeLimit',
      width: 100,
      align: 'right',
    },
    {
      title: '是否启用',
      dataIndex: 'enabled',
      width: 100,
      render: (enabled) => (
        <span className={enabled ? 'text-green-500' : 'text-red-500'}>
          {enabled ? '是' : '否'}
        </span>
      ),
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </>
      ),
    },
  ]

  const mockData: TravelRuleData[] = [
    {
      key: '1',
      id: 1,
      serviceName: '全天出租车',
      city: '���州市',
      travelMode: '出租车',
      startKm: 3,
      startPrice: 0.00,
      perKm: 1,
      perKmPrice: 0.00,
      timeLimit: 24,
      enabled: true,
      addTime: '2024-10-21 21:27:10',
      updateTime: '2024-10-21 21:27:10',
    }
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="服务名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Input
            placeholder="出行方式"
            value={travelModeText}
            onChange={(e) => setTravelModeText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加</Button>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1800 }}
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