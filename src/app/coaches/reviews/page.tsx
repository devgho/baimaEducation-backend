'use client'

import { useState } from 'react'
import { Table, Input, Button, Space, Tabs, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface CoachReviewData {
  key: string
  id: number
  coachName: string
  coachId: string
  coachAvatar: string
  workPhoto: string
  lifePhoto: string
  status: string
  rejectReason: string
  reviewNote: string
  submitTime: string
  reviewTime: string
}

interface VerificationData {
  key: string;
  coachId: string;
  coachName: string;
  idNumber: string;
  idFrontPhoto: string;
  idBackPhoto: string;
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

interface CertificateData {
  key: string;
  coachId: string;
  coachName: string;
  certificateType: string;
  certificatePhoto: string;
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

interface WorkExperienceData {
  key: string;
  coachId: string;
  coachName: string;
  company: string;
  position: string;
  duration: string;
  proofPhoto: string;
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

interface ProfileData {
  key: string;
  coachId: string;
  coachName: string;
  introduction: string;
  specialties: string[];
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

interface HealthData {
  key: string;
  coachId: string;
  coachName: string;
  healthCertPhoto: string;
  expiryDate: string;
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

interface BusinessData {
  key: string;
  coachId: string;
  coachName: string;
  licensePhoto: string;
  licenseNumber: string;
  status: string;
  rejectReason: string;
  submitTime: string;
  reviewTime: string;
}

export default function CoachReviewsPage() {
  const [searchText, setSearchText] = useState('')
  const [activeTab, setActiveTab] = useState('info')

  const columns: ColumnsType<CoachReviewData> = [
    {
      title: '教练ID',
      dataIndex: 'coachId',
      key: 'coachId',
      width: 80,
    },
    {
      title: '教练姓名',
      dataIndex: 'coachName',
      key: 'coachName',
      width: 120,
    },
    {
      title: '教练头像',
      dataIndex: 'coachAvatar',
      key: 'coachAvatar',
      width: 100,
      render: (avatar) => (
        <img src={avatar} alt="头像" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '工作照片',
      dataIndex: 'workPhoto',
      key: 'workPhoto',
      width: 100,
      render: (photo) => (
        <img src={photo} alt="工作照片" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '生活照',
      dataIndex: 'lifePhoto',
      key: 'lifePhoto',
      width: 100,
      render: (photo) => (
        <img src={photo} alt="生活照" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => (
        <Tag color={
          status === '通过' ? 'success' :
          status === '未审核' ? 'warning' :
          'error'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: '驳回原因',
      dataIndex: 'rejectReason',
      key: 'rejectReason',
      width: 150,
    },
    {
      title: '管理员备注',
      dataIndex: 'reviewNote',
      key: 'reviewNote',
      width: 200,
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      key: 'submitTime',
      width: 160,
    },
    {
      title: '审核时间',
      dataIndex: 'reviewTime',
      key: 'reviewTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => (
        <Button type="link" size="small">审核</Button>
      ),
    },
  ]

  const mockData: CoachReviewData[] = [
    {
      key: '1',
      id: 1,
      coachName: '洪流',
      coachId: '1',
      coachAvatar: '/avatar1.jpg',
      workPhoto: '/work1.jpg',
      lifePhoto: '/life1.jpg',
      status: '未审核',
      rejectReason: '',
      reviewNote: '-',
      submitTime: '2024-10-16 16:48:23',
      reviewTime: '2024-10-17 09:42:33',
    },
    {
      key: '2',
      id: 2,
      coachName: '胡明',
      coachId: '2',
      coachAvatar: '/avatar2.jpg',
      workPhoto: '/work2.jpg',
      lifePhoto: '/life2.jpg',
      status: '未审核',
      rejectReason: '',
      reviewNote: '-',
      submitTime: '2024-10-21 16:07:16',
      reviewTime: '2024-10-21 16:07:16',
    }
  ]

  const items = [
    { label: '教练相册', key: 'info'},
    { label: '实名认证', key: 'verification'},
    { label: '职业证书', key: 'certificate'},
    { label: '工作经历', key: 'work'},
    { label: '个人简介', key: 'profile'},
    { label: '健康证明', key: 'health'},
    { label: '营业执照', key: 'business'},
  ]

  const verificationColumns: ColumnsType<VerificationData> = [
    {
      title: '教练ID',
      dataIndex: 'coachId',
      width: 80,
    },
    {
      title: '教练姓名',
      dataIndex: 'coachName',
      width: 120,
    },
    {
      title: '身份证号',
      dataIndex: 'idNumber',
      width: 180,
    },
    {
      title: '身份证正面',
      dataIndex: 'idFrontPhoto',
      width: 100,
      render: (photo) => (
        <img src={photo} alt="身份证正面" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '身份证反面',
      dataIndex: 'idBackPhoto',
      width: 100,
      render: (photo) => (
        <img src={photo} alt="身份证反面" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => <Button type="link">审核</Button>,
    },
  ];

  const verificationMockData: VerificationData[] = [
    {
      key: '1',
      coachId: '1',
      coachName: '洪流',
      idNumber: '330************1234',
      idFrontPhoto: '/id-front.jpg',
      idBackPhoto: '/id-back.jpg',
      status: '未��核',
      rejectReason: '',
      submitTime: '2024-10-16 16:48:23',
      reviewTime: '-',
    },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <Tabs items={items} activeKey={activeTab} onChange={handleTabChange} />
      
      <div className="mb-4 flex items-center space-x-4">
        <Input.Search
          placeholder="教练ID"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary">查询</Button>
      </div>

      {activeTab === 'info' && (
        <Table
          columns={columns}
          dataSource={mockData}
          scroll={{ x: 1700 }}
          pagination={{
            total: 4,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'verification' && (
        <Table
          columns={verificationColumns}
          dataSource={verificationMockData}
          scroll={{ x: 1500 }}
          pagination={{
            total: 1,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'certificate' && (
        <Table
          columns={[
            {
              title: '教练ID',
              dataIndex: 'coachId',
              width: 80,
            },
            {
              title: '教练姓名',
              dataIndex: 'coachName',
              width: 120,
            },
            {
              title: '证书类型',
              dataIndex: 'certificateType',
              width: 120,
            },
            {
              title: '证书照片',
              dataIndex: 'certificatePhoto',
              width: 100,
              render: (photo) => (
                <img src={photo} alt="证书照片" className="w-10 h-10 object-cover rounded" />
              ),
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 100,
              render: (status) => (
                <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
                  {status}
                </Tag>
              ),
            },
            {
              title: '操作',
              key: 'action',
              width: 100,
              render: () => <Button type="link">审核</Button>,
            },
          ]}
          dataSource={[]}
          scroll={{ x: 1200 }}
          pagination={{
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'work' && (
        <Table
          columns={[
            {
              title: '教练ID',
              dataIndex: 'coachId',
              width: 80,
            },
            {
              title: '教练姓名',
              dataIndex: 'coachName',
              width: 120,
            },
            {
              title: '公司名称',
              dataIndex: 'company',
              width: 200,
            },
            {
              title: '职位',
              dataIndex: 'position',
              width: 150,
            },
            {
              title: '工作时间',
              dataIndex: 'duration',
              width: 200,
            },
            {
              title: '证明材料',
              dataIndex: 'proofPhoto',
              width: 100,
              render: (photo) => (
                <img src={photo} alt="证明材料" className="w-10 h-10 object-cover rounded" />
              ),
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 100,
              render: (status) => (
                <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
                  {status}
                </Tag>
              ),
            },
            {
              title: '操作',
              key: 'action',
              width: 100,
              render: () => <Button type="link">审核</Button>,
            },
          ]}
          dataSource={[]}
          scroll={{ x: 1500 }}
          pagination={{
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'profile' && (
        <Table
          columns={[
            {
              title: '教练ID',
              dataIndex: 'coachId',
              width: 80,
            },
            {
              title: '教练姓名',
              dataIndex: 'coachName',
              width: 120,
            },
            {
              title: '个人简介',
              dataIndex: 'introduction',
              width: 300,
            },
            {
              title: '专长领域',
              dataIndex: 'specialties',
              width: 200,
              render: (specialties: string[]) => (
                <Space wrap>
                  {specialties.map((specialty, index) => (
                    <Tag key={index} color="blue">{specialty}</Tag>
                  ))}
                </Space>
              ),
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 100,
              render: (status) => (
                <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
                  {status}
                </Tag>
              ),
            },
            {
              title: '操作',
              key: 'action',
              width: 100,
              render: () => <Button type="link">审核</Button>,
            },
          ]}
          dataSource={[]}
          scroll={{ x: 1300 }}
          pagination={{
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'health' && (
        <Table
          columns={[
            {
              title: '教练ID',
              dataIndex: 'coachId',
              width: 80,
            },
            {
              title: '教练姓名',
              dataIndex: 'coachName',
              width: 120,
            },
            {
              title: '健康证明',
              dataIndex: 'healthCertPhoto',
              width: 100,
              render: (photo) => (
                <img src={photo} alt="健康证明" className="w-10 h-10 object-cover rounded" />
              ),
            },
            {
              title: '有效期至',
              dataIndex: 'expiryDate',
              width: 160,
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 100,
              render: (status) => (
                <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
                  {status}
                </Tag>
              ),
            },
            {
              title: '操作',
              key: 'action',
              width: 100,
              render: () => <Button type="link">审核</Button>,
            },
          ]}
          dataSource={[]}
          scroll={{ x: 1200 }}
          pagination={{
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
      {activeTab === 'business' && (
        <Table
          columns={[
            {
              title: '教练ID',
              dataIndex: 'coachId',
              width: 80,
            },
            {
              title: '教练姓名',
              dataIndex: 'coachName',
              width: 120,
            },
            {
              title: '营业执照照片',
              dataIndex: 'licensePhoto',
              width: 100,
              render: (photo) => (
                <img src={photo} alt="营业执照" className="w-10 h-10 object-cover rounded" />
              ),
            },
            {
              title: '执照编号',
              dataIndex: 'licenseNumber',
              width: 200,
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 100,
              render: (status) => (
                <Tag color={status === '通过' ? 'success' : status === '未审核' ? 'warning' : 'error'}>
                  {status}
                </Tag>
              ),
            },
            {
              title: '操作',
              key: 'action',
              width: 100,
              render: () => <Button type="link">审核</Button>,
            },
          ]}
          dataSource={[]}
          scroll={{ x: 1200 }}
          pagination={{
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      )}
    </div>
  )
}
