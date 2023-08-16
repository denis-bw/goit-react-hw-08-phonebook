import { useSelector } from "react-redux"
import { fetchLogout } from "redux/operations"
import { useDispatch } from "react-redux"


const UserMenu = () => {

    const name = useSelector(state => state.userDetails.user.name)
    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(fetchLogout()) 
    }

    return  <div >
                <p>{name}</p>
                <button onClick={logoutUser}>Logout</button>
            </div>
}

export default UserMenu