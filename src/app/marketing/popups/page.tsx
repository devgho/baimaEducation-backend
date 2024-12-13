'use client';

import { Button, Table, Input } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

interface PopupData {
  id: string;
  popupImage: string;    // 弹窗图片
  cityName: string;      // 城市名
  type: string;          // 类型
  jumpLink: string;      // 跳转链接
  intervalTime: string;  // 间隔时间
  isEnabled: boolean;    // 是否启用
  addedTime: string;     // 添加时间
  modifyTime: string;    // 修改时间
}

export default function PopupsPage() {
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '弹窗图片',
      dataIndex: 'popupImage',
      key: 'popupImage',
      render: (image: string) => <img src={image} alt="预览" style={{ width: 50 }} />,
    },
    {
      title: '城市名',
      dataIndex: 'cityName',
      key: 'cityName',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '跳转链接',
      dataIndex: 'jumpLink',
      key: 'jumpLink',
    },
    {
      title: '间隔时间',
      dataIndex: 'intervalTime',
      key: 'intervalTime',
    },
    {
      title: '是否启用',
      dataIndex: 'isEnabled',
      key: 'isEnabled',
      render: (enabled: boolean) => (
        <span>{enabled ? '是' : '否'}</span>
      ),
    },
    {
      title: '添加时间',
      dataIndex: 'addedTime',
      key: 'addedTime',
    },
    {
      title: '修改时间',
      dataIndex: 'modifyTime',
      key: 'modifyTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: PopupData) => (
        <div className="space-x-2">
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex gap-3 mb-4">
        <Input.Search
          placeholder="输入关键字"
          style={{ width: 200 }}
          onSearch={(value) => console.log(value)}
        />
        <Button type="primary">查询</Button>
        <Button type="primary" icon={<PlusOutlined />}>
          添加
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={[]}
        loading={loading}
        rowKey="id"
        pagination={{
          total: 0,
          current: 1,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
} 