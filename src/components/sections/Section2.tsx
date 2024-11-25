import useScreen from '../../hooks/useScreen'
import BackgroundPC2 from '../../assets/images/bg2-pc.png'
import BackgroundMB2 from '../../assets/images/bg2-mb.png'
import Button from '../Button'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
  const isMobileScreen = useScreen() == 'mobile'

  useGSAP(
    () => {
      gsap.from('.animate', {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.trigger3',
          start: 'top top',
        },
      })
    },
    { scope: '.trigger3' }
  )

  return (
    <div className='relative trigger3'>
      <div className='w-full md:min-w-[1400px] animate'>
        <img src={isMobileScreen ? BackgroundMB2 : BackgroundPC2} className='w-full object-contain' />
      </div>
      <div className='absolute top-16 left-5 md:top-40 md:left-20'>
        <div className='self-stretch justify-start items-center gap-1.5 flex'>
          <div className='w-1.5 h-1.5 bg-white/60 rounded-full shadow'></div>
          <p className=' text-white/60 text-sm font-bold uppercase md:text-white md:font-semibold md:text-base'>
            Công ty Cổ phần Tập đoàn Ami&M Việt Nam
          </p>
        </div>
        <p className='text-white text-[44px] md:text-[64px] font-bold font-quicksand uppercase leading-snug mt-4 max-w-[350px] md:max-w-[600px]'>
          Khởi nguồn từ Tình bằng hữu
        </p>
        <p className='text-white text-sm md:text-lg font-medium mt-6 max-w-[350px] md:max-w-[600px]'>
          Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý tưởng đầu tiên về
          AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
        </p>
        <div className='text-white text-sm md:text-lg font-medium mt-6 max-w-[350px] md:max-w-[600px]'>
          Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó và kết nối cũng những người bằng hữu mà chúng
          tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách và gắn bó nhiệt
          thành để cùng nhau kiến tạo các giá trị mà mình tin tưởng.
        </div>
        <Button text='Hành trình của Ami&M' className='mt-6' />
      </div>
    </div>
  )
}

export default Section2
