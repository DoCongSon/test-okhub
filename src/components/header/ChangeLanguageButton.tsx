import React from 'react'
import { cn } from '../../utils'

const ChangeLanguageButton = () => {
  const [language, setLanguage] = React.useState<'VIE' | 'ENG'>('VIE')
  return (
    <button className='px-1.5 py-1 bg-[#231f20]/10 rounded-[25px] border border-white/30 items-center justify-center inline-flex'>
      <div
        onClick={() => setLanguage('VIE')}
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center font-quicksand text-white text-sm font-bold leading-tight',
          language === 'VIE' ? 'bg-[#2F2E79]' : 'bg-transparent'
        )}>
        VIE
      </div>
      <div
        onClick={() => setLanguage('ENG')}
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center font-quicksand text-white text-sm font-bold leading-tight',
          language === 'ENG' ? 'bg-[#f4475c]' : 'bg-transparent'
        )}>
        ENG
      </div>
    </button>
  )
}

export default ChangeLanguageButton
