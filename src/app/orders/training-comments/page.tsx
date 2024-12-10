'use client';

import React, { useMemo, useCallback, useState } from 'react';
import { Table, Button, Space, Card, Input, Form, Rate, Tag, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dynamic from 'next/dynamic';

// 动态导入大型组件
const DynamicRate = dynamic(() => import('antd/lib/rate'), { ssr: false });

interface TrainingCommentRecord {
  teacherName: string;
  orderNumber: string;
  userAvatar: string;
  userNickname: string;
  teacherAvatar: string;
  score: number;
  comment: string;
  commentContent: string;
  status: string;
  commentTime: string;
}

export default function TrainingCommentPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TrainingCommentRecord[]>([
    {
      teacherName: '李教练',
      orderNumber: '202410256505110',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      userNickname: '张三',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      score: 4.5,
      comment: '教练很专业',
      commentContent: '教练很专业，讲解细致，整体服务体验很好',
      status: '已处理',
      commentTime: '2024-01-20 14:30:00',
    },
    {
      teacherName: '王教练',
      orderNumber: '202410256505111',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      userNickname: '李四',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
      score: 5,
      comment: '非常满意',
      commentContent: '教练很耐心，讲解很详细，学到了很多',
      status: '未处理',
      commentTime: '2024-01-20 15:30:00',
    },
  ]);

  // 使用 useCallback 缓存事件处理函数
  const handleDelete = useCallback((record: TrainingCommentRecord) => {
    console.log('Delete comment:', record);
  }, []);

  // 使用 useMemo 缓存表格列配置
  const columns: ColumnsType<TrainingCommentRecord> = useMemo(() => [
    {
      title: '教练姓名',
      dataIndex: 'teacherName',
      key: 'teacherName',
      width: 120,
    },
    {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      width: 160,
    },
    {
      title: '用户信息',
      key: 'userInfo',
      width: 200,
      render: (_, record) => (
        <Space>
          <Avatar src={record.userAvatar} />
          <span>{record.userNickname}</span>
        </Space>
      ),
    },
    {
      title: '教练头像',
      dataIndex: 'teacherAvatar',
      key: 'teacherAvatar',
      width: 100,
      render: (avatar) => <Avatar src={avatar} />,
    },
    {
      title: '评分',
      dataIndex: 'score',
      key: 'score',
      width: 120,
      render: (score) => <DynamicRate disabled defaultValue={score} />,
    },
    {
      title: '评论内容',
      dataIndex: 'commentContent',
      key: 'commentContent',
      width: 300,
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === '已处理' ? 'green' : 'orange'}>{status}</Tag>
      ),
    },
    {
      title: '评论时间',
      dataIndex: 'commentTime',
      key: 'commentTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleDelete(record)}>
            删除
          </Button>
        </Space>
      ),
    },
  ], [handleDelete]);

  // 使用 useCallback 缓存搜索处理函数
  const handleSearch = useCallback(async (values: any) => {
    setLoading(true);
    try {
      // TODO: 实现实际的搜索逻辑
      console.log('Search values:', values);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-6">
      <Card className="mb-4">
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
        >
          <Form.Item name="teacherName" label="教练姓名">
            <Input placeholder="请输入教练姓名" />
          </Form.Item>
          <Form.Item name="orderNumber" label="订单号">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item name="userNickname" label="用户昵称">
            <Input placeholder="请输入用户昵称" />
          </Form.Item>
          <Form.Item name="commentTime" label="评论时间">
            <Input placeholder="请输入评论时间" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table<TrainingCommentRecord>
        columns={columns}
        dataSource={data}
        rowKey="orderNumber"
        scroll={{ x: 1500 }}
        loading={loading}
        pagination={{
          total: data.length,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
