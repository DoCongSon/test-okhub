import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { dauAn } from '../../constants'
import DauAnItem from '../DauAnItem'
import useScreen from '../../hooks/useScreen'
import { useGSAP } from '@gsap/react'

const Section6 = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isMobileScreen = useScreen() === 'mobile'

  useGSAP(
    () => {
      if (isMobileScreen) return

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 200px',
        end: `+=${(containerRef.current?.offsetHeight || 0) - (contentRef.current?.offsetHeight || 0) - 100}px`, // Scroll hết chiều cao còn lại
        pin: contentRef.current,
        pinSpacing: true,
        pinType: 'transform',
      })
    },
    { dependencies: [isMobileScreen], revertOnUpdate: true }
  )

  return (
    <div ref={containerRef} className='flex flex-col md:flex-row md:items-start mt-[100px] md:mt-0 px-2.5 gap-8'>
      <div ref={contentRef}>
        <div className='items-center gap-2 flex'>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
          <div className='text-[#155ab7] text-base font-semibold leading-normal'>LĨNH VỰC ĐẦU TƯ</div>
        </div>
        <p className='bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text text-[32px] md:text-[88px] font-quicksand font-bold mt-2'>
          Dấu ấn Ami&M
        </p>
        <p className='max-w-[300px] md:max-w-[500px] text-[#333333] text-sm md:text-lg font-medium mt-4'>
          Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới, trách
          nhiệm xã hội và sự tin cậy từ những Người đồng hành.
        </p>
      </div>
      <div className='flex-1'>
        {dauAn.map((item, index) => (
          <DauAnItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Section6
