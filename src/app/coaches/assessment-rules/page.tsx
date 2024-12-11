'use client'

import React, { useState } from 'react'
import { Table, Input, Button, Tabs, Radio, Checkbox, Form, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

// 等级列表数据接口
interface LevelData {
  key: string
  id: number
  levelIcon: string
  levelName: string
  levelDesc: string
  city: string
  commissionRate: number
  overtimeRate: number
  performanceRequirement: number
  overtimeRatio: number
  onlineDays: number
  onlineHours: number
  storedPoints: number
  adminNote: string
  updateTime: string
  createTime: string
}

// 考核配置数据接口
interface AssessmentRuleData {
  key: string
  id: number
  ruleName: string
  ruleDesc: string
  city: string
  assessmentType: string
  addScore: number
  inServiceHours: number
  inServiceDays: number
  assessmentScore: number
  adminNote: string
  addTime: string
  updateTime: string
}

// 升级日志数据接口
interface UpgradeLogData {
  key: string
  id: number
  name: string
  oldRate: number
  newRate: number
  upgradeMethod: string
  updateTime: string
}

export default function AssessmentRulesPage() {
  const [searchText, setSearchText] = useState('')
  const [activeTab, setActiveTab] = useState('list')
  const [form] = Form.useForm()

  // 等级列表列定义
  const levelColumns: ColumnsType<LevelData> = [
    {
      title: '等级图标',
      dataIndex: 'levelIcon',
      width: 100,
      render: (icon) => (
        <img src={icon || '/placeholder.png'} alt="等级图标" className="w-8 h-8 object-cover" />
      ),
    },
    {
      title: '等级名称',
      dataIndex: 'levelName',
      width: 120,
    },
    {
      title: '等级简介',
      dataIndex: 'levelDesc',
      width: 200,
    },
    {
      title: '城市',
      dataIndex: 'city',
      width: 120,
    },
    {
      title: '教练佣金比例',
      dataIndex: 'commissionRate',
      width: 120,
      align: 'right',
      render: (rate) => `${rate}%`,
    },
    {
      title: '加钟比例',
      dataIndex: 'overtimeRate',
      width: 100,
      align: 'right',
      render: (rate) => `${rate}%`,
    },
    {
      title: '业绩要求',
      dataIndex: 'performanceRequirement',
      width: 100,
      align: 'right',
    },
    {
      title: '加钟率',
      dataIndex: 'overtimeRatio',
      width: 100,
      align: 'right',
      render: (ratio) => `${ratio}%`,
    },
    {
      title: '在线天数',
      dataIndex: 'onlineDays',
      width: 100,
      align: 'right',
    },
    {
      title: '在线时长(小时)',
      dataIndex: 'onlineHours',
      width: 120,
      align: 'right',
    },
    {
      title: '储值积分',
      dataIndex: 'storedPoints',
      width: 100,
      align: 'right',
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 200,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      width: 180,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </>
      ),
    },
  ]

  // 考核配置列定义
  const ruleColumns: ColumnsType<AssessmentRuleData> = [
    {
      title: '考核规则',
      dataIndex: 'ruleName',
      width: 150,
    },
    {
      title: '规则说明',
      dataIndex: 'ruleDesc',
      width: 200,
    },
    {
      title: '城市',
      dataIndex: 'city',
      width: 120,
    },
    {
      title: '考核类别',
      dataIndex: 'assessmentType',
      width: 120,
    },
    {
      title: '加分要求',
      dataIndex: 'addScore',
      width: 100,
      align: 'right',
    },
    {
      title: '在线时长(小时)',
      dataIndex: 'inServiceHours',
      width: 120,
      align: 'right',
    },
    {
      title: '在线天数',
      dataIndex: 'inServiceDays',
      width: 100,
      align: 'right',
    },
    {
      title: '考核分数',
      dataIndex: 'assessmentScore',
      width: 100,
      align: 'right',
    },
    {
      title: '管理员备注',
      dataIndex: 'adminNote',
      width: 200,
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      width: 180,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </>
      ),
    },
  ]

  // 升级日志列定义
  const logColumns: ColumnsType<UpgradeLogData> = [
    {
      title: '教练ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '原比例',
      dataIndex: 'oldRate',
      width: 100,
      align: 'right',
      render: (rate) => `${rate}%`,
    },
    {
      title: '新比例',
      dataIndex: 'newRate',
      width: 100,
      align: 'right',
      render: (rate) => `${rate}%`,
    },
    {
      title: '升级方式',
      dataIndex: 'upgradeMethod',
      width: 120,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      width: 180,
    },
  ]

  const logMockData: UpgradeLogData[] = [
    {
      key: '1',
      id: 20,
      name: '王志明',
      oldRate: 50,
      newRate: 92,
      upgradeMethod: '后台设置',
      updateTime: '2024-11-25 16:42:52',
    }
  ]

  const items = [
    {
      key: 'list',
      label: '等级列表',
      children: (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Input
                placeholder="等级名称"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 200 }}
              />
              <Button type="primary">查询</Button>
            </div>
            <Button type="primary">+ 添加</Button>
          </div>

          <Table
            columns={levelColumns}
            dataSource={[]}
            scroll={{ x: 2000 }}
            pagination={{
              total: 0,
              current: 1,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `共 ${total} 条`,
            }}
          />
        </div>
      ),
    },
    {
      key: 'rules',
      label: '考核配置',
      children: (
        <div className="p-6">
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              assessmentType: 'auto',
              assessmentItems: ['inServiceTime', 'addTime', 'reviewTime', 'onlineTime', 'storedPoints'],
            }}
          >
            <div className="mb-6">
              <Form.Item label="自动考核" name="assessmentType">
                <Radio.Group>
                  <Radio value="auto">开启考核</Radio>
                  <Radio value="manual">关闭考核</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="text-red-500 text-sm">注：初始化数据会自动开启考核</div>
            </div>

            <div className="mb-6">
              <Form.Item label="考核规则(多选项)" name="assessmentItems">
                <Checkbox.Group className="flex flex-wrap gap-4">
                  <Checkbox value="inServiceTime">服务时长</Checkbox>
                  <Checkbox value="addTime">加钟时长</Checkbox>
                  <Checkbox value="reviewTime">好评时长</Checkbox>
                  <Checkbox value="onlineTime">在线时长</Checkbox>
                  <Checkbox value="storedPoints">储值积分</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <div className="text-gray-500 text-sm">注：考核规则按多选项，支持多选</div>
            </div>

            <div className="mb-6">
              <Form.Item label="储值积分最低分" name="minPoints">
                <Space align="center">
                  <Input style={{ width: 100 }} suffix="分" />
                  <div className="text-gray-500">
                    注：满足储值积分最低分要求，才能进行加分（0.00-100.00）
                  </div>
                </Space>
              </Form.Item>
            </div>

            <div className="mb-6">
              <Form.Item>
                <div className="bg-gray-50 p-4 rounded">
                  <img 
                    src="/assessment-rule-image.jpg" 
                    alt="考核规则说明图" 
                    className="w-full max-w-md"
                  />
                </div>
              </Form.Item>
              <div className="text-gray-500 text-sm mt-2">
                1.升级分数考核规则按照规则，1-14分进行考核分数，14分以后升级<br />
                2.考核规则按照规则配置人员配置规则进行考核分数<br />
                3.满足以上条件后，按照规则进行自动升级！
              </div>
            </div>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
                <Button>重置</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: 'logs',
      label: '升级日志',
      children: (
        <div className="p-6">
          <Table
            columns={logColumns}
            dataSource={logMockData}
            scroll={{ x: 800 }}
            pagination={{
              total: 1,
              current: 1,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `共 ${total} 条`,
            }}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="bg-white">
      <Tabs
        activeKey={activeTab}
        items={items}
        onChange={(key) => setActiveTab(key)}
        className="px-6"
      />
    </div>
  )
} 