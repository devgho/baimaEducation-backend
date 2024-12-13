'use client'

import { useState } from 'react'

interface Staff {
  id: number
  storeId: string
  storeName: string
  staffName: string
  phone: string
  status: '启用' | '禁用'
  city: string
  addedTime: string
}

export default function StaffList() {
  const [staff, setStaff] = useState<Staff[]>([
    {
      id: 1,
      storeId: '1',
      storeName: '正道健身馆旗舰店',
      staffName: '娟',
      phone: '15348884704',
      status: '启用',
      city: '广州',
      addedTime: '2024-10-16 21:39:31',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="all">全部门店</option>
        </select>
        <input
          type="text"
          placeholder="请输入姓名/手机号"
          className="px-3 py-2 border rounded-md w-64"
        />
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="all">全部</option>
        </select>
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="all">全部城市</option>
          <option value="广州">广州</option>
          <option value="深圳">深圳</option>
          {/* 添加更多城市选项 */}
        </select>
        <input
          type="date"
          className="px-3 py-2 border rounded-md"
        />
        <input
          type="date"
          className="px-3 py-2 border rounded-md"
        />
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">所属门店</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">店员姓名</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">店员手机号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">城市</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">添加时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staff.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{member.storeId}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.storeName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.staffName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.phone}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.city}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.status}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.addedTime}</td>
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
          共 {staff.length} 条
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