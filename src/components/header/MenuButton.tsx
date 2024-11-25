import menuIcon from '../../assets/icons/menu.svg'

const MenuButton = () => {
  return (
    <button className='text-Neutral/N50 font-quicksand text-base leading-snug font-bold py-3.5 bg-[#231f20]/10 items-center gap-2 inline-flex px-8 border border-white/30 rounded-[25px]'>
      MENU
      <img src={menuIcon} />
    </button>
  )
}

export default MenuButton
