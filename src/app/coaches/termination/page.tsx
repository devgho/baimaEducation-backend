'use client'

import React, { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface TerminationData {
  key: string
  id: number
  avatarUrl: string    // 教练头像
  coachId: string      // 教练ID
  coachName: string    // 教练姓名
  reason: string       // 解约原因
  status: string       // 状态
  note: string        // 备注
  adminNote: string    // 管理员备注
  addTime: string      // 创建时间
  reviewTime: string   // 审核时间
}

export default function TerminationPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<TerminationData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '教练头像',
      dataIndex: 'avatarUrl',
      width: 100,
      render: (avatarUrl) => (
        <img 
          src={avatarUrl} 
          alt="教练头像" 
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      title: '教练ID',
      dataIndex: 'coachId',
      width: 100,
    },
    {
      title: '教练姓名',
      dataIndex: 'coachName',
      width: 120,
    },
    {
      title: '解约原因',
      dataIndex: 'reason',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
    },
    {
      title: '备注',
      dataIndex: 'note',
      width: 200,
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 200,
    },
    {
      title: '创建时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '审核时间',
      dataIndex: 'reviewTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: () => (
        <Button type="link">编辑</Button>
      ),
    },
  ]

  const mockData: TerminationData[] = [
    {
      key: '1',
      id: 1,
      avatarUrl: '/default-avatar.png',
      coachId: 'COACH001',
      coachName: '张教练',
      reason: '个人原因申请解约',
      status: '已解约',
      note: '希望终止合作',
      adminNote: '同意解约申请',
      addTime: '2024-03-14 10:00:00',
      reviewTime: '2024-03-14 15:00:00',
    }
  ]

  return (
    <div className="bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="教练姓名"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 1500 }}
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