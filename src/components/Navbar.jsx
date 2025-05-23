// import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Navbar(){
    // const [active, setActive] = useState(false);

    return(
        <div className = 'flex justify-between items-center text-lg fixed w-full px-10 z-20 bg-gray-theme'>
            <div id = 'main-nav' className = 'flex gap-10 py-5 items-center'>
                <FontAwesomeIcon icon= {faHouse} className = 'nav-item'/>
                <Link to="/projects" className="nav-item"> Projects </Link>
                <Link to="/research" className="nav-item"> Research </Link>
            </div>
            <div className = 'accent-btn '>Contact</div>
        
        </div>
    )
}