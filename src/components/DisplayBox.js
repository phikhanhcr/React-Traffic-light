import React, { Component } from 'react';
import classNames from 'classnames';

class DisplayBox extends Component {
  render() {
    const { display } = this.props;
    const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit animi sapiente nesciunt, odio, minimatotam aspernatur eum quas ratione ea corrupti vel accusantium tenetur nobis temporibus aut cupiditate quidem
    deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, blanditiis ut suscipit minima nihil
    enim vero velit voluptatem repellendus nobis necessitatibus eaque non placeat sequi, animi rem. Vero, debitis
    amet?
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit animi sapiente nesciunt, odio, minima
    totam aspernatur eum quas ratione ea corrupti vel accusantium tenetur nobis temporibus aut cupiditate quidem
    deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, blanditiis ut suscipit minima nihil
    enim vero velit voluptatem repellendus nobis necessitatibus eaque non placeat sequi, animi rem. Vero, debitis
    amet?`;
    let className = "Box"    
    if(display == true ) {
      className = classNames(className , 'display')
    }
    return (
      <div className={className}>
        <div className="wrapper">
          <a href="#" className="first">
            X
          </a>
          <p>{text}</p>
          <div className="btn">
            <a href="#" className="Accept">
              Accept
            </a>
            <a href="#" className="Decline">
              Decline
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayBox;