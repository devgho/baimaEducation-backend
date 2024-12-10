'use client'

import { useState } from 'react'
import { Table, Input, Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface ProjectData {
  key: string
  id: number
  image: string
  name: string
  location: string
  type: string
  description: string
  genderRestriction: string
  targetGroup: string
  duration: string
  cost: number
  originalCost: number
  effectiveness: number
  isPublished: boolean
  status: string
  order: number
  createTime: string
}

export default function ProjectsPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<ProjectData> = [
    {
      title: '序号ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '项目图',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      render: (image) => (
        <img src={image} alt="项目图" className="w-16 h-16 object-cover rounded" />
      ),
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      width: 180,
    },
    {
      title: '服务城市',
      dataIndex: 'location',
      key: 'location',
      width: 100,
    },
    {
      title: '项目类型',
      dataIndex: 'type',
      key: 'type',
      width: 120,
    },
    {
      title: '简介',
      dataIndex: 'description',
      key: 'description',
      width: 200,
    },
    {
      title: '性别限制',
      dataIndex: 'genderRestriction',
      key: 'genderRestriction',
      width: 100,
    },
    {
      title: '适用人群',
      dataIndex: 'targetGroup',
      key: 'targetGroup',
      width: 120,
    },
    {
      title: '服务时长',
      dataIndex: 'duration',
      key: 'duration',
      width: 100,
    },
    {
      title: '服务费用',
      dataIndex: 'cost',
      key: 'cost',
      width: 100,
      render: (cost) => <span className="text-red-500">¥{cost.toFixed(2)}</span>,
    },
    {
      title: '原价',
      dataIndex: 'originalCost',
      key: 'originalCost',
      width: 100,
      render: (cost) => <span>¥{cost.toFixed(2)}</span>,
    },
    {
      title: '服务次数',
      dataIndex: 'effectiveness',
      key: 'effectiveness',
      width: 80,
    },
    {
      title: '是否上线',
      dataIndex: 'isPublished',
      key: 'isPublished',
      width: 80,
      render: (isPublished) => (isPublished ? '是' : '否'),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
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
        <Space>
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small">删除</Button>
        </Space>
      ),
    },
  ]

  const mockData: ProjectData[] = [
    {
      key: '1',
      id: 1,
      image: '/project1.jpg',
      name: '项目健身',
      location: '杭州市',
      type: '正式项目',
      description: '项目介绍',
      genderRestriction: '不限',
      targetGroup: '所有人',
      duration: '60分钟',
      cost: 399.00,
      originalCost: 499.00,
      effectiveness: 0,
      isPublished: true,
      status: '正常',
      order: 0,
      createTime: '2024-10-16 16:48:57',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input.Search
            placeholder="项目ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Input.Search
            placeholder="项目名称"
            style={{ width: 200 }}
          />
          <Input.Search
            placeholder="项目城市"
            style={{ width: 200 }}
          />
          <Button type="primary">查询</Button>
        </div>
        <Button type="primary">+ 添加项目</Button>
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
