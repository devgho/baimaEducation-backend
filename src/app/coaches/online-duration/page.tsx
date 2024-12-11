'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Select, DatePicker } from 'antd'
import type { ColumnsType } from 'antd/es/table'
const { RangePicker } = DatePicker

interface OnlineDurationData {
  key: string
  id: number
  name: string           // 教练姓名
  phone: string         // 手机号码
  onlineTime: string    // 在线时长(小时/分钟)
  addTime: string      // 添加时间
  city: string         // 所属城市
}

export default function OnlineDurationPage() {
  const [searchText, setSearchText] = useState('')
  const [cityFilter, setCityFilter] = useState<string>('')

  const columns: ColumnsType<OnlineDurationData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '教练姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      width: 150,
    },
    {
      title: '在线时长',
      dataIndex: 'onlineTime',
      width: 150,
    },
    {
      title: '所属城市',
      dataIndex: 'city',
      width: 120,
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 180,
      fixed: 'right',
      render: () => (
        <div className="space-x-2">
          <Button type="link">查看日数据</Button>
          <Button type="link">查看期数据</Button>
        </div>
      ),
    },
  ]

  const mockData: OnlineDurationData[] = [
    {
      key: '1',
      id: 1,
      name: '张教练',
      phone: '13800138000',
      onlineTime: '120小时30分钟',
      addTime: '2024-03-14 16:00:00',
      city: '杭州市',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="教练姓名/手机号"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Select
            placeholder="请选择城市"
            value={cityFilter}
            onChange={(value) => setCityFilter(value)}
            style={{ width: 200 }}
            options={[
              { value: '', label: '全部' },
              { value: 'hangzhou', label: '杭州' },
              { value: 'guangzhou', label: '广州' },
            ]}
          />
          <RangePicker 
            placeholder={['开始时间', '结束时间']}
            style={{ width: 300 }}
          />
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </div>
        <Button type="primary">导出统计</Button>
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