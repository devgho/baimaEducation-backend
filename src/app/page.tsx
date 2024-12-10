'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Login from '@/components/Login'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // 检查是否已登录
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'true') {
      router.push('/orders')
    }
  }, [router])

  return <Login />
}