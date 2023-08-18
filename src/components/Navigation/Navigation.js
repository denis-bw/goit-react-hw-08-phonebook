import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'

const Navigation = ({path, text}) => {

    return <NavLink className={css.Link} to={path}>{text}</NavLink>
}

export default Navigation