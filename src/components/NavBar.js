import React from 'react';
import '../css/NavBar.css';


class NavBar extends React.Component{
    render(){
        const { turns, score } = this.props;
        
        return(
             <div className="navbar">
                <div className="turns">Turns: {turns}</div>
                <div className="score">Score: {score}</div>
              </div>       
    );
}
}

export default NavBar;