'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Application {
  id: number
  avatar: string
  user: string
  name: string
  phone: string
  companyName: string
  licenseCode: string
  address: string
  license: string
  legalPersonName: string
  legalPersonPhone: string
  legalPersonIdFront: string
  legalPersonIdBack: string
  status: '待审核' | '已通过' | '已拒绝'
  createTime: string
  rejectionReason: string
}

export default function BusinessApplications() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      avatar: '/default-avatar.png',
      user: '周杰',
      name: '周杰',
      phone: '13102929798',
      companyName: '某某公司',
      licenseCode: '225545',
      address: '浙江省杭州市上城区政府街道',
      license: '/license.jpg',
      legalPersonName: '李四',
      legalPersonPhone: '13800138001',
      legalPersonIdFront: '/id-front.jpg',
      legalPersonIdBack: '/id-back.jpg',
      status: '待审核',
      createTime: '2024-11-20 14:31:21',
      rejectionReason: '',
    }
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索栏 */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="用户头像/姓名"
          className="px-3 py-2 border rounded-md w-64"
        />
        <input
          type="text"
          placeholder="手机号"
          className="px-3 py-2 border rounded-md w-48"
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">用户头像</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">用户</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">姓名</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">手机号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">公司名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">营业执照编码</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">地址</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">营业执照</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">法人姓名</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">法人手机号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">法人身份正面照</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">法人身份反面照</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">创建时间</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">驳回原因</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="px-4 py-4">
                  <Image
                    src={application.avatar}
                    alt={application.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.user}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.name}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.phone}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.companyName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.licenseCode}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.address}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.license}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.legalPersonName}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.legalPersonPhone}</td>
                <td className="px-4 py-4">
                  <Image
                    src={application.legalPersonIdFront}
                    alt="法人身份正面照"
                    width={60}
                    height={40}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-4">
                  <Image
                    src={application.legalPersonIdBack}
                    alt="法人身份反面照"
                    width={60}
                    height={40}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    application.status === '待审核' ? 'bg-yellow-100 text-yellow-800' :
                    application.status === '已通过' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {application.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.createTime}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{application.rejectionReason}</td>
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