import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
export default function SideBar() {
    return (
        <div className='sideLine'>
            <ul>
                <Link to='/my-movies'>
                    <li>
                        <i class='fa fa-user' aria-hidden='true'></i>
                    </li>
                </Link>
                <Link to='/my-movies'>
                    <li>
                        <i class='fa fa-desktop' aria-hidden='true'></i>
                    </li>
                </Link>
                <Link to='/my-movies'>
                    <li>
                        <i class='fa fa-home' aria-hidden='true'></i>
                    </li>
                </Link>
                <Link to='/my-movies'>
                    <li>
                        <i class='fa fa-folder-open' aria-hidden='true'></i>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
