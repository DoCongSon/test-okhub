import SuMenhImg from '../../assets/images/su-menh.png'
import BgImg from '../../assets/images/bg4-pc.png'
import BgBrand from '../../assets/images/bg-brand.png'
import BgBrandMb from '../../assets/images/bg-brand-mb.png'
import useScreen from '../../hooks/useScreen'
import Marquee from 'react-fast-marquee'
import { brands, doiTac } from '../../constants'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

type DoiTac = {
  name: string
  image: string
  avatar: string
  position: string
  comment: string
}

const Section7 = () => {
  const [showDoiTac, setShowDoiTac] = useState<DoiTac>(doiTac[2])
  const isMobileScreen = useScreen() == 'mobile'

  useGSAP(
    () => {
      // Tách chữ bằng SplitType
      const typeSplit = new SplitType('.animate', {
        types: 'lines,words,chars',
        tagName: 'span',
      })

      // Tạo animation với GSAP và thêm thay đổi màu chữ
      gsap.from('.animate .word', {
        opacity: 0.25,
        duration: 0.25,
        ease: 'power2.inOut',
        stagger: 0.25,
        scrollTrigger: {
          trigger: '.trigger2',
          start: 'center top',
          scrub: true,
        },
      })

      // Cleanup SplitType và ScrollTrigger khi component bị hủy
      return () => {
        typeSplit.revert()
      }
    },
    { scope: '.trigger2' }
  )

  return (
    <div className='w-full'>
      <div className='w-full relative flex items-center justify-center trigger2'>
        <img src={SuMenhImg} className='w-full min-w-[1000px] object-cover mx-auto' />
        <div className='w-full h-[50%] bg-gradient-to-t from-[#102a4d] to-transparent absolute bottom-0 flex items-center justify-center'>
          <p className='md:max-w-[1000px] text-center text-xl max-w-[500px] md:text-[40px] font-bold font-quicksand md:leading-[59.20px] text-[#f9f9f9] animate'>
            “Tình bằng hữu, sự chính trực và tinh thần
            <br /> tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”
          </p>
        </div>
      </div>
      <div className='relative'>
        <img src={BgImg} className='min-w-[1600px] object-cover' />
        <img
          src={isMobileScreen ? BgBrandMb : BgBrand}
          className='md:min-w-[1600px] w-full min-w-[375px] object-cover absolute bottom-0 z-10'
        />
        <div className='absolute w-full h-full top-0 flex justify-center items-center'>
          <div className='flex-col justify-start items-start gap-6 inline-flex pb-40'>
            <div className='justify-start items-center gap-1.5 inline-flex'>
              <div className='w-1.5 h-1.5 bg-white/80 rounded-full' />
              <p className='text-white/80 text-base font-semibold leading-normal'>HỢP TÁC VỮNG BỀN</p>
            </div>
            <p className='w-[695px] text-white text-[28px] font-semibold leading-[40px]'>{showDoiTac.comment}</p>
            <div className='h-[50px] flex-col justify-start items-start flex'>
              <div className='text-center text-white text-[22px] font-semibold leading-7'>{showDoiTac.name}</div>
              <div className='justify-center items-center gap-2.5 inline-flex'>
                <div className='justify-start items-center gap-1 flex'>
                  <div className='w-[2.61px] h-[2.61px] bg-[#8dc63f] rounded-full' />
                  <div className='w-[3.91px] h-[3.91px] bg-[#35aa94] rounded-full' />
                  <div className='w-[5.09px] h-[5.09px] bg-[#0088cb] rounded-full' />
                </div>
                <div className='text-center text-white text-sm font-semibold leading-[21px]'>{showDoiTac.position}</div>
                <div className='origin-top-left justify-start items-center gap-1 flex'>
                  <div className='w-[2.61px] h-[2.61px] bg-[#ed1b2f] rounded-full' />
                  <div className='w-[3.91px] h-[3.91px] bg-[#d24d70] rounded-full' />
                  <div className='w-[5.09px] h-[5.09px] bg-[#996598] rounded-full' />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              {doiTac.map((item) => {
                if (item.name === showDoiTac.name)
                  return (
                    <div className='w-[94px] h-[94px] rounded-full cursor-pointer relative'>
                      <div
                        className='absolute inset-0 rounded-full'
                        style={{ background: 'conic-gradient(white 0% 50%, transparent 50% 100%)' }}
                      />
                      <img
                        src={item.avatar}
                        className='absolute w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-full object-cover'
                      />
                    </div>
                  )
                return (
                  <div className='w-[70px] h-[70px] rounded-full cursor-pointer' onClick={() => setShowDoiTac(item)}>
                    <img src={item.avatar} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className='w-[600px] h-[800px]'>
            <img src={showDoiTac.image} className='w-full h-full' />
          </div>
        </div>
        <div className='absolute w-full z-20 bottom-[10%] md:bottom-[5%]'>
          <div className='md:ml-[200px] ml-[100px]'>
            <div className='justify-start items-center gap-1.5 inline-flex'>
              <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full' />
              <p className="text-[#155ab7] text-base font-semibold font-['Inter'] leading-normal">ĐỐI TÁC TIÊU BIỂU</p>
            </div>
            <p className='bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text font-quicksand text-[26px] font-bold uppercase leading-[33.80px]'>
              ĐỒNG HÀNH CÙNG AMI&M
            </p>
          </div>
          <div className='w-full mt-9'>
            <Marquee speed={100} gradient={false}>
              {brands.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className='h-20 w-auto mx-16 grayscale hover:grayscale-0 transition duration-300'
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7
