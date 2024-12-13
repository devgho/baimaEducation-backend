'use client'

import { useState } from 'react'
import { Form, Input, Button, Table, Tag, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import DateRangeSearch from '@/components/common/DateRangeSearch'

interface Withdrawal {
  id: number
  transactionId: string
  storeImage: string
  storeName: string
  amount: number
  fee: number
  netAmount: number
  method: string
  accountName: string
  accountNumber: string
  bankName: string
  branchName: string
  reason: string
  status: '待审核' | '已通过' | '已拒绝'
  applicationTime: string
}

export default function BusinessReviewsPage() {
  const [searchForm] = Form.useForm()
  const [withdrawals] = useState<Withdrawal[]>([
    {
      id: 1,
      transactionId: 'TX123456',
      storeImage: '/store-image.png',
      storeName: '某某店铺',
      amount: 1000,
      fee: 50,
      netAmount: 950,
      method: '银行转账',
      accountName: '张三',
      accountNumber: '6222020202020202020',
      bankName: '中国银行',
      branchName: '广州分行',
      reason: '',
      status: '待审核',
      applicationTime: '2024-11-20 14:31:21',
    }
  ])

  const columns: ColumnsType<Withdrawal> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '商家',
      dataIndex: 'storeName',
      width: 200,
      render: (_, record) => (
        <div className="flex items-center space-x-2">
          <img 
            src={record.storeImage} 
            alt={record.storeName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{record.storeName}</span>
        </div>
      ),
    },
    {
      title: '提现金额',
      dataIndex: 'amount',
      width: 120,
      render: (amount) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '手续费',
      dataIndex: 'fee',
      width: 100,
      render: (fee) => `¥${fee.toFixed(2)}`,
    },
    {
      title: '实际到账',
      dataIndex: 'netAmount',
      width: 120,
      render: (netAmount) => `¥${netAmount.toFixed(2)}`,
    },
    {
      title: '提现方式',
      dataIndex: 'method',
      width: 100,
    },
    {
      title: '收款账户',
      dataIndex: 'accountNumber',
      width: 200,
      render: (_, record) => (
        <div>
          <div>{record.accountName}</div>
          <div className="text-gray-500 text-sm">{record.accountNumber}</div>
          <div className="text-gray-500 text-sm">{record.bankName} {record.branchName}</div>
        </div>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => (
        <Tag color={
          status === '已通过' ? 'success' :
          status === '待审核' ? 'warning' :
          'error'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: '申请时间',
      dataIndex: 'applicationTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 180,
      render: (_, record) => (
        <Space>
          {record.status === '待审核' && (
            <>
              <Button type="link" onClick={() => handleApprove(record.id)}>
                通过
              </Button>
              <Button type="link" danger onClick={() => handleReject(record.id)}>
                拒绝
              </Button>
            </>
          )}
          <Button type="link">详情</Button>
        </Space>
      ),
    },
  ]

  const handleApprove = (id: number) => {
    // 处理通过逻辑
  }

  const handleReject = (id: number) => {
    // 处理拒绝逻辑
  }

  return (
    <div className="bg-white">
      <Form
        form={searchForm}
        layout="inline"
        className="p-4"
      >
        <Form.Item name="storeId">
          <Input
            placeholder="商家ID"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item name="storeName">
          <Input
            placeholder="商家名称"
            style={{ width: 200 }}
          />
        </Form.Item>

        <DateRangeSearch 
          form={searchForm} 
          label="申请时间"
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

      <Table 
        columns={columns} 
        dataSource={withdrawals}
        rowKey="id"
        pagination={{
          total: withdrawals.length,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total) => `共 ${total} 条`,
        }}
        scroll={{ x: 1500 }}
      />
    </div>
  )
} 