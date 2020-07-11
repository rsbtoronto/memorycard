import React from 'react';
import {Cards} from './Cards';
import '../css/MemoryCards.css';

class MemoryCards extends React.Component {
    images = [];
    handleClick = (e) => {      
      let image = e.target;
  
      if (image.getAttribute("check") === "match") {
        return;
      }
      console.log(image, this.images[0]);
  
      if (image !== this.images[0]) {
        this.switch(image);
        this.images.push(image);
      } else {
        this.switch(image);
        this.images = [];
      }
  
      if (this.images.length > 2) {
        if (!this.checkName(this.images[0], this.images[1])) {
          this.switch(this.images[0]);
          this.switch(this.images[1]);
          this.images.shift();
          this.images.shift();
        } else {
          this.images.shift();
          this.images.shift();
        }
      }
      let allPictures = document.getElementsByClassName("card-blank");
      if (allPictures.length < 1) { 
        console.log("allPictures.length", allPictures.length);
       // this.props.endGame(true);
        let reset = document.getElementsByClassName("card");
        for (let i = 0; i < reset.length; i++) {
          reset[i].classList.add("card-blank");
          reset[i].setAttribute("check", "false");
          this.images = [];
        }
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
      return (
        <div className="cards">
          {Cards
            .sort(() => Math.random() - 0.5)
            .map((element) => {
              return (
                <div
                  className="card card-blank"
                 key={Math.random()}
                  id={element.id}
                  style={{ background: `url(${element.pic})` }}
                  check="false"
                  onClick={this.handleClick}
                />
              );
            })}
        </div>
      );
    }
  }

  export default MemoryCards;