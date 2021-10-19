import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
                <nav>
                    <ul>
                        
                        <li><Link to= "/movies">Movies</ Link>
                        </li>

                        <li><Link to="tvshows">TV Shows</ Link>
                        </li>

                        <li><Link to="featured">Featured</ Link>
                        </li>

                    </ul>
            </nav>  
        </>
    )
}

export default Navigation
