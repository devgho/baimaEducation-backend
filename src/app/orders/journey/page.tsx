'use client';

import React, { useMemo, useCallback, useState } from 'react';
import { Table, Button, Space, Card, Input, Form, Alert } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dynamic from 'next/dynamic';

interface JourneyRecord {
  orderInfo: {
    orderId: string;
    orderNumber: string;
    status: string;
  };
  teacherAddress: string;
  userAddress: string;
  orderAmount: number;
  city: string;
  serviceRange: string;
  paymentTime: string;
  departureTime: string;
  serviceTime: string;
}

// 抽离 Alert 内容为独立组件以避免不必要的重渲染
const JourneyAlert = React.memo(() => (
  <div>
    <div>1.教练列表显示的公里数是按当前用户位置与教练填写的服务接单地址计算获得（直线距离） </div>
    <div>2.订单路费计算规则（根据用户填写的下单地址与救练服务接单地址进行驾车路线计算（通过第三方腾讯地图API））腾讯地到（点击查看）</div>
    <div>3.如产生教练反馈路费给予少的情况下，一般导致原因是地址设置填写不够准确(精度)。</div>
    <div className="mt-4 text-blue-500">
      <div>教练请优先处理：</div>
      <div>1.服务接单地址设置（个人中心-基本信息-服务接单地址）</div>
      <div>2.服务范围设置（个人中心-基本信息-服务范围）</div>
    </div>
  </div>
));

export default function JourneyPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<JourneyRecord[]>([]);

  // 使用 useMemo 缓存表格列配置
  const columns: ColumnsType<JourneyRecord> = useMemo(() => [
    {
      title: '订单号',
      dataIndex: ['orderInfo', 'orderNumber'],
      key: 'orderNumber',
      width: 160,
      fixed: 'left',
    },
    {
      title: '订单状态',
      dataIndex: ['orderInfo', 'status'],
      key: 'status',
      width: 120,
    },
    {
      title: '教练地址',
      dataIndex: 'teacherAddress',
      key: 'teacherAddress',
      width: 200,
      ellipsis: true,
    },
    {
      title: '用户地址',
      dataIndex: 'userAddress',
      key: 'userAddress',
      width: 200,
      ellipsis: true,
    },
    {
      title: '订单金额',
      dataIndex: 'orderAmount',
      key: 'orderAmount',
      width: 120,
      render: (amount) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
      width: 120,
    },
    {
      title: '服务范围',
      dataIndex: 'serviceRange',
      key: 'serviceRange',
      width: 120,
    },
    {
      title: '支付时间',
      dataIndex: 'paymentTime',
      key: 'paymentTime',
      width: 160,
    },
    {
      title: '出发时间',
      dataIndex: 'departureTime',
      key: 'departureTime',
      width: 160,
    },
    {
      title: '服务时间',
      dataIndex: 'serviceTime',
      key: 'serviceTime',
      width: 160,
    },
  ], []);

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
      <Alert
        message="订单路程说明"
        description={<JourneyAlert />}
        type="info"
        showIcon
        className="mb-4"
      />

      <Card className="mb-4">
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
        >
          <Form.Item name="orderNumber" label="订单号">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item name="city" label="城市">
            <Input placeholder="请输入城市" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table<JourneyRecord>
        columns={columns}
        dataSource={data}
        rowKey={record => record.orderInfo.orderId}
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
