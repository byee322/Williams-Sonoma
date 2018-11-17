import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class CarouselComp extends Component {

  render() {
    let links = [this.props.info.hero.href]
    this.props.info.images.map((i)=>{
      links.push(i.href)
    })

    return(
      <div onMouseLeave={this.props.onMouseLeave}>
        <Carousel width={this.props.info.hero.width + "px"} showThumbs={false} >
            {links.map((i)=>{
              return <div>
                <img src={i} />
            </div>
            })}
        </Carousel>
      </div>
    )
  }
}

