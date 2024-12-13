'use client'

import { useState } from 'react'

interface Account {
  id: number
  businessId: string
  theme: string
  name: string
  contactPhone: string
  type: string
  realName: string
  accountNumber: string
  bankName: string
  branchName: string
  createTime: string
}

export default function AccountList() {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 1,
      businessId: 'B123456',
      theme: '健身',
      name: '某某健身房',
      contactPhone: '13800138000',
      type: '企业',
      realName: '李四',
      accountNumber: '6222020202020202020',
      bankName: '中国银行',
      branchName: '广州分行',
      createTime: '2024-11-20 14:31:21',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="businessId">商家ID</option>
        </select>
        <input
          type="text"
          placeholder="请输入搜索内容"
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">商家ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">商家主题</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">商家名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">联系电话</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">类型</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">真实姓名</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">账号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">开户银行</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">开户支行</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">创建时间</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {accounts.map((account) => (
              <tr key={account.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{account.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.businessId}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.theme}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.name}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.contactPhone}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.type}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.realName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.accountNumber}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.bankName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.branchName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{account.createTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          共 {accounts.length} 条
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