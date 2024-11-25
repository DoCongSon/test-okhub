import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background3 from '../../assets/images/ng3.png'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
  useGSAP(
    () => {
      const typeSplit = new SplitType('.animate', {
        types: 'lines,words,chars',
        tagName: 'span',
      })

      gsap.from('.animate .line', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.animate',
          start: 'top center',
        },
      })

      return () => {
        typeSplit.revert()
      }
    },
    { scope: '.trigger4' }
  )

  return (
    <div className='relative'>
      <div className='w-full min-w-[1300px]'>
        <img src={Background3} className='mx-auto w-[1300px] object-contain' />
      </div>
      <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col gap-4'>
        <div className='items-center gap-2 flex trigger4'>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
          <div className='text-[#155ab7] text-base font-semibold leading-normal'>TẦM NHÌN</div>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
        </div>
        <p className='text-center max-w-[320px] md:max-w-[850px] text-2xl md:text-[40px] font-bold font-quicksand md:leading-[52px] bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text animate'>
          Ami&M xây dựng hệ sinh thái đa ngành phát triển nhanh và bền vững trên hành trình kiến tạo sự thịnh vượng đích
          thực!
        </p>
      </div>
    </div>
  )
}

export default Section3
