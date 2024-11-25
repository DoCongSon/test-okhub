import ArrowRight from '../assets/icons/arrow-right.svg'
import { cn } from '../utils'

type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const Button = ({ text, type, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 text-white text-base font-semibold  leading-snug py-5 px-8 rounded-full hover:opacity-80 transition-all duration-300',
        type === 'secondary' ? 'bg-[#F4475C]' : 'bg-[#2F2E79]',
        type === 'outline' && 'border border-white bg-transparent',
        className
      )}>
      {text}
      <img src={ArrowRight} />
    </button>
  )
}

export default Button
