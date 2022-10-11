import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="text-decoration-underline navbar-brand" to="/">OnlyPics</NavLink>
                    <ul className="dropdown">
                        <button className="btn btn-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Guru
                        </button>
                        <button className="btn btn-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sports
                        </button>
                        <button className="btn btn-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Odds
                        </button>
                        <button className="btn btn-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            My Gurus
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Nav;



