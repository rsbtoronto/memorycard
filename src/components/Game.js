import React from "react";
import MemoryCards from "./MemoryCards";
import '../css/Game.css';
import NavBar from "./NavBar";


class Game extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
   BeginGame: true,
    turns: 0,
    score: 0,
  };
  this.checkIfClicked = this.checkIfClicked.bind(this);           

}
images = [];
turn = 0;

checkIfClicked= (e)=> {        
      // set the state and increment the counter
       
      this.turn = this.turn + 1; 
    //this.setState({turns: this.turn});
    
      let image = e.target;      
     
      if (image.getAttribute("check") === "match") {        
        return;
      }      
      
      if (image !== this.images[0]) {
        this.switch(image);
       this.images.push(image);       
      } 
      else {        
        this.switch(image);
        this.images = [];        
      }
  
      if (this.images.length === 2) {        
        if (!this.checkName(this.images[0], this.images[1])) {
          setTimeout(() => {
          this.switch(this.images[0]);
          this.switch(this.images[1]);
          this.images.shift();
          this.images.shift();
          console.log("not eqaul", this.images);
        }, 1200);        
      } else { this.images = [];}
      } 
    };
    
    /* Reset for New Game */
    reset(){    
     console.log("reset")
      let reset = document.getElementsByClassName("card");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("card-blank");
        reset[i].setAttribute("check", "false");                     
    }
    };

    checkName = (image1, image2) => {
      if (image1.getAttribute("id") === image2.getAttribute("id")) {
        image1.setAttribute("check", "match");
        image2.setAttribute("check", "match");        
        return true;
      }
      return false;
    };
  
    switch = (target) => {
      if (target.getAttribute("check") === "true") {
        target.setAttribute("check", "false");
        target.classList.add("card-blank");
      } else {
        console.log("switch else");
        target.setAttribute("check", "true");
        target.classList.remove("card-blank");
      }
    };
    
  render() {
    const { turns, score} = this.state;
    
    return (
      <div className="game">        
       { /*<NavBar turns={turns} score={score} /> */}
        <div className="cards"><MemoryCards checkIfClicked={this.checkIfClicked}  /></div>      
        <div className="button-group">
               <button  type="submit" className="btn btn-primary" onClick={this.reset}>New Game</button> 
           </div>
      </div>
    );
  }
}

export default Game;