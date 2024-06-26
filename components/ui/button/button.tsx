import clsx from 'clsx'
import s from './button.module.scss'

interface Props {
  type?: 'button' | 'submit'
  level?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
  className?: string
}
export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  type = 'button',
  isLoading = false,
  level = 'primary',
  className,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={clsx(
        'text-base, rounded-md',
        `${s['btn']} ${s[level]}`,
        className
      )}>
      {children}
    </button>
  )
}
