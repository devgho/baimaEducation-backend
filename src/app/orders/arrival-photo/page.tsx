'use client';

import React, { useState } from 'react';
import { Table, Button, Space, Card, Input, Form, Tag, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ArrivalPhotoRecord {
  sequenceId: string;
  teacherId: string;
  teacherName: string;
  orderId: string;
  orderNumber: string;
  status: string;
  arrivalLocation: string;
  longitude: string;
  latitude: string;
  submitTime: string;
  arrivalPhoto: string;
}

export default function ArrivalPhotoPage() {
  const [form] = Form.useForm();

  const columns: ColumnsType<ArrivalPhotoRecord> = [
    {
      title: '序列ID',
      dataIndex: 'sequenceId',
      key: 'sequenceId',
    },
    {
      title: '教练ID',
      dataIndex: 'teacherId',
      key: 'teacherId',
    },
    {
      title: '教练名',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
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
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color="red">{status}</Tag>
      ),
    },
    {
      title: '到达照片',
      dataIndex: 'arrivalPhoto',
      key: 'arrivalPhoto',
      render: (photo) => (
        photo ? <Image src={photo} alt="到达照片" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /> : '-'
      ),
    },
    {
      title: '到达地址',
      dataIndex: 'arrivalLocation',
      key: 'arrivalLocation',
      width: 200,
    },
    {
      title: '精度',
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: '纬度',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      key: 'submitTime',
    },
    
  ];

  const mockData: ArrivalPhotoRecord[] = [
    {
      sequenceId: '2',
      teacherId: '2',
      teacherName: '胡明',
      orderId: '3',
      orderNumber: '202410256505110',
      status: '到达打卡',
      arrivalLocation: '广东省广州市越秀区前进路',
      longitude: '113.264355552051',
      latitude: '23.1290758167126',
      submitTime: '2024-10-25 16:26:39',
      arrivalPhoto: 'https://example.com/photo1.jpg',
    },
    {
      sequenceId: '1',
      teacherId: '2',
      teacherName: '胡明',
      orderId: '4',
      orderNumber: '202410252511029',
      status: '到达打卡',
      arrivalLocation: '广东省广州市越秀区前进路',
      longitude: '113.264355552051',
      latitude: '23.1290758167126',
      submitTime: '2024-10-25 16:22:48',
      arrivalPhoto: 'https://example.com/photo2.jpg',
    },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <Form form={form} layout="inline">
          <Form.Item label="订单ID" name="orderId">
            <Input placeholder="请输入订单ID" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="订单编号" name="orderNumber">
            <Input placeholder="请输入订单编号" style={{ width: 200 }} />
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
