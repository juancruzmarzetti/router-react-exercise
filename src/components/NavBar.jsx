import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <h2>React Router´s Links</h2>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/faqs">Faqs</Link>
        </button>
      </nav>
      <div>
        <h2>React Router´s useNavigate</h2>
        <button onClick={() => navigate(1)}>Go forward</button>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate(-2)}>Go 2 pages back</button>
        <button onClick={() => navigate(5)}>Go 5 pages forward</button>
        <button onClick={() => navigate("/home")}>Home</button>
      </div>
    </>
  )
}

export default NavBar