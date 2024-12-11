'use client'

import React from 'react'
import { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

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

const UpgradeLogsPage: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<UpgradeLogData> = [
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

  const mockData: UpgradeLogData[] = [
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

  return (
    <div className="p-6">
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
        columns={columns}
        dataSource={mockData}
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
  )
}

export default UpgradeLogsPage 