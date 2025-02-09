import { ref } from 'vue'
import { format, parse, isValid } from 'date-fns'
import { th } from 'date-fns/locale'

interface FormatterOptions {
  currency?: {
    locale?: string
    currency?: string
    decimals?: number
    showSymbol?: boolean
  }
  date?: {
    format?: string
    dateTimeFormat?: string
    timeFormat?: string
    useBuddhistEra?: boolean
    locale?: string
  }
  number?: {
    decimals?: number
    useGrouping?: boolean
    locale?: string
  }
}

const THAI_NUMBERS = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']
const THAI_UNITS = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']

export function useValueFormatters(options: FormatterOptions = {}) {
  const defaultOptions: FormatterOptions = {
    currency: {
      locale: 'th-TH',
      currency: 'THB',
      decimals: 2,
      showSymbol: true
    },
    date: {
      format: 'dd/MM/yyyy',
      dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
      timeFormat: 'HH:mm:ss',
      useBuddhistEra: true,
      locale: 'th'
    },
    number: {
      decimals: 2,
      useGrouping: true,
      locale: 'th-TH'
    }
  }

  const config = ref({
    currency: { ...defaultOptions.currency, ...options.currency },
    date: { ...defaultOptions.date, ...options.date },
    number: { ...defaultOptions.number, ...options.number }
  })

  const formatCurrency = (value: number | null | undefined): string => {
    if (value == null) return ''
    
    return new Intl.NumberFormat(config.value.currency.locale, {
      style: 'currency',
      currency: config.value.currency.currency,
      minimumFractionDigits: config.value.currency.decimals,
      maximumFractionDigits: config.value.currency.decimals,
      currencyDisplay: config.value.currency.showSymbol ? 'symbol' : 'code'
    }).format(value)
  }

  const formatNumber = (value: number | null | undefined): string => {
    if (value == null) return ''

    return new Intl.NumberFormat(config.value.number.locale, {
      minimumFractionDigits: config.value.number.decimals,
      maximumFractionDigits: config.value.number.decimals,
      useGrouping: config.value.number.useGrouping
    }).format(value)
  }

  const formatPercentage = (value: number | null | undefined): string => {
    if (value == null) return ''

    return new Intl.NumberFormat(config.value.number.locale, {
      style: 'percent',
      minimumFractionDigits: config.value.number.decimals,
      maximumFractionDigits: config.value.number.decimals
    }).format(value / 100)
  }

  const toBuddhistYear = (date: Date): Date => {
    const newDate = new Date(date)
    if (config.value.date?.useBuddhistEra) {
      newDate.setFullYear(date.getFullYear() + 543)
    }
    return newDate
  }

  const formatDate = (value: string | Date | null | undefined): string => {
    if (!value) return ''
    
    const dateValue = value instanceof Date ? value : new Date(value)
    if (!isValid(dateValue)) return ''
    
    const dateFormat = config.value.date.format!
    return format(toBuddhistYear(dateValue), dateFormat, {
      locale: config.value.date?.locale === 'th' ? th : undefined
    })
  }

  const formatDateTime = (value: string | Date | null | undefined): string => {
    if (!value) return ''
    
    const dateValue = value instanceof Date ? value : new Date(value)
    if (!isValid(dateValue)) return ''
    
    const dateTimeFormat = config.value.date.dateTimeFormat!
    return format(toBuddhistYear(dateValue), dateTimeFormat, {
      locale: config.value.date?.locale === 'th' ? th : undefined
    })
  }

  const formatTime = (value: string | Date | null | undefined): string => {
    if (!value) return ''
    
    const dateValue = value instanceof Date ? value : new Date(value)
    if (!isValid(dateValue)) return ''
    
    const timeFormat = config.value.date.timeFormat!
    return format(dateValue, timeFormat, {
      locale: config.value.date?.locale === 'th' ? th : undefined
    })
  }

  const convertToThaiText = (num: number): string => {
    if (num === 0) return THAI_NUMBERS[0]!
    
    let text = ''
    let remaining = num
    let unitIndex = 0

    while (remaining > 0) {
      const digit = remaining % 10
      if (digit > 0) {
        text = THAI_NUMBERS[digit]! + THAI_UNITS[unitIndex] + text
      }
      remaining = Math.floor(remaining / 10)
      unitIndex++
    }

    return text
  }

  const numberToThaiText = (value: number | null | undefined): string => {
    if (value == null) return ''
    return convertToThaiText(Math.abs(Math.floor(value)))
  }

  const currencyToThaiText = (value: number | null | undefined): string => {
    if (value == null) return ''
    
    const integerPart = Math.floor(Math.abs(value))
    const decimalPart = Math.round((Math.abs(value) - integerPart) * 100)
    
    let result = convertToThaiText(integerPart) + 'บาท'
    if (decimalPart > 0) {
      result += convertToThaiText(decimalPart) + 'สตางค์'
    }
    return result
  }

  return {
    formatCurrency,
    formatNumber,
    formatPercentage,
    formatDate,
    formatDateTime,
    formatTime,
    numberToThaiText,
    currencyToThaiText,
    config
  }
}
