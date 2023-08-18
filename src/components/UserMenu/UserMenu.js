import { useSelector } from "react-redux"
import { fetchLogout } from "redux/operations"
import { useDispatch } from "react-redux"
import css from './UserMenu.module.css'

const UserMenu = () => {

    const name = useSelector(state => state.userDetails.user.name)
    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(fetchLogout()) 
    }

    return  <div className={css.userMenuContainer}>
                <p className={css.userName}>{name}</p>
                <button className={css.btnLogOut} onClick={logoutUser}>Logout</button>
            </div>
}

export default UserMenu