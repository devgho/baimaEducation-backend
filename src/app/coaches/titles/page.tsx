'use client'

import { useState } from 'react'
import { Button, Table, Tag, Modal, Form, Input, Space, InputNumber, Select } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import DateRangeSearch from '@/components/common/DateRangeSearch'

interface CoachTitle {
  id: number
  name: string
  avatarFrame: string
  status: '启用' | '停用'
  adminNote: string
  createdTime: string
  updatedTime: string
}

export default function CoachTitlesPage() {
  const [searchForm] = Form.useForm()
  const [editForm] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const columns: ColumnsType<CoachTitle> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '头像框',
      dataIndex: 'avatarFrame',
      width: 120,
      render: (avatarFrame) => (
        <img 
          src={avatarFrame} 
          alt="头像框" 
          className="w-10 h-10 object-contain"
          onError={(e) => {
            e.currentTarget.src = '/default-avatar-frame.png'
          }}
        />
      ),
    },
    {
      title: '是否启用',
      dataIndex: 'status',
      width: 100,
      render: (status: string) => (
        <Tag color={status === '启用' ? 'success' : 'error'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 200,
      ellipsis: true,
    },
    {
      title: '添加时间',
      dataIndex: 'createdTime',
      width: 180,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedTime',
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
          <Button 
            type="link" 
            onClick={() => handleStatusChange(record)}
          >
            {record.status === '启用' ? '停用' : '启用'}
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const mockData: CoachTitle[] = [
    {
      id: 1,
      name: '金牌教练',
      avatarFrame: '/frames/gold.png',
      status: '启用',
      adminNote: '最高级别教练头衔',
      createdTime: '2024-01-15 10:00:00',
      updatedTime: '2024-01-15 10:00:00',
    },
    {
      id: 2,
      name: '银牌教练',
      avatarFrame: '/frames/silver.png',
      status: '启用',
      adminNote: '中级教练头衔',
      createdTime: '2024-01-15 10:00:00',
      updatedTime: '2024-01-15 10:00:00',
    },
  ]

  const handleEdit = (record: CoachTitle) => {
    setEditingId(record.id)
    editForm.setFieldsValue(record)
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setEditingId(null)
    editForm.resetFields()
    setIsModalOpen(true)
  }

  const handleStatusChange = (record: CoachTitle) => {
    Modal.confirm({
      title: `确认${record.status === '启用' ? '停用' : '启用'}`,
      content: `确定要${record.status === '启用' ? '停用' : '启用'}该头衔吗？`,
      onOk() {
        // 处理状态变更
      },
    })
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该头衔吗？',
      onOk() {
        // 处理删除
      },
    })
  }

  const handleModalOk = () => {
    editForm.validateFields().then(values => {
      console.log('表单数据:', values)
      setIsModalOpen(false)
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
            placeholder="头衔名称/ID"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item name="status">
          <Select
            placeholder="状态"
            style={{ width: 120 }}
            options={[
              { label: '全部', value: '' },
              { label: '启用', value: '启用' },
              { label: '停用', value: '停用' },
            ]}
          />
        </Form.Item>

        <DateRangeSearch 
          form={searchForm} 
          label="创建时间"
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
          新增头衔
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
        title={editingId ? '编辑头衔' : '新增头衔'}
        open={isModalOpen}
        onOk={handleModalOk}
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
            label="名称"
            rules={[{ required: true, message: '请输入头衔名称' }]}
          >
            <Input placeholder="请输入头衔名称" />
          </Form.Item>

          <Form.Item
            name="avatarFrame"
            label="头像框"
            rules={[{ required: true, message: '请上传头像框' }]}
          >
            <Input placeholder="请输入头像框图片URL" />
          </Form.Item>

          <Form.Item
            name="status"
            label="是否启用"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select
              options={[
                { label: '启用', value: '启用' },
                { label: '停用', value: '停用' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="adminNote"
            label="管理员备注"
          >
            <Input.TextArea
              rows={3}
              placeholder="请输入管理员备注"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
} 