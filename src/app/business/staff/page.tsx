'use client'

import { useState } from 'react'
import { Button, Table, Tag, Modal, Form, Input, Space, Select } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import DateRangeSearch from '@/components/common/DateRangeSearch'

interface Staff {
  id: number
  name: string
  phone: string
  avatar: string
  role: string
  storeName: string
  status: '在职' | '离职'
  joinTime: string
  lastLoginTime: string
}

export default function BusinessStaffPage() {
  const [searchForm] = Form.useForm()
  const [editForm] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const columns: ColumnsType<Staff> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '员工信息',
      width: 200,
      render: (_, record) => (
        <div className="flex items-center space-x-2">
          <img 
            src={record.avatar} 
            alt={record.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div>{record.name}</div>
            <div className="text-gray-500 text-sm">{record.phone}</div>
          </div>
        </div>
      ),
    },
    {
      title: '所属门店',
      dataIndex: 'storeName',
      width: 150,
    },
    {
      title: '角色',
      dataIndex: 'role',
      width: 120,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === '在职' ? 'success' : 'error'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '入职时间',
      dataIndex: 'joinTime',
      width: 180,
    },
    {
      title: '最后登录',
      dataIndex: 'lastLoginTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 180,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          {record.status === '在职' ? (
            <Button type="link" danger onClick={() => handleLeave(record.id)}>
              离职
            </Button>
          ) : (
            <Button type="link" onClick={() => handleRejoin(record.id)}>
              复职
            </Button>
          )}
          <Button type="link">详情</Button>
        </Space>
      ),
    },
  ]

  const mockData: Staff[] = [
    {
      id: 1,
      name: '张三',
      phone: '13800138000',
      avatar: '/avatars/staff1.png',
      role: '店长',
      storeName: '某某店铺',
      status: '在职',
      joinTime: '2024-01-01 09:00:00',
      lastLoginTime: '2024-01-15 14:30:00',
    },
    {
      id: 2,
      name: '李四',
      phone: '13800138001',
      avatar: '/avatars/staff2.png',
      role: '收银员',
      storeName: '某某店铺',
      status: '在职',
      joinTime: '2024-01-05 09:00:00',
      lastLoginTime: '2024-01-15 15:20:00',
    },
  ]

  const handleEdit = (record: Staff) => {
    setEditingId(record.id)
    editForm.setFieldsValue(record)
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setEditingId(null)
    editForm.resetFields()
    setIsModalOpen(true)
  }

  const handleLeave = (id: number) => {
    Modal.confirm({
      title: '确认离职',
      content: '确定要将该员工设置为离职状态吗？',
      onOk() {
        // 处理离职逻辑
      },
    })
  }

  const handleRejoin = (id: number) => {
    Modal.confirm({
      title: '确认复职',
      content: '确定要将该员工恢复为在职状态吗？',
      onOk() {
        // 处理复职逻辑
      },
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* 搜索区域 */}
      <Form
        form={searchForm}
        layout="inline"
        className="mb-4"
      >
        <Form.Item name="keyword">
          <Input
            placeholder="员工姓名/手机号"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item name="storeName">
          <Input
            placeholder="所属门店"
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item name="status">
          <Select
            placeholder="状态"
            style={{ width: 120 }}
            options={[
              { label: '全部', value: '' },
              { label: '在职', value: '在职' },
              { label: '离职', value: '离职' },
            ]}
          />
        </Form.Item>

        <DateRangeSearch 
          form={searchForm} 
          label="入职时间"
          showTime
          format="YYYY-MM-DD HH:mm:ss"
        />

        <Form.Item>
          <Space>
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button onClick={() => searchForm.resetFields()}>重置</Button>
          </Space>
        </Form.Item>
      </Form>

      {/* 操作按钮 */}
      <div className="mb-4">
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          新增员工
        </Button>
      </div>

      {/* 表格 */}
      <Table
        columns={columns}
        dataSource={mockData}
        rowKey="id"
        pagination={{
          total: mockData.length,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total) => `共 ${total} 条`,
        }}
        scroll={{ x: 1300 }}
      />

      {/* 编辑/新增弹窗 */}
      <Modal
        title={editingId ? '编辑员工' : '新增员工'}
        open={isModalOpen}
        onOk={() => {
          editForm.validateFields().then(values => {
            console.log('表单数据:', values)
            setIsModalOpen(false)
          })
        }}
        onCancel={() => setIsModalOpen(false)}
        width={600}
      >
        <Form
          form={editForm}
          layout="vertical"
          className="mt-4"
        >
          <Form.Item
            name="name"
            label="员工姓名"
            rules={[{ required: true, message: '请输入员工姓名' }]}
          >
            <Input placeholder="请输入员工姓名" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机号"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select
              options={[
                { label: '店长', value: '店长' },
                { label: '收银员', value: '收银员' },
                { label: '服务员', value: '服务员' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="storeName"
            label="所属门店"
            rules={[{ required: true, message: '请选择所属门店' }]}
          >
            <Select
              options={[
                { label: '某某店铺', value: '某某店铺' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
} 