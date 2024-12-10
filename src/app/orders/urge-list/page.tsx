'use client';

import React from 'react';
import { Table, Button, Space, Card, Input, Form, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ReminderRecord {
  orderId: string;
  orderNumber: string;
  userId: string;
  userName: string;
  userPhone: string;
  teacherId: string;
  teacherName: string;
  teacherPhone: string;
  reminderTime: string;
  reminderContent: string;
  status: string;
}

export default function ReminderPage() {
  const [form] = Form.useForm();

  const columns: ColumnsType<ReminderRecord> = [
    {
      title: '订单ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: '用户信息',
      key: 'userInfo',
      render: (_, record) => (
        <div>
          <div>ID: {record.userId}</div>
          <div>姓名: {record.userName}</div>
          <div>电话: {record.userPhone}</div>
        </div>
      ),
    },
    {
      title: '教练信息',
      key: 'teacherInfo',
      render: (_, record) => (
        <div>
          <div>ID: {record.teacherId}</div>
          <div>姓名: {record.teacherName}</div>
          <div>电话: {record.teacherPhone}</div>
        </div>
      ),
    },
    {
      title: '催单时间',
      dataIndex: 'reminderTime',
      key: 'reminderTime',
    },
    {
      title: '催单内容',
      dataIndex: 'reminderContent',
      key: 'reminderContent',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === '已处理' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
  ];

  const mockData: ReminderRecord[] = [
    {
      orderId: '1',
      orderNumber: '202410256505110',
      userId: 'U001',
      userName: '张三',
      userPhone: '13800138000',
      teacherId: 'T001',
      teacherName: '李教练',
      teacherPhone: '13900139000',
      reminderTime: '2024-01-20 14:30:00',
      reminderContent: '学员反馈教练还未到达指定地点',
      status: '未处理',
    },
    {
      orderId: '2',
      orderNumber: '202410256505111',
      userId: 'U002',
      userName: '李四',
      userPhone: '13800138001',
      teacherId: 'T002',
      teacherName: '王教练',
      teacherPhone: '13900139001',
      reminderTime: '2024-01-20 15:30:00',
      reminderContent: '教练迟到超过15分钟',
      status: '已处理',
    },
  ];

  return (
    <div>
      <Card className="mb-4">
        <Form form={form} layout="inline" className="mb-4">
          <Form.Item name="orderId" label="订单ID">
            <Input placeholder="请输入订单ID" />
          </Form.Item>
          <Form.Item name="orderNumber" label="订单号">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item name="userPhone" label="用户电话">
            <Input placeholder="请输入用户电话" />
          </Form.Item>
          <Form.Item name="teacherPhone" label="教练电话">
            <Input placeholder="请输入教练电话" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </Form.Item>
        </Form>
        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="orderId"
          pagination={{
            total: mockData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
}
