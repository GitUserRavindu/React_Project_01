import Logo from '../assets/react.svg'
import './Header.css'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={Logo} alt="React Logo"/>
                <h3 className="nav-h3">ReactFacts</h3>
                <h4 className="nav-h4">React - Project 01</h4>
            </nav>
        </header>
    )
}

export default Header