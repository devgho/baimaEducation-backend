'use client';

import React, { useState } from 'react';
import { Table, Button, Space, Tag, Tabs, Avatar, Card, Input, DatePicker, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';

const { RangePicker } = DatePicker;

interface AfterSalesRecord {
  afterSalesNo: string;
  orderNo: string;
  userAvatar: string;
  userName: string;
  userPhone: string;
  applyAmount: number;
  refundAmount: number;
  refundRatio: string;
  refundStatus: string;
  applyReason: string;
  teacherAvatar: string;
  teacherName: string;
  courseStatus: string;
  courseProgress: string;
  applyTime: string;
  reviewTime: string;
  reviewStatus: string;
  remark: string;
  operationNote: string;
  operator: string;
  operateTime: string;
}

export default function AfterSalesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [form] = Form.useForm();

  const columns: ColumnsType<AfterSalesRecord> = [
    {
      title: '退款编号',
      dataIndex: 'afterSalesNo',
      key: 'afterSalesNo',
    },
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: '用户头像',
      dataIndex: 'userAvatar',
      key: 'userAvatar',
      render: (avatar) => (
        <Avatar src={avatar} />
      ),
    },
    {
      title: '用户电话',
      dataIndex: 'userPhone',
      key: 'userPhone',
    },
    {
      title: '申请金额',
      dataIndex: 'applyAmount',
      key: 'applyAmount',
      render: (amount) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '退款金额',
      dataIndex: 'refundAmount',
      key: 'refundAmount',
      render: (amount) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '退款比例',
      dataIndex: 'refundRatio',
      key: 'refundRatio',
    },
    {
      title: '退款状态',
      dataIndex: 'refundStatus',
      key: 'refundStatus',
      render: (status) => (
        <Tag color={status === '系统退款' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: '教练头像',
      dataIndex: 'teacherAvatar',
      key: 'teacherAvatar',
      render: (avatar) => (
        <Avatar src={avatar} />
      ),
    },
    {
      title: '教练姓名',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
    {
      title: '课程状态',
      dataIndex: 'courseStatus',
      key: 'courseStatus',
    },
    {
      title: '状态',
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      render: (status) => (
        <Tag color={status === '已完成' ? 'green' : 'processing'}>{status}</Tag>
      ),
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '申请时间',
      dataIndex: 'applyTime',
      key: 'applyTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" size="small">查看</Button>
          <Button type="link" size="small">详情</Button>
        </Space>
      ),
    },
  ];

  const mockData: AfterSalesRecord[] = [
    {
      afterSalesNo: '202411141015551',
      orderNo: '202411141084455',
      userAvatar: '/avatar1.png',
      userName: '小张',
      userPhone: '15020594177',
      applyAmount: 399.00,
      refundAmount: 0,
      refundRatio: '0%',
      refundStatus: '系统退款',
      applyReason: '课程问题',
      teacherAvatar: '/teacher1.png',
      teacherName: '满满',
      courseStatus: '99分钟课程剩余2小时',
      courseProgress: '',
      applyTime: '2024-11-14 17:11:42',
      reviewTime: '2024-11-14',
      reviewStatus: '已完成',
      remark: '',
      operationNote: '',
      operator: '',
      operateTime: '',
    },
    // Add more mock data as needed
  ];

  const items = [
    { key: 'all', label: '全部订单' },
    { key: 'reviewed', label: '已评价(3)' },
    { key: 'refunded', label: '已退款(0)' },
    { key: 'cancelled', label: '已取消' }
  ];

  return (
    <div className="space-y-4">
      <Card>
        <Form form={form} layout="inline">
          <Form.Item label="退款编号" name="refundNo">
            <Input placeholder="请输入退款编号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="订单号" name="orderNo">
            <Input placeholder="请输入订单号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="用户手机号" name="phone">
            <Input placeholder="请输入用户手机号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="申请时间" name="applyTime">
            <RangePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <div className="space-y-4">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={items}
          />
          <Table
            columns={columns}
            dataSource={mockData}
            rowKey="afterSalesNo"
            pagination={{
              total: 100,
              pageSize: 10,
              showTotal: (total) => `共 ${total} 条`,
              showQuickJumper: true,
              showSizeChanger: true,
            }}
            scroll={{ x: 'max-content' }}
          />
        </div>
      </Card>
    </div>
  );
}
