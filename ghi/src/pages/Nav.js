import { NavLink } from 'react-router-dom';
import { useToken } from '../Auth'


function Nav() {
    const [token, login, logout] = useToken();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="text-decoration-underline navbar-brand" to="/">OnlyPics</NavLink>
                    <ul className="dropdown">
                        <NavLink className="btn btn-dark" to="/guru/create" type="button" aria-current="page"> Guru </NavLink>
                        <NavLink className="btn btn-dark" to="/" type="button" aria-current="page"> Sports </NavLink>
                        <NavLink className="btn btn-dark" to="/" type="button" aria-current="page"> Odds </NavLink>
                        <NavLink className="btn btn-dark" to="/" type="button" aria-current="page"> My Gurus </NavLink>
                        {
                            token && <button type="submit" className="btn btn-danger" onClick={logout}> Logout </button>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Nav;



