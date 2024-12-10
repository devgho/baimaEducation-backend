'use client';

import React from 'react';
import { Table, Button, Space, Card, Input, Form, Rate, Tag, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface CommentAppealRecord {
  teacherName: string;
  orderNumber: string;
  userAvatar: string;
  userNickname: string;
  teacherAvatar: string;
  evaluationMethod: string;
  score: number;
  evaluationContent: string;
  appealContent: string;
  status: string;
  evaluationTime: string;
}

export default function CommentAppealPage() {
  const [form] = Form.useForm();

  const handleProcess = (record: CommentAppealRecord) => {
    console.log('Process appeal:', record);
  };

  const columns: ColumnsType<CommentAppealRecord> = [
    {
      title: '教练姓名',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
    {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: '用户头像',
      dataIndex: 'userAvatar',
      key: 'userAvatar',
      render: (avatar) => <Avatar src={avatar} size="large" />,
    },
    {
      title: '用户昵称',
      dataIndex: 'userNickname',
      key: 'userNickname',
    },
    {
      title: '教练头像',
      dataIndex: 'teacherAvatar',
      key: 'teacherAvatar',
      render: (avatar) => <Avatar src={avatar} size="large" />,
    },
    {
      title: '评价方式',
      dataIndex: 'evaluationMethod',
      key: 'evaluationMethod',
    },
    {
      title: '评分',
      dataIndex: 'score',
      key: 'score',
      render: (score) => <Rate disabled defaultValue={score} />,
    },
    {
      title: '评价内容',
      dataIndex: 'evaluationContent',
      key: 'evaluationContent',
      width: 200,
    },
    {
      title: '申诉内容',
      dataIndex: 'appealContent',
      key: 'appealContent',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'blue';
        if (status === '已处理') {
          color = 'green';
        } else if (status === '已驳回') {
          color = 'red';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '评价时间',
      dataIndex: 'evaluationTime',
      key: 'evaluationTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.status === '待处理' && (
            <>
              <Button type="link" onClick={() => handleProcess(record)}>通过</Button>
              <Button type="link" danger onClick={() => handleProcess(record)}>驳回</Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  const mockData: CommentAppealRecord[] = [
    {
      teacherName: '李教练',
      orderNumber: '202410256505110',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      userNickname: '张三',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      evaluationMethod: '星级评分',
      score: 2,
      evaluationContent: '教练态度不好，迟到严重',
      appealContent: '当天路况拥堵，已提前与学员沟通并道歉',
      status: '待处理',
      evaluationTime: '2024-01-20 14:30:00',
    },
    {
      teacherName: '王教练',
      orderNumber: '202410256505111',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      userNickname: '李四',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
      evaluationMethod: '文字评价',
      score: 1,
      evaluationContent: '教练专业水平有待提高',
      appealContent: '已有10年教学经验，获得多个优秀教练奖项',
      status: '已处理',
      evaluationTime: '2024-01-20 15:30:00',
    },
  ];

  return (
    <div>
      <Card className="mb-4">
        <Form form={form} layout="inline" className="mb-4">
          <Form.Item name="teacherName" label="教练姓名">
            <Input placeholder="请输入教练姓名" />
          </Form.Item>
          <Form.Item name="orderNumber" label="订单号">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item name="userNickname" label="用户昵称">
            <Input placeholder="请输入用户昵称" />
          </Form.Item>
          <Form.Item name="status" label="状态">
            <Input placeholder="请输入状态" />
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
          rowKey={(record) => record.orderNumber + record.evaluationTime}
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
