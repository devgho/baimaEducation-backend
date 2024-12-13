'use client'

import { useState } from 'react'

interface Withdrawal {
  id: number
  transactionId: string
  storeImage: string
  storeName: string
  amount: number
  fee: number
  netAmount: number
  method: string
  accountName: string
  accountNumber: string
  bankName: string
  branchName: string
  reason: string
  status: '待审核' | '已通过' | '已拒绝'
  applicationTime: string
}

export default function WithdrawalReview() {
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([
    {
      id: 1,
      transactionId: 'TX123456',
      storeImage: '/store-image.png',
      storeName: '某某店铺',
      amount: 1000,
      fee: 50,
      netAmount: 950,
      method: '银行转账',
      accountName: '张三',
      accountNumber: '6222020202020202020',
      bankName: '中国银行',
      branchName: '广州分行',
      reason: '',
      status: '待审核',
      applicationTime: '2024-11-20 14:31:21',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="提现交易号"
          className="px-3 py-2 border rounded-md w-64"
        />
        <input
          type="text"
          placeholder="门店ID/名称/手机号"
          className="px-3 py-2 border rounded-md w-64"
        />
        <select className="px-3 py-2 border rounded-md w-32">
          <option value="">全部状态</option>
          <option value="pending">待审核</option>
          <option value="approved">已通过</option>
          <option value="rejected">已拒绝</option>
        </select>
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">交易号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店头像</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">门店名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">提现金额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">手续费</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">到账金额</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">提现方式</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">真实姓名</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">提现账号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">开户银行</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">开户支行</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">驳回原因</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">审核状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">申请时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {withdrawals.map((withdrawal) => (
              <tr key={withdrawal.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.transactionId}</td>
                <td className="px-4 py-4">
                  <img
                    src={withdrawal.storeImage}
                    alt={withdrawal.storeName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.storeName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{withdrawal.amount.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{withdrawal.fee.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">¥{withdrawal.netAmount.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.method}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.accountName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.accountNumber}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.bankName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.branchName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.reason}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    withdrawal.status === '待审核' ? 'bg-yellow-100 text-yellow-800' :
                    withdrawal.status === '已通过' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {withdrawal.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{withdrawal.applicationTime}</td>
                <td className="px-4 py-4 text-sm text-blue-600">
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
          共 {withdrawals.length} 条
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