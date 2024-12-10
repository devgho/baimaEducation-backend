'use client'

import { useState } from 'react'

interface Order {
  id: string
  studentName: string
  teacherName: string
  subject: string
  status: string
  time: string
  price: number
  duration: string
  paymentStatus: string
  location: string
}

export default function OrdersPage() {
  // 搜索栏状态
  const [orderId, setOrderId] = useState('')
  const [schoolId, setSchoolId] = useState('')
  const [doorId, setDoorId] = useState('')
  const [userId, setUserId] = useState('')
  const [city, setCity] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  // 支付状态筛选
  const [paymentStatus, setPaymentStatus] = useState('全部')
  const [orderStatus, setOrderStatus] = useState('全部')
  const [sourceStatus, setSourceStatus] = useState('全部')
  const [currentTab, setCurrentTab] = useState('全部订单')

  // 顶部标签页配置
  const orderTabs = ['全部订单', '未付款', '待接单', '待服务', '进行中', '已完成', '已取消']

  // 筛选选项配置
  const filterConfig = {
    payment: ['全部', '未支付', '已支付'],
    order: ['全部', '待接单', '已接单', '已出发', '已到达', '已取消', '已完成', '服务中', '服务完成', '已退款', '加价单', '变更单', '加价变更单'],
    source: ['全部', '用户端(未支付)', '用户端(已支付)', '教练预约', '超时取消订单']
  }

  // 顶部统计卡片数据
  const statsCards = [
    { label: '待接单', value: 0 },
    { label: '超时未接单', value: 0 },
    { label: '即将到时订单', value: 0 },
    { label: '已完成订单', value: 0 },
    { label: '已结算订单', value: 0 },
  ]

  const [orders] = useState<Order[]>([
    {
      id: '202411140045465',
      studentName: '小明',
      teacherName: '刘老师',
      subject: '数学',
      status: '待接单',
      time: '11-14 17:00',
      price: 399,
      duration: '1.5小时',
      paymentStatus: '已支付',
      location: '上海市浦东新区张江高科',
    },
    // 更多订单数据...
  ])

  const statusColors = {
    '待接单': 'bg-blue-100 text-blue-800',
    '已完成': 'bg-green-100 text-green-800',
    '进行中': 'bg-yellow-100 text-yellow-800',
    '已取消': 'bg-red-100 text-red-800',
  }

  return (
    <div className="space-y-6">
      {/* 状态卡片 */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {statsCards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500">{card.label}</div>
            <div className="text-2xl font-bold text-gray-800">{card.value}</div>
          </div>
        ))}
      </div>

      {/* 搜索栏 */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <span className="text-gray-500 whitespace-nowrap">订单号：</span>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="请输入订单号"
            className="ml-2 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 whitespace-nowrap">教练ID：</span>
          <input
            type="text"
            value={schoolId}
            onChange={(e) => setSchoolId(e.target.value)}
            placeholder="请输入教练ID"
            className="ml-2 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 whitespace-nowrap">门店名：</span>
          <input
            type="text"
            value={doorId}
            onChange={(e) => setDoorId(e.target.value)}
            placeholder="请输入门店名"
            className="ml-2 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 whitespace-nowrap">用户ID：</span>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="请输入用户ID"
            className="ml-2 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 whitespace-nowrap">城市：</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="请输入城市"
            className="ml-2 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">至</span>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 ml-auto">
          <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            查询
          </button>
          <button className="px-4 py-1.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            重置
          </button>
          <button className="px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            导出订单
          </button>
        </div>
      </div>

      {/* 筛选区域 */}
      <div className="bg-white p-4 rounded-lg space-y-4 mb-6">
        {/* 支付状态 */}
        <div className="flex items-center text-sm">
          <div className="text-gray-500 w-20">支付状态：</div>
          <div className="flex gap-4">
            {filterConfig.payment.map(status => (
              <button
                key={status}
                className={`px-3 py-1 rounded ${paymentStatus === status ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                onClick={() => setPaymentStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* 订单状态 */}
        <div className="flex items-center text-sm">
          <div className="text-gray-500 w-20">订单状态：</div>
          <div className="flex flex-wrap gap-4">
            {filterConfig.order.map(status => (
              <button
                key={status}
                className={`px-3 py-1 rounded ${orderStatus === status ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                onClick={() => setOrderStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* 来源状态 */}
        <div className="flex items-center text-sm">
          <div className="text-gray-500 w-20">来源状态：</div>
          <div className="flex flex-wrap gap-4">
            {filterConfig.source.map(status => (
              <button
                key={status}
                className={`px-3 py-1 rounded ${sourceStatus === status ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                onClick={() => setSourceStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 订单列表区域 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* 订单状态标签页 */}
        <div className="border-b">
          <div className="flex space-x-8 px-6">
            {orderTabs.map((tab) => (
              <button
                key={tab}
                className={`py-4 px-2 -mb-px text-sm font-medium ${currentTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                  }`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 订单表格 */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                订单信息
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                用户信息
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                教师信息
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                门店地址
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                支付方式
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.studentName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.teacherName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.paymentStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">详情</button>
                  <button className="text-blue-600 hover:text-blue-800">更多</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            上一页
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            下一页
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              显示第 <span className="font-medium">1</span> 到{' '}
              <span className="font-medium">10</span> 条，共{' '}
              <span className="font-medium">97</span> 条记录
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                上一页
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                下一页
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
