import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <NavLink className="text-decoration-underline navbar-brand" to="/">CarCar</NavLink>
                    <ul className="dropdown">
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sales
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><NavLink className="dropdown-item" aria-current="page" to="customers/create/">New Customers</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord/create">New Sales Records</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord">All Sales Records</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord/history">Sales History</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/salesperson/create">New Salesperson</NavLink></li>
                        </ul>
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Inventory
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers/create">New Manufacturer</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers">All Manufacturers</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/models/create">New Vehicle Model</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/models">All Models</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles/create">New Automobile</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles">All Automobiles</NavLink></li>
                        </ul>
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark open" aria-labelledby="dropdownMenuButton2">
                            <li><NavLink className="dropdown-item" aria-current="page" to="/technician/new">Create a Technician</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/service/new">Create Service</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/service/history/">Service History</NavLink></li>
                            <li><NavLink className="dropdown-item" aria-current="page" to="/service">Service Appointments</NavLink></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        </>
        // <>
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        //         <div className="container-fluid">
        //             BRUH
        //         </div>
        //     </nav>
        // </>
    )
}

export default Nav