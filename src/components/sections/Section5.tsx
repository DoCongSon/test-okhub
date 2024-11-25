import useScreen from '../../hooks/useScreen'
import BackgroundPC from '../../assets/images/bg3-pc.png'
import Image1 from '../../assets/images/img1.jpg'
import logo from '../../assets/logo.svg'
import Button from '../Button'
import { cn } from '../../utils'

const Section5 = () => {
  const isMobileScreen = useScreen() == 'mobile'
  return (
    <div className='relative overflow-hidden'>
      <div className='w-full h-[170vh] md:h-screen'>
        {!isMobileScreen && <img src={BackgroundPC} className='w-full object-contain' />}
      </div>
      <div
        className={cn(
          'w-[150%] md:w-[50%] aspect-square rounded-full absolute -right-[25%] md:-top-[10%] md:-right-[10%]',
          isMobileScreen && 'bottom-0'
        )}>
        <img src={Image1} className='w-full h-full object-cover rounded-full absolute' />
        <div className='bg-gradient-to-b from-[#2f2e79] to-[#a6122178] rounded-full w-full h-full absolute' />
        <div className='w-full h-full absolute flex flex-col items-center md:items-end md:pr-[35%] gap-4 md:gap-7 justify-end pb-[10%] md:pb-0 md:justify-center z-30'>
          {!isMobileScreen && <img src={logo} className='w-[30%]' />}
          {isMobileScreen && (
            <div className='text-center text-white text-base font-medium uppercase leading-normal'>
              Ami&M Investment
            </div>
          )}
          <p className='w-[70%] text-center md:text-right text-white uppercase'>
            {!isMobileScreen && (
              <span className='text-lg font-medium'>
                Cung cấp dịch vụ <br />
              </span>
            )}
            <span className='text-lg md:text-xl font-extrabold'>
              Quản lý & Khai thác Tài sản, <br />
              Chuỗi cơ sở lưu trú.
            </span>
          </p>
          <Button text='Tìm hiểu thêm' type='outline' />
        </div>
        <div
          className={cn(
            'flex items-center justify-center absolute md:top-[20%] md:-left-[3%] w-[15%] aspect-square bg-gradient-to-b from-[#3e4089] to-[#111358] rounded-full shadow',
            isMobileScreen && '-top-[5%] right-[60%]'
          )}>
          <img src={logo} className='w-[50%]' />
        </div>
        <div
          className={cn(
            'flex items-center justify-center absolute md:top-[45%] md:-left-[7%] w-[15%] aspect-square bg-white rounded-full shadow',
            isMobileScreen && '-top-[5%] right-[45%]'
          )}>
          <img src={logo} className='w-[50%]' />
        </div>
        <div
          className={cn(
            'flex items-center justify-center absolute md:top-[70%] md:left-[0%] w-[15%] aspect-square bg-white rounded-full shadow',
            isMobileScreen && '-top-[5%] right-[30%]'
          )}>
          <img src={logo} className='w-[50%]' />
        </div>
        <div
          className={cn(
            'flex items-center justify-center absolute md:top-[87%] md:left-[20%] w-[15%] aspect-square bg-white rounded-full shadow',
            isMobileScreen && 'top-[8%] right-[52.5%]'
          )}>
          <img src={logo} className='w-[50%]' />
        </div>
        <div
          className={cn(
            'flex items-center justify-center absolute md:top-[92%] md:left-[47%] w-[15%] aspect-square bg-white rounded-full shadow',
            isMobileScreen && 'top-[8%] right-[37.5%]'
          )}>
          <img src={logo} className='w-[50%]' />
        </div>
      </div>
      <div className='absolute w-full top-0 left-0 p-[5%] mt-24 md:mt-0'>
        <div className='items-center gap-2 flex'>
          <div className='w-1.5 h-1.5 bg-[#155ab7] rounded-full'></div>
          <div className='text-[#155ab7] text-base font-semibold leading-normal'>LĨNH VỰC ĐẦU TƯ</div>
        </div>
        <p className='bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text font-quicksand text-2xl md:text-[32px] font-bold max-w-[350px] md:max-w-[550px] mt-2.5'>
          Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao cấp và nâng tầm giáo dục trải nghiệm.
        </p>
        <p className='max-w-[300px] md:max-w-[500px] text-[#333333] text-sm md:text-lg font-medium mt-6 md:mt-2.5'>
          Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng đích thực cho những Người đồng hành và
          tạo lập di sản xứng tầm cho thế hệ tương lai.{' '}
        </p>
      </div>
    </div>
  )
}

export default Section5
