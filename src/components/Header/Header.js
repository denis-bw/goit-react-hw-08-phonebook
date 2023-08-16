
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "components/AuthNav/AuthNav"
import Navigation from "components/Navigation/Navigation"
import { useSelector } from "react-redux"
import css from './Header.module.css'




const Header = () => {
    const isLoggedIn = useSelector(state => state.userDetails.isLoggedIn)


    return <header className={css.headerContainer}>
        
            <nav className={css.navigation}>
                <div><Navigation path='/' text='home'/></div>
                {isLoggedIn ? <div><Navigation path='/contacts' text='contacts'/></div>: <AuthNav/>}
            </nav>
        
            {isLoggedIn && <UserMenu />}
         </header >
}

export default Header