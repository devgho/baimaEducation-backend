'use client';

import React from 'react';
import { Table, Button, Space, Card, Input, Form, Rate, Tag, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ReviewRecord {
  userAvatar: string;
  userNickname: string;
  teacherAvatar: string;
  teacherName: string;
  reviewType: string;
  reviewMethod: string;
  score: number;
  review: string;
  reviewContent: string;
  status: string;
  reviewTime: string;
}

export default function ReviewPage() {
  const [form] = Form.useForm();

  const handleDelete = (record: ReviewRecord) => {
    console.log('Delete review:', record);
  };

  const columns: ColumnsType<ReviewRecord> = [
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
      title: '教练姓名',
      dataIndex: 'teacherName',
      key: 'teacherName',
    },
    {
      title: '评价类型',
      dataIndex: 'reviewType',
      key: 'reviewType',
    },
    {
      title: '评价方式',
      dataIndex: 'reviewMethod',
      key: 'reviewMethod',
    },
    {
      title: '评分',
      dataIndex: 'score',
      key: 'score',
      render: (score) => <Rate disabled defaultValue={score} />,
    },
    {
      title: '评价',
      dataIndex: 'review',
      key: 'review',
      width: 150,
    },
    {
      title: '评价内容',
      dataIndex: 'reviewContent',
      key: 'reviewContent',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === '已处理' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: '评价时间',
      dataIndex: 'reviewTime',
      key: 'reviewTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleDelete(record)}>删除</Button>
        </Space>
      ),
    },
  ];

  const mockData: ReviewRecord[] = [
    {
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      userNickname: '张三',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      teacherName: '李教练',
      reviewType: '课程评价',
      reviewMethod: '星级评分',
      score: 4.5,
      review: '教练很专业',
      reviewContent: '教练很专业，讲解细致，整体服务体验很好',
      status: '已处理',
      reviewTime: '2024-01-20 14:30:00',
    },
    {
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      userNickname: '李四',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
      teacherName: '王教练',
      reviewType: '服务评价',
      reviewMethod: '文字评价',
      score: 5,
      review: '非常满意',
      reviewContent: '教练很耐心，讲解很详细，学到了很多',
      status: '未处理',
      reviewTime: '2024-01-20 15:30:00',
    },
  ];

  return (
    <div>
      <Card className="mb-4">
        <Form form={form} layout="inline" className="mb-4">
          <Form.Item name="userNickname" label="用户昵称">
            <Input placeholder="请输入用户昵称" />
          </Form.Item>
          <Form.Item name="teacherName" label="教练姓名">
            <Input placeholder="请输入教练姓名" />
          </Form.Item>
          <Form.Item name="reviewType" label="评价类型">
            <Input placeholder="请输入评价类型" />
          </Form.Item>
          <Form.Item name="reviewTime" label="评价时间">
            <Input placeholder="请输入评价时间" />
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
          rowKey={(record) => record.userNickname + record.reviewTime}
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
