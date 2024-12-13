'use client'

import { useState } from 'react'

interface Business {
  id: number
  logo: string
  name: string
  businessHours: string
  contact: string
  phone: string
  address: string
  tableCount: number
  balance: number
  totalIncome: number
  coachIncome: number
  goodsIncome: number
  tableIncome: number
  eventIncome: number
  supportCoupon: boolean
  storeStatus: '营业中' | '已打烊'
  status: '上线' | '下线'
  createTime: string
}

export default function BusinessList() {
  const [businesses, setBusinesses] = useState<Business[]>([
    {
      id: 1,
      logo: '🏪',
      name: '正源运动健身馆旗舰店',
      businessHours: '10:00-16:00',
      contact: '杨小姐',
      phone: '15920991177',
      address: '广东省广州市天河区广东省广州市天河区中信11号',
      tableCount: 10,
      balance: 1000.00,
      totalIncome: 10000.00,
      coachIncome: 5000.00,
      goodsIncome: 2000.00,
      tableIncome: 2000.00,
      eventIncome: 1000.00,
      supportCoupon: true,
      storeStatus: '营业中',
      status: '上线',
      createTime: '2024-10-16 16:45:41'
    }
  ])

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="商家名称/联系方式"
          className="px-3 py-2 border rounded-md w-64"
        />
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="">全部</option>
          <option value="online">上线</option>
          <option value="offline">下线</option>
        </select>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          查询
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          导出
        </button>
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Logo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">营业时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">联系人</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">联系电话</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店地址</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">桌台数量</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">余额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">总收入</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">教练收入</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">商品收入</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">桌台收入</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">赛事收入</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">支持优惠券</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">上架状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">创建时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {businesses.map((business) => (
              <tr key={business.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{business.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.logo}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.name}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.businessHours}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.contact}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.phone}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.address}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.tableCount}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.balance.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.totalIncome.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.coachIncome.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.goodsIncome.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.tableIncome.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{business.eventIncome.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {business.supportCoupon ? '是' : '否'}
                </td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    business.storeStatus === '营业中' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {business.storeStatus}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    business.status === '上线' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {business.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{business.createTime}</td>
                <td className="px-4 py-4 text-sm text-blue-600 space-x-2">
                  <button className="hover:text-blue-800">编辑</button>
                  <button className="hover:text-blue-800">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          共 3 条
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">上一页</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">下一页</button>
        </div>
      </div>
    </div>
  )
} 