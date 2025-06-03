import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const base = 'rounded-xl px-4 py-2 text-sm font-medium transition-colors'

  const styles = {
    primary: 'bg-ddagl-indigo text-white hover:bg-ddagl-gold',
    outline: 'border border-ddagl-indigo text-ddagl-indigo hover:bg-ddagl-indigo hover:text-white',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  )
}
