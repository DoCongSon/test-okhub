import MenuButton from './MenuButton'
import ChangeLanguageButton from './ChangeLanguageButton'
import logo from '../../assets/logo.svg'
import useScreen from '../../hooks/useScreen'
import MenuMobileButton from './MenuMobileButton'

const Header = () => {
  const isMobileScreen = useScreen() == 'mobile'

  return (
    <header className='bg-gradient-to-b from-[#6E6E6E14] to-transparent h-[100px] flex justify-between items-center px-4 md:px-[100px]'>
      <img src={logo} className='w-20 md:w-28' />
      <div className='gap-2.5 flex items-center'>
        <ChangeLanguageButton />
        {isMobileScreen ? <MenuMobileButton /> : <MenuButton />}
      </div>
    </header>
  )
}

export default Header
