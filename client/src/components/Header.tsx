import { Link } from 'react-router-dom'

//const Header = () => (
  //<header className="bg-blue-700 text-white px-6 py-4 flex gap-6 text-lg font-medium">
    //<Link to="/" className="hover:underline">🏠 Home</Link>
    //<Link to="/list" className="hover:underline">📄 Lista</Link>
    //<Link to="/form" className="hover:underline">➕ Formularz</Link>
    //<Link to="/admin" className="hover:underline">🛠 Panel admina</Link>
  //</header>
//)

const Header = (props: {setToken: (t: string)=>void}) => (
  <header className="bg-blue-700 text-white px-6 py-4 flex gap-6 text-lg font-medium w-full items-center">
    <Link to="/" className="hover:underline">
        <div className="px-6">
            🏠 Home
        </div>
    </Link>
    <Link to="/overview" className="hover:underline">
        <div className="px-6">
            📄 Overview
        </div>
    </Link>
    <Link to="/login" className="hover:underline">
        <div className="px-6">
            ➕ Login
        </div>
    </Link>
    <Link to="/register" className="hover:underline">
        <div className="px-6">
            ➕ Register
        </div>
    </Link>
    <a className="hover:underline inline-block px-6"><div onClick={() => props.setToken("")}>Log Out</div></a>
  </header>
)

export default Header
