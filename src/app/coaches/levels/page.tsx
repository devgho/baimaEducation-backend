'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Tabs, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

// 等级列表数据接口
interface CoachLevelData {
  key: string
  id: number
  avatar: string
  coachId: string
  name: string
  phone: string
  todayServiceTime: string
  serviceAddress: string
  totalOpenSeconds: number
  onlineSeconds: number
  status: string
  reviewStatus: string
}

// 升级日志数据接口
interface UpgradeLogData {
  key: string
  id: number
  coachName: string
  phone: string
  oldLevel: string
  newLevel: string
  upgradeTime: string
  upgradeReason: string
}

export default function LevelsPage() {
  const [searchText, setSearchText] = useState('')
  const [activeTab, setActiveTab] = useState('list')

  // 等级列表列定义
  const levelColumns: ColumnsType<CoachLevelData> = [
    {
      title: '教练头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 100,
      render: (avatar) => (
        <img src={avatar} alt="头像" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '教练ID',
      dataIndex: 'coachId',
      key: 'coachId',
      width: 80,
    },
    {
      title: '姓名/电话',
      dataIndex: 'phone',
      key: 'phone',
      width: 180,
      render: (_, record) => (
        <div>
          <div>{record.name}</div>
          <div>{record.phone}</div>
        </div>
      ),
    },
    {
      title: '今日服务时间',
      dataIndex: 'todayServiceTime',
      key: 'todayServiceTime',
      width: 150,
    },
    {
      title: '服务地址',
      dataIndex: 'serviceAddress',
      key: 'serviceAddress',
      width: 200,
      render: (address) => (
        <div>
          <div>{address}</div>
          <div className="text-gray-500">区光证书号</div>
        </div>
      ),
    },
    {
      title: '最好开放总秒数',
      dataIndex: 'totalOpenSeconds',
      key: 'totalOpenSeconds',
      width: 120,
    },
    {
      title: '在线秒数/分',
      dataIndex: 'onlineSeconds',
      key: 'onlineSeconds',
      width: 120,
    },
    {
      title: '在线状态/系',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status) => (
        <Tag color={status === '可接单' ? 'success' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Button type="link" size="small">查看服务时间</Button>
      ),
    },
  ]

  // 升级日志列定义
  const logColumns: ColumnsType<UpgradeLogData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '教练姓名',
      dataIndex: 'coachName',
      width: 120,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      width: 120,
    },
    {
      title: '原等级',
      dataIndex: 'oldLevel',
      width: 100,
    },
    {
      title: '新等级',
      dataIndex: 'newLevel',
      width: 100,
    },
    {
      title: '升级时间',
      dataIndex: 'upgradeTime',
      width: 180,
    },
    {
      title: '升级原因',
      dataIndex: 'upgradeReason',
      width: 200,
    },
  ]

  // 等级列表模拟数据
  const levelMockData: CoachLevelData[] = [
    {
      key: '1',
      id: 1,
      avatar: '/avatar1.jpg',
      coachId: '13206124477',
      name: '洪流',
      phone: '13206124477',
      todayServiceTime: '',
      serviceAddress: '广东省广州市海珠区光证书号',
      totalOpenSeconds: 422713,
      onlineSeconds: 293.55,
      status: '可接单',
      reviewStatus: '已开放',
    },
    {
      key: '2',
      id: 2,
      avatar: '/avatar2.jpg',
      coachId: '15020994177',
      name: '胡明',
      phone: '15020994177',
      todayServiceTime: '',
      serviceAddress: '广东省广州市海珠区黄埔大道',
      totalOpenSeconds: 378860,
      onlineSeconds: 263.86,
      status: '可接单',
      reviewStatus: '已开放',
    },
  ]

  // 升级日志模拟数据
  const logMockData: UpgradeLogData[] = [
    {
      key: '1',
      id: 1,
      coachName: '张三',
      phone: '13800138000',
      oldLevel: '普通教练',
      newLevel: '金牌教练',
      upgradeTime: '2024-10-21 21:27:10',
      upgradeReason: '达到升级条件自动升级',
    }
  ]

  const items = [
    {
      key: 'list',
      label: '等级列表',
      children: (
        <div>
          <div className="mb-4 flex items-center space-x-4">
            <Input.Search
              placeholder="教练ID"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 200 }}
            />
            <Input.Search
              placeholder="教练姓名"
              style={{ width: 200 }}
            />
            <Input.Search
              placeholder="教练电话"
              style={{ width: 200 }}
            />
            <Button type="primary">查询</Button>
          </div>

          <Table
            columns={levelColumns}
            dataSource={levelMockData}
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
      ),
    },
    {
      key: 'logs',
      label: '升级日志',
      children: (
        <div>
          <div className="mb-4 flex items-center space-x-4">
            <Input
              placeholder="教练姓名/手机号"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 200 }}
            />
            <Button type="primary">查询</Button>
          </div>

          <Table
            columns={logColumns}
            dataSource={logMockData}
            scroll={{ x: 1000 }}
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
      ),
    },
  ]

  return (
    <div className="bg-white">
      <Tabs
        activeKey={activeTab}
        items={items}
        onChange={(key) => setActiveTab(key)}
        className="px-6"
      />
    </div>
  )
}
