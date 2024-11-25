import React from 'react'

type SuMenhItemProps = {
  name: string
  description: string
  icon: string
}

const SuMenhItem = ({ name, icon, description }: SuMenhItemProps) => {
  return (
    <div className='flex flex-col gap-3 p-6 rounded-2xl border border-[#ececec] md:border-none'>
      <img src={icon} alt={name} className='w-20 h-20 object-contain' />
      <h3 className='text-[#155ab7] text-xl md:text-2xl font-bold font-quicksand'>{name}</h3>
      <p className='text-[#011942] text-sm md:text-lg font-medium'>{description}</p>
    </div>
  )
}

export default SuMenhItem
