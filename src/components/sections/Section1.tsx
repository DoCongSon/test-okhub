import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import useScreen from '../../hooks/useScreen'
import Header from '../header'
import BackgroundPC1 from '../../assets/images/bg-pc.png'
import BackgroundMB1 from '../../assets/images/bg-mb.png'
import { cn } from '../../utils'

const Section1 = () => {
  const isMobileScreen = useScreen() == 'mobile'

  useGSAP(
    () => {
      const typeSplit = new SplitType('.animate', {
        types: 'lines,words,chars',
        tagName: 'span',
      })

      gsap.from('.animate', {
        y: '200%',
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        stagger: 0.1,
      })
      return () => typeSplit.revert()
    },
    { scope: '.trigger1' }
  )

  return (
    <div className='relative trigger1'>
      <div className='absolute w-full'>
        <Header />
      </div>
      <div className='w-full'>
        <img src={isMobileScreen ? BackgroundMB1 : BackgroundPC1} className='w-full object-contain select-none' />
      </div>
      <p
        className={cn(
          'font-bold uppercase font-quicksand absolute bottom-8 left-4 text-[32px] md:bottom-[100px] md:left-[100px] md:text-7xl leading-tight text-white animate'
        )}>
        Đồng hành
        <br />
        khởi thịnh vượng!
      </p>
    </div>
  )
}

export default Section1
