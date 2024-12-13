'use client'

import { Form, DatePicker } from 'antd'
import type { FormInstance } from 'antd'
import type { Dayjs } from 'dayjs'
const { RangePicker } = DatePicker

interface DateRangeSearchProps {
  form: FormInstance
  name?: string
  label?: string
  showTime?: boolean
  format?: string
  onChange?: (dates: any, dateStrings: [string, string]) => void
  disabledDate?: (current: Dayjs) => boolean
  className?: string
}

export default function DateRangeSearch({ 
  form, 
  name = 'dateRange',
  label,
  showTime,
  format,
  onChange,
  disabledDate,
  className
}: DateRangeSearchProps) {
  return (
    <Form.Item 
      name={name} 
      label={label}
      className={className}
    >
      <RangePicker 
        placeholder={['开始日期', '结束日期']}
        style={{ width: 260 }}
        showTime={showTime}
        format={format}
        onChange={onChange}
        disabledDate={disabledDate}
      />
    </Form.Item>
  )
} 