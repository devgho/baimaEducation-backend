'use client'

import { useState } from 'react'
import { Button, Table, Tag, Modal, Form, Input, Space, InputNumber, Select, Tabs } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import DateRangeSearch from '@/components/common/DateRangeSearch'

interface Coupon {
  id: number
  name: string
  source: '平台' | '活动发放'
  storeScope: '全部门店' | '指定门店'
  storeList?: string[]
  discountAmount: number
  minSpend: number
  validDays?: number
  startTime?: string
  endTime?: string
  totalCount: number
  usedCount: number
  status: '正常' | '禁用'
  createdTime: string
}

export default function CouponsPage() {
  const [searchForm] = Form.useForm()
  const [editForm] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('list')

  const columns: ColumnsType<Coupon> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '优惠券名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '来源',
      dataIndex: 'source',
      width: 100,
    },
    {
      title: '使用门店',
      dataIndex: 'storeScope',
      width: 150,
      render: (scope, record) => (
        <div>
          <div>{scope}</div>
          {scope === '指定门店' && record.storeList && (
            <div className="text-gray-500 text-sm">
              {record.storeList.join(', ')}
            </div>
          )}
        </div>
      ),
    },
    {
      title: '满额减免',
      dataIndex: 'discountAmount',
      width: 100,
      render: (amount) => `¥${amount}`,
    },
    {
      title: '最低消费',
      dataIndex: 'minSpend',
      width: 100,
      render: (amount) => `¥${amount}`,
    },
    {
      title: '有效期',
      key: 'validPeriod',
      width: 150,
      render: (_, record) => (
        `领取${record.validDays}天内有效`
      ),
    },
    {
      title: '发放总量',
      dataIndex: 'totalCount',
      width: 100,
    },
    {
      title: '领取数量',
      dataIndex: 'usedCount',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === '正常' ? 'success' : 'error'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '添加时间',
      dataIndex: 'createdTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const mockData: Coupon[] = [
    {
      id: 1,
      name: '新用户优惠券',
      source: '平台',
      storeScope: '全部门店',
      discountAmount: 50,
      minSpend: 200,
      validDays: 60,
      totalCount: 1000,
      usedCount: 156,
      status: '正常',
      createdTime: '2024-01-01 10:00:00',
    },
    {
      id: 2,
      name: '店庆优惠券',
      source: '活动发放',
      storeScope: '指定门店',
      storeList: ['北京店', '上海店'],
      discountAmount: 100,
      minSpend: 500,
      startTime: '2024-02-01',
      endTime: '2024-02-07',
      totalCount: 500,
      usedCount: 0,
      status: '禁用',
      createdTime: '2024-01-15 14:30:00',
    },
  ]

  const handleEdit = (record: Coupon) => {
    setEditingId(record.id)
    editForm.setFieldsValue(record)
    setIsModalOpen(true)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该优惠券吗？',
      onOk() {
        // 处理删除逻辑
      },
    })
  }

  const tabItems = [
    {
      key: 'list',
      label: '优惠券列表',
      children: (
        <>
          {/* 搜索区域 */}
          <div className="mb-4">
            <Form
              form={searchForm}
              layout="inline"
            >
              <Form.Item name="id">
                <Input 
                  placeholder="ID" 
                  style={{ width: 200 }} 
                  className="mr-2"
                />
              </Form.Item>

              <Form.Item name="name">
                <Input 
                  placeholder="优惠券" 
                  style={{ width: 200 }} 
                  className="mr-2"
                />
              </Form.Item>

              <Form.Item name="storeScope">
                <Select
                  placeholder="使用门店"
                  style={{ width: 200 }}
                  className="mr-2"
                  options={[
                    { label: '全部', value: '' },
                    { label: '全部门店', value: '全部门店' },
                    { label: '指定门店', value: '指定门店' },
                  ]}
                />
              </Form.Item>

              <DateRangeSearch 
                form={searchForm} 
                name="dateRange"
                showTime
                label='指定时间'
                format="YYYY-MM-DD HH:mm:ss"
                className="mr-2"
              />

              <Form.Item>
                <Space>
                  <Button type="primary" icon={<SearchOutlined />}>
                    查询
                  </Button>
                  <Button type="primary" icon={<PlusOutlined />} onClick={() => {
                    setEditingId(null)
                    editForm.resetFields()
                    setIsModalOpen(true)
                  }}>
                    添加
                  </Button>
                </Space>
              </Form.Item>
            </Form>
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
            scroll={{ x: 1500 }}
          />

          {/* 编辑弹窗 */}
          <Modal
            title={editingId ? '编辑优惠券' : '新增优惠券'}
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
                label="优惠券名称"
                rules={[{ required: true, message: '请输入优惠券名称' }]}
              >
                <Input placeholder="请输入优惠券名称" />
              </Form.Item>

              <Form.Item
                name="storeScope"
                label="使用门店"
                rules={[{ required: true, message: '请选择使用门店' }]}
              >
                <Select
                  options={[
                    { label: '全部门店', value: '全部门店' },
                    { label: '指定门店', value: '指定门店' },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="discountAmount"
                label="满额减免"
                rules={[{ required: true, message: '请输入满额减免金额' }]}
              >
                <InputNumber
                  min={0}
                  style={{ width: '100%' }}
                  placeholder="请输入满额减免金额"
                  prefix="¥"
                />
              </Form.Item>

              <Form.Item
                name="minSpend"
                label="最低消费"
                rules={[{ required: true, message: '请输入最低消费金额' }]}
              >
                <InputNumber
                  min={0}
                  style={{ width: '100%' }}
                  placeholder="请输入最低消费金额"
                  prefix="¥"
                />
              </Form.Item>

              <Form.Item
                name="validDays"
                label="有效期"
                rules={[{ required: true, message: '请输入有效天数' }]}
              >
                <InputNumber
                  min={1}
                  style={{ width: '100%' }}
                  placeholder="请输入有效天数"
                  addonAfter="天"
                />
              </Form.Item>

              <Form.Item
                name="totalCount"
                label="发放总量"
                rules={[{ required: true, message: '请输入发放总量' }]}
              >
                <InputNumber
                  min={1}
                  style={{ width: '100%' }}
                  placeholder="请输入发放总量"
                />
              </Form.Item>

              <Form.Item
                name="status"
                label="状态"
                rules={[{ required: true, message: '请选择状态' }]}
              >
                <Select
                  options={[
                    { label: '正常', value: '正常' },
                    { label: '禁用', value: '禁用' },
                  ]}
                />
              </Form.Item>
            </Form>
          </Modal>
        </>
      ),
    },
    {
      key: 'records',
      label: '领券记录',
      children: '领券记录内容',
    },
    {
      key: 'usage',
      label: '使用记录',
      children: '使用记录内容',
    },
    {
      key: 'distribute',
      label: '发放优惠券',
      children: '发放优惠券内容',
    },
  ]

  return (
    <div className="bg-white px-6 rounded-lg">
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        className="mt-2"
      />
    </div>
  )
} 