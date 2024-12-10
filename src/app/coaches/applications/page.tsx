'use client'

import { useState } from 'react'
import { Table, Input, Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CoachLevelData {
  key: string
  id: number
  avatar: string
  client: string
  coachId: number
  namePhone: string
  genderAge: string
  reviewStatus: string
  city: string
  certification: string
  inviter: string
  reason: string
  note: string
  applicationTime: string
  reviewTime: string
}

export default function CoachLevelsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<CoachLevelData> = [
    {
      title: '教练头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 100,
      render: (avatar) => (
        <img src={avatar} alt="头像" className="w-10 h-10 object-cover rounded-full" />
      ),
    },
    {
      title: '所属商户',
      dataIndex: 'client',
      key: 'client',
      width: 120,
    },
    {
      title: '教练ID',
      dataIndex: 'coachId',
      key: 'coachId',
      width: 80,
    },
    {
      title: '姓名/电话',
      dataIndex: 'namePhone',
      key: 'namePhone',
      width: 180,
    },
    {
      title: '性别/年龄',
      dataIndex: 'genderAge',
      key: 'genderAge',
      width: 100,
    },
    {
      title: '审核状态',
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      width: 100,
    },
    {
      title: '意向城市',
      dataIndex: 'city',
      key: 'city',
      width: 100,
    },
    {
      title: '实名认证',
      dataIndex: 'certification',
      key: 'certification',
      width: 100,
    },
    {
      title: '邀请人',
      dataIndex: 'inviter',
      key: 'inviter',
      width: 100,
    },
    {
      title: '驳回原因',
      dataIndex: 'reason',
      key: 'reason',
      width: 150,
    },
    {
      title: '备注',
      dataIndex: 'note',
      key: 'note',
      width: 150,
    },
    {
      title: '申请时间',
      dataIndex: 'applicationTime',
      key: 'applicationTime',
      width: 160,
    },
    {
      title: '审核时间',
      dataIndex: 'reviewTime',
      key: 'reviewTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: () => (
        <Space>
          <Button type="link" size="small">查看</Button>
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small">删除</Button>
        </Space>
      ),
    },
  ]

  const mockData: CoachLevelData[] = [
    {
      key: '1',
      id: 1,
      avatar: '/avatar1.jpg',
      client: '测试商户',
      coachId: 10001,
      namePhone: '张三 / 13800138000',
      genderAge: '男 / 28',
      reviewStatus: '待审核',
      city: '杭州市',
      certification: '已认证',
      inviter: '李四',
      reason: '',
      note: '',
      applicationTime: '2024-12-10 10:00:00',
      reviewTime: '',
    }
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
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
