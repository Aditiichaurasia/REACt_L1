import './nav.css'
export default function NavBar(){
    return (
        <header >
            <nav className="nav1">
                <img className='imgi' src="/src/images/logo.png"  width="60px"/>
                <ul className="NAV2">
                    <li>React course</li>
                    <li>Project 1</li>
                </ul>
            </nav>
        </header>
    )
}