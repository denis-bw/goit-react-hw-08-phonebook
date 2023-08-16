import { NavLink } from "react-router-dom"


const Navigation = ({path, text}) => {

    return <NavLink to={path}>{text}</NavLink>
}

export default Navigation