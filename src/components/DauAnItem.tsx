type DauAnItemProps = {
  icon: string
  name: string
  description: string
  unit?: string
}

const DauAnItem = ({ icon, name, description, unit }: DauAnItemProps) => {
  return (
    <div className='flex p-6 md:px-14 md:py-9 w-full gap-4 items-center md:border-b md:border-l'>
      <div className='w-20 h-20 md:w-[170px] md:h-[170px] p-5 md:p-10 rounded-full bg-[#FBFBFB]'>
        <img src={icon} className='w-full' />
      </div>
      <div className='flex flex-col justify-center'>
        <h2 className='bg-gradient-to-r from-[#328AE2] to-[#FF0D39] text-transparent bg-clip-text text-[32px] font-bold md:text-[68px] md:font-extrabold'>
          {name} <span className='font-semibold'>{unit}</span>
        </h2>
        <p className='text-[#646464] text-sm md:text-xl md:font-semibold font-medium'>{description}</p>
      </div>
    </div>
  )
}

export default DauAnItem
