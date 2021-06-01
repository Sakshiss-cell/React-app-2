import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import PostDetails from './PostDetails';
import Profile from './Profile';



const Routing=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/postDetails" component={PostDetails}/>
            <hr/>
            <Footer/>
       </BrowserRouter>
        
    )
}

export default  Routing;