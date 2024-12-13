'use client';

import { Button, Table, Input } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

interface AudioData {
  id: string;
  audioId: string;     // 音频id
  audioName: string;   // 音频名称
  appType: string;     // 应用位置
  appScene: string;    // 应用场景
  isEnabled: boolean;  // 是否启用
  addedTime: string;   // 添加时间
  modifyTime: string;  // 修改时间
}

export default function AudioPage() {
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '音频id',
      dataIndex: 'audioId',
      key: 'audioId',
    },
    {
      title: '音频名称',
      dataIndex: 'audioName',
      key: 'audioName',
    },
    {
      title: '应用位置',
      dataIndex: 'appType',
      key: 'appType',
    },
    {
      title: '应用场景',
      dataIndex: 'appScene',
      key: 'appScene',
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
      render: (_: any, record: AudioData) => (
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