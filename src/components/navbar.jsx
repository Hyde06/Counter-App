import React from 'react';
//Stateless Functional Component
const NavBar =  ({ totalCounters}) => {
    //console.log('NavBar-Rendered')
    return ( 
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        Navbar {" "} 
        <span className="badge badge-pill badge-secondary">
            {totalCounters} 
        </span>
        </a>
      </nav> 
      );
};



/*class NavBar extends Component {
    
    render() { 
        
    }
}*/
 
export default NavBar;