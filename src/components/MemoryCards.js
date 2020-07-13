import React   from 'react';
import {Cards} from './Cards';
import '../css/MemoryCards.css';

    const MemoryCards = props => (     
             
              
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
                  onClick={(e) => props.checkIfClicked(e)}                 
                />
              );
            })}                             
           
        </div>         
      );

  export default MemoryCards;