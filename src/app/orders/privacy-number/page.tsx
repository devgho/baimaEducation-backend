'use client';

import React, { useState } from 'react';
import { Table, Button, Space, Card, Input, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface PrivacyNumberRecord {
  sequenceId: string;
  orderNumber: string;
  userA: string;
  userB: string;
  bindNumber: string;
  thirdPartyNumber: string;
  status: string;
  processTime: string;
  modifiedTime: string;
  operator: string;
}

export default function PrivacyNumberPage() {
  const [form] = Form.useForm();

  const columns: ColumnsType<PrivacyNumberRecord> = [
    {
      title: '序列ID',
      dataIndex: 'sequenceId',
      key: 'sequenceId',
    },
    {
      title: '订单编号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'A号码(用户)',
      dataIndex: 'userA',
      key: 'userA',
    },
    {
      title: 'B号码(教练)',
      dataIndex: 'userB',
      key: 'userB',
    },
    {
      title: '绑定号',
      dataIndex: 'bindNumber',
      key: 'bindNumber',
    },
    {
      title: '第三方绑定ID',
      dataIndex: 'thirdPartyNumber',
      key: 'thirdPartyNumber',
      render: (text) => (
        <div>
          <div>{text}</div>
          <div className="text-gray-400 text-sm">转发规则</div>
        </div>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '绑定时间',
      dataIndex: 'processTime',
      key: 'processTime',
    },
    {
      title: '修改时间',
      dataIndex: 'modifiedTime',
      key: 'modifiedTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" size="small">详情</Button>
        </Space>
      ),
    },
  ];

  const mockData: PrivacyNumberRecord[] = [
    {
      sequenceId: '1',
      orderNumber: 'ORDER123456',
      userA: '13800138000',
      userB: '13900139000',
      bindNumber: '10000000000',
      thirdPartyNumber: 'BIND123456',
      status: '已绑定',
      processTime: '2024-01-20 10:00:00',
      modifiedTime: '2024-01-21 10:00:00',
      operator: 'admin',
    },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <Form form={form} layout="inline">
          <Form.Item label="订单ID" name="orderId">
            <Input placeholder="请输入订单ID" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="绑定A号码" name="userA">
            <Input placeholder="请输入A号码" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="绑定B号码" name="userB">
            <Input placeholder="请输入B号码" style={{ width: 200 }} />
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
        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="sequenceId"
          pagination={{
            total: mockData.length,
            pageSize: 10,
            showTotal: (total) => `共 ${total} 条`,
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          scroll={{ x: 'max-content' }}
        />
      </Card>
    </div>
  );
}
