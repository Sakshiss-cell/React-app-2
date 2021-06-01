import React from 'react-dom';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';

const Header=()=>{
    return(
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Developer funnel</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><Link to ='/'>Home</Link></li>
                        <li><Link to ='/post'>Post</Link></li>
                        <li><Link to ='/profile'>Profile</Link></li>
                        <li><Link to ='/postDetails'>PostDetails</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to ='/'><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to ='/'><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;