'use client'

import { useState } from 'react'

interface Category {
  id: number
  name: string
  status: '显示' | '隐藏'
  createTime: string
}

export default function BusinessCategories() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 2,
      name: '民谣',
      status: '显示',
      createTime: '2024-10-16 16:14:43'
    },
    {
      id: 1,
      name: '摇滚',
      status: '显示',
      createTime: '2024-10-16 16:14:38'
    }
  ])

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="ID"
          className="px-3 py-2 border rounded-md w-32"
        />
        <input
          type="text"
          placeholder="名称"
          className="px-3 py-2 border rounded-md w-32"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          查询
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto">
          + 新增分类
        </button>
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">创建时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{category.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{category.name}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    category.status === '显示' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {category.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{category.createTime}</td>
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
          共 2 条
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