import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faqs">Faqs</Link>  
        </nav>
    </>
  )
}

export default NavBar