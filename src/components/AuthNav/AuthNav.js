
import Navigation from "components/Navigation/Navigation"
import css from './auth.module.css'

const AuthNav = () => {
    return <div className={css.ContainerAuth}>
                <div className={css.authLink}><Navigation path='/register' text='register'/></div>
                <div className={css.authLink}><Navigation path='/login' text='login'/></div>
            </div>
}

export default  AuthNav