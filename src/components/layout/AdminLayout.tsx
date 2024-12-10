'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [currentMenu, setCurrentMenu] = useState('订单')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const username = "管理员" // 这里可以从登录状态获取
  const pathname = usePathname()

  // 根据当前路径更新选中的主菜单
  useEffect(() => {
    const menu = menuItems.find(item => pathname.startsWith(item.path))
    if (menu) {
      setCurrentMenu(menu.label)
    }
  }, [pathname])

  // 获取当前二级导航标题
  const getCurrentSubMenuTitle = () => {
    const menu = menuItems.find(item => pathname.startsWith(item.path))
    if (menu) {
      const subMenuList = subMenuItems[menu.label as keyof typeof subMenuItems]
      if (subMenuList) {
        const subMenu = subMenuList.find(item => pathname === item.path)
        if (subMenu) {
          return subMenu.label
        }
      }
    }
    return currentMenu
  }

  const menuItems = [
    { icon: '📋', label: '订单', path: '/orders' },
    { icon: '📚', label: '课程', path: '/courses' },
    { icon: '📝', label: '项目', path: '/projects' },
    { icon: '👨‍🏫', label: '教练', path: '/coaches' },
    { icon: '🏢', label: '商家', path: '/business' },
    { icon: '🎯', label: '营销', path: '/marketing' },
    { icon: '👥', label: '用户', path: '/users' },
    { icon: '📊', label: '统计', path: '/statistics' },
    { icon: '💰', label: '财务', path: '/finance' },
    { icon: '📄', label: '页面', path: '/pages' },
    { icon: '💬', label: '公众号', path: '/wechat' },
    { icon: '⚙️', label: '设置', path: '/settings' },
    { icon: '🔌', label: '应用', path: '/apps' },
    { icon: '🔒', label: '权限', path: '/permissions' }
  ]

  const subMenuItems = {
    订单: [
      { label: '订单列表', path: '/orders' },
      { label: '售后服务', path: '/orders/after-sales' },
      { label: '紧急报警', path: '/orders/emergency' },
      { label: '到达拍照', path: '/orders/arrival-photo' },
      { label: '隐私号码绑定', path: '/orders/privacy-number' },
      { label: '订单行程', path: '/orders/journey' },
      { label: '催单列表', path: '/orders/urge-list' },
      { label: '服务评价', path: '/orders/reviews' },
      { label: '教练评论', path: '/orders/training-comments' },
      { label: '评论申诉', path: '/orders/comment-appeals' },
      { label: '订单报备', path: '/orders/reports' }
    ],
    课程: [
      { label: '课程列表', path: '/courses' },
      { label: '课程购买', path: '/courses/purchases' },
      { label: '课程卡', path: '/courses/cards' },
      { label: '预约课程', path: '/courses/appointments' }
    ],
    项目: [
      { label: '项目列表', path: '/projects' },
      { label: '分类管理', path: '/projects/categories' }
    ],
    教练: [
      { label: '教练列表', path: '/coaches' },
      { label: '教练申请', path: '/coaches/applications' },
      { label: '教练审核', path: '/coaches/reviews' },
      { label: '教练等级', path: '/coaches/levels' },
      { label: '服务时长', path: '/coaches/service-duration' },
      { label: '出行方式', path: '/coaches/travel-modes' },
      { label: '出行规则', path: '/coaches/travel-rules' },
      { label: '教练头衔', path: '/coaches/titles' },
      { label: '考核规则', path: '/coaches/assessment-rules' },
      { label: '标笾管理', path: '/coaches/badge-management' },
      { label: '教练标签', path: '/coaches/tags' },
      { label: '解除协议', path: '/coaches/termination' },
      { label: '职称管理', path: '/coaches/professional-titles' },
      { label: '在线时长', path: '/coaches/online-duration' },
      { label: '黑名单列表', path: '/coaches/blacklist' }
    ],
    商家: [
      { label: '门店列表', path: '/business/stores' },
      { label: '门店分类', path: '/business/categories' },
      { label: '门店评价', path: '/business/reviews' }
    ]
  }

  const handleLogout = () => {
    // 处理退出登录
    console.log('退出登录')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* 左侧主导航栏 */}
        <div className="w-28 bg-[#001529] text-white overflow-y-auto">
          <div className="h-12 flex items-center justify-center border-b border-gray-700">
            <span className="text-lg">白马教育</span>
          </div>
          <nav className="py-2">
            {menuItems.map((item) => (
              <Link
              key={item.label}
              href={item.path}
              onClick={() => setCurrentMenu(item.label)}
              className={`w-full flex items-center px-3 h-9 text-gray-300 hover:text-white hover:bg-gray-800 whitespace-nowrap ${
                currentMenu === item.label ? 'bg-gray-800 text-white' : ''
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="ml-2 text-sm truncate">{item.label}</span>
            </Link>
            ))}
          </nav>
        </div>

        {/* 左侧二级导航栏 */}
        <div className="w-28 bg-white border-r">
          <div className="h-12"></div>
          <nav className="py-2 ">
            {subMenuItems[currentMenu as keyof typeof subMenuItems]?.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`flex items-center justify-center h-10 px-2 text-sm hover:bg-gray-100 whitespace-nowrap mb-2 ${
                  pathname === item.path 
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部导航栏 */}
        <header className="h-12 bg-white border-b flex items-center justify-between px-4 z-10">
          <div className="flex items-center mt-2">
            <h1 className="text-lg font-medium">{getCurrentSubMenuTitle()}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-lg">🔔</span>
            </button>
            <div className="relative">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{username} 欢迎您</span>
                <button 
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="text-lg">👤</span>
                </button>
              </div>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                  <button
                    onClick={() => {
                      setShowUserMenu(false)
                      // 处理修改密码
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    修改密码
                  </button>
                  <button
                    onClick={() => {
                      setShowUserMenu(false)
                      handleLogout()
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    退出登录
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* 内容区域 */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
