import lvg from '../../assets/lvg.svg'
import btn from '../../assets/btnIcons.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* LOGO */}
        <img src={lvg} alt="logo" />
        {/* NAV LINKS */}
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
        {/* BUTTON */}
        <button
          type="button"
          className="btnIcon"
          style={{ backgroundColor: '#afe274', borderRadius: '33px' }}
        >
          Download app <img src={btn} />
        </button>
      </div>
    </nav>
  )
}
export default Navbar
