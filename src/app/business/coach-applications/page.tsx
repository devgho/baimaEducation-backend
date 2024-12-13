'use client'

import { useState } from 'react'

interface CoachApplication {
  id: number
  coachId: string
  coachAvatar: string
  coachName: string
  storeLogo: string
  storeName: string
  status: '待审核' | '已通过' | '已拒绝'
  operator: string
  addedTime: string
  updatedTime: string
  reviewTime: string
}

export default function CoachApplications() {
  const [applications, setApplications] = useState<CoachApplication[]>([
    {
      id: 1,
      coachId: 'C123456',
      coachAvatar: '/avatar.jpg',
      coachName: '张三',
      storeLogo: '/store-logo.jpg',
      storeName: '正道健身馆',
      status: '待审核',
      operator: '管理员',
      addedTime: '2024-10-16 21:39:31',
      updatedTime: '2024-10-17 10:00:00',
      reviewTime: '2024-10-18 15:00:00',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="教练名称"
          className="px-3 py-2 border rounded-md w-64"
        />
        <input
          type="text"
          placeholder="门店名称"
          className="px-3 py-2 border rounded-md w-64"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          查询
        </button>
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">记录ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">教练ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">教练头像</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">教练名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店logo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作人员</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">添加时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">更新时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">审核时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{application.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.coachId}</td>
                <td className="px-4 py-4">
                  <img
                    src={application.coachAvatar}
                    alt="教练头像"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.coachName}</td>
                <td className="px-4 py-4">
                  <img
                    src={application.storeLogo}
                    alt="门店logo"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.storeName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.status}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.operator}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.addedTime}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.updatedTime}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.reviewTime}</td>
                <td className="px-4 py-4 text-sm text-blue-600 space-x-2">
                  <button className="hover:text-blue-800">审核</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          共 {applications.length} 条
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