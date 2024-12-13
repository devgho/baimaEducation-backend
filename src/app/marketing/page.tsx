'use client'

import { useState } from 'react'

interface ChargePackage {
  id: number
  packageName: string
  chargeAmount: number
  bonusAmount: number
  splitMethod: string
  splitRatio: string
  splitAmount: number
  order: number
  status: string
  addedTime: string
}

export default function ChargePackages() {
  const [packages, setPackages] = useState<ChargePackage[]>([
    {
      id: 1,
      packageName: '充值1000送100',
      chargeAmount: 1000.00,
      bonusAmount: 100.00,
      splitMethod: '固定金额',
      splitRatio: '10.00%',
      splitAmount: 0.00,
      order: 0,
      status: '正常',
      addedTime: '2024-10-25 16:16:10',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="套餐ID"
          className="px-3 py-2 border rounded-md w-64"
        />
        <input
          type="text"
          placeholder="套餐名称"
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">套餐名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">充值金额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">赠送金额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">分润方式</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">分润比例</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">分润金额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">排序</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">添加时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.packageName}</td>
                <td className="px-4 py-4 text-sm text-red-600">¥{pkg.chargeAmount.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-red-600">¥{pkg.bonusAmount.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.splitMethod}</td>
                <td className="px-4 py-4 text-sm text-red-600">{pkg.splitRatio}</td>
                <td className="px-4 py-4 text-sm text-red-600">{pkg.splitAmount.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.order}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.status}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{pkg.addedTime}</td>
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
          共 {packages.length} 条
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