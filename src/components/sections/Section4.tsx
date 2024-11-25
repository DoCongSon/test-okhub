import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SuMenhItem from '../SuMenhItem'
import useScreen from '../../hooks/useScreen'
import { suMenh } from '../../constants'
import SuMenhImg from '../../assets/images/su-menh.png'
import { useGSAP } from '@gsap/react'

const Section4 = () => {
  const isMobileScreen = useScreen() == 'mobile'
  const suMenhContainerRef = useRef<HTMLDivElement>(null)
  const suMenhImageRef = useRef<HTMLImageElement>(null)
  const suMenhTitleRef = useRef<HTMLDivElement>(null)
  const suMenElipRef = useRef<HTMLDivElement>(null)
  const suMenhDateRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      if (isMobileScreen) {
        const suMenhHeight = suMenhContainerRef.current?.offsetHeight || 0
        const suMenhImageHeight = suMenhImageRef.current?.offsetHeight || 0
        const endOffset = suMenhHeight - suMenhImageHeight

        ScrollTrigger.create({
          trigger: suMenhImageRef.current,
          start: 'top top',
          end: `+=${endOffset} top`,
          pin: suMenhImageRef.current,
          pinSpacing: false,
          pinType: 'transform',
        })
      } else {
        const suMenhHeight = suMenhContainerRef.current?.offsetHeight || 0
        const suMenhImageHeight = suMenhImageRef.current?.offsetHeight || 0
        const endOffset = suMenhHeight - suMenhImageHeight - 400

        ScrollTrigger.create({
          trigger: suMenhImageRef.current,
          start: 'top 200px',
          end: `+=${endOffset} top`,
          pin: suMenhImageRef.current,
          pinSpacing: false,
          pinType: 'transform',
        })

        ScrollTrigger.create({
          trigger: suMenhDateRef.current,
          start: `top ${suMenhImageHeight / 2 + 100}px`,
          end: `+=${endOffset} top`,
          pin: suMenhDateRef.current,
          pinSpacing: false,
          pinType: 'transform',
        })
      }
    },
    { dependencies: [isMobileScreen], revertOnUpdate: true }
  )

  return (
    <div className='relative'>
      <div
        ref={suMenElipRef}
        className='w-[120vw] absolute -ml-[10vw] h-[20vw] bg-gradient-to-b from-[#37398110] to-transparent rounded-ellipse'></div>
      <div ref={suMenhTitleRef} className='w-full flex items-center justify-center flex-col gap-4 pt-16'>
        <div className='items-center gap-2 flex'>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
          <div className='text-[#155ab7] text-base font-semibold leading-normal'>SỨ MỆNH</div>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
        </div>
        <div className='text-center bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text max-w-[380px] md:max-w-[650px] text-2xl md:text-[40px] font-bold font-quicksand md:leading-[52px]'>
          Mang lại cuộc sống tốt đẹp hớn cho những người đồng hành
        </div>
      </div>
      <div
        className='mt-12 flex flex-col md:flex-row relative gap-5 justify-around items-center md:items-start'
        ref={suMenhContainerRef}>
        <img
          ref={suMenhImageRef}
          src={SuMenhImg}
          className='w-[355px] h-[200px] rounded-2xl lg:w-[734.14px] lg:h-[492.59px] md:rounded-3xl md:order-1'
        />
        <p
          ref={suMenhDateRef}
          className='text-[#011942] inline-flex text-base font-normal uppercase leading-normal tracking-widest'>
          01/04
        </p>
        <div className='flex flex-col gap-5 mt-6 w-[355px]'>
          {suMenh.map((item) => (
            <SuMenhItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
