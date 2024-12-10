'use client';

import React from 'react';
import { Table, Button, Space, Card, Input, Form, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UploadOutlined } from '@ant-design/icons';

interface ServiceReportRecord {
  id: string;
  orderNumber: string;
  reportType: string;
  reportMaterials: string[];
  reportContent: string;
  reportTime: string;
}

export default function ServiceReportPage() {
  const [form] = Form.useForm();

  const columns: ColumnsType<ServiceReportRecord> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: '报备类型',
      dataIndex: 'reportType',
      key: 'reportType',
      render: (type) => (
        <Tag color="blue">{type}</Tag>
      ),
    },
    {
      title: '报备材料',
      dataIndex: 'reportMaterials',
      key: 'reportMaterials',
      render: (materials) => (
        <Space direction="vertical">
          {materials.map((material: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
            <Button key={index} type="link" icon={<UploadOutlined />}>
              {material}
            </Button>
          ))}
        </Space>
      ),
    },
    {
      title: '报备内容',
      dataIndex: 'reportContent',
      key: 'reportContent',
      width: 300,
      render: (content) => (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {content}
        </div>
      ),
    },
    {
      title: '报备时间',
      dataIndex: 'reportTime',
      key: 'reportTime',
    },
  ];

  const mockData: ServiceReportRecord[] = [
    {
      id: '1',
      orderNumber: '202410256505110',
      reportType: '课程异常',
      reportMaterials: ['异常情况说明.pdf', '现场照片.jpg'],
      reportContent: '学员因个人原因临时取消课程，已提前2小时通知，申请取消课程费用。',
      reportTime: '2024-01-20 18:30:00',
    },
    {
      id: '2',
      orderNumber: '202410256505111',
      reportType: '设备故障',
      reportMaterials: ['故障报告.docx', '维修记录.pdf'],
      reportContent: '训练车辆出现故障，已安排维修，预计需要2天时间完成维修。',
      reportTime: '2024-01-21 12:30:00',
    },
  ];

  return (
    <div>
      <Card className="mb-4">
        <Form form={form} layout="inline" className="mb-4">
          <Form.Item name="id" label="ID">
            <Input placeholder="请输入ID" />
          </Form.Item>
          <Form.Item name="orderNumber" label="订单号">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item name="reportType" label="报备类型">
            <Input placeholder="请输入报备类型" />
          </Form.Item>
          <Form.Item name="reportTime" label="报备时间">
            <Input placeholder="请输入报备时间" />
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
          rowKey="id"
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
