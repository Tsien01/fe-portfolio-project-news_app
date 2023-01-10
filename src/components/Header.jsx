import { Link } from "react-router-dom"

export function Header () {
    return (
        <header>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <ul className="sidebarMenuInner" id="sidebarMenu">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/search">
                    <li>Search</li>
                </Link>
                <Link to="/users">
                    <li>Users</li>
                </Link>
            </ul>
            <Link to="/home" className="headerLink">
                <h1>NC News</h1>
            </Link>
        </header>
    )
}