import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from './CarouselComp'

const StyledContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
`
const ContentHeader = styled.div`
  position: relative;
  padding: 14px;
  background-image: url(http://1x1px.me/NFFFFFF-0.7.png);
  font-size: 14px;
  z-index: 99;
  color: #5b5f5ffc;
  width: ${props => props.width - 20 + "px"};
`

const ContentPrice = styled.div`
  color: white;
  position: absolute;
  padding: 5px;
  background-image: url(http://1x1px.me/272422-0.8.png);
  font-size: 14px;
  z-index: 99;
  width: fit-content;
  margin-left: -140px;
  margin-top: 300px;
  font-weight: 600;

`

export default class ContentItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      hover: false
    }
  }

  showCarousel = () => {
    this.setState({hover: true})
  }

  hideCarousel = () => {
    this.setState({hover: false})
  }

  cleanName(str){
    return str.replace("TENCEL&#8482; ","").toUpperCase()
  }

  render() {
    const { info } = this.props
    let content

    if(this.state.hover){
      content = <Carousel info={info} onMouseLeave={this.hideCarousel} />
    }else{
      content = <StyledContentItem
        className={this.props.className} 
        width={info.hero.width} 
        height={info.hero.height} 
        onMouseEnter={this.showCarousel}
        onMouseLeave={this.hideCarousel}
      >

        <ContentHeader width={info.hero.width}>
          {this.cleanName(info.name)}
        </ContentHeader>

        <ContentPrice>
          {"$ " + info.priceRange.regular.high}
        </ContentPrice>

        <img 
          style={{position: 'absolute'}}
          src={info.hero.href} 
          width={info.hero.width} 
          height={info.hero.height} 
        />
      </StyledContentItem>
    } 
    return (
       content
    )
  }
}

