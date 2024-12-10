'use client';

import React, { useState } from 'react';
import { Table, Button, Space, Card, Input, DatePicker, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { RangePicker } = DatePicker;

interface EmergencyRecord {
  id: string;
  teacherId: string;
  teacherName: string;
  phone: string;
  emergencyAddress: string;
  remark: string;
  status: string;
  processRemark: string;
  processTime: string;
  operator: string;
}

export default function EmergencyPage() {
  const [form] = Form.useForm();

  const columns: ColumnsType<EmergencyRecord> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '教练名称',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
    {
      title: '教练ID',
      dataIndex: 'teacherId',
      key: 'teacherId',
    },
    {
      title: '教练姓名',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '警报地址',
      dataIndex: 'emergencyAddress',
      key: 'emergencyAddress',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={status === '紧急求助' ? 'text-red-500' : 'text-gray-500'}>
          {status}
        </span>
      ),
    },
    {
      title: '审批意见',
      dataIndex: 'processRemark',
      key: 'processRemark',
    },
    {
      title: '审批时间',
      dataIndex: 'processTime',
      key: 'processTime',
    },
    {
      title: '操作人',
      dataIndex: 'operator',
      key: 'operator',
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

  const mockData: EmergencyRecord[] = [
    {
      id: '1',
      teacherId: 'T001',
      teacherName: '张教练',
      phone: '13800138000',
      emergencyAddress: '北京市朝阳区某某街道',
      remark: '紧急情况处理中',
      status: '紧急求助',
      processRemark: '已派出救援',
      processTime: '2024-01-20 10:00:00',
      operator: '管理员A',
    },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <Form form={form} layout="inline">
          <Form.Item label="ID" name="id">
            <Input placeholder="请输入ID" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="教练姓名" name="teacherName">
            <Input placeholder="请输入教练姓名" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="电话" name="phone">
            <Input placeholder="请输入电话" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="警报时间" name="emergencyTime">
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
        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="id"
          pagination={{
            total: 100,
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
