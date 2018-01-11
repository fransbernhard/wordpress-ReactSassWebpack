import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react'

class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      sliderData: [],
      sliderIndex: 0
    }
    this.plusSlides = this.plusSlides.bind(this)
    this.showSlides = this.showSlides.bind(this)
  }

  componentDidMount(){
    this.setState({
      sliderData: this.props.gallery
    })
  }

  plusSlides(n){
    const sliderData = this.state.sliderData
    let newSliderIndex = this.state.sliderIndex
    newSliderIndex += n

    if (newSliderIndex == -1) {
      newSliderIndex = 4
    } else if (newSliderIndex >= sliderData.length) {
      newSliderIndex = 0
    }

    this.showSlides(newSliderIndex)
  }

  showSlides(asd) {
    const sliderIndex = this.state.sliderIndex
    const data = this.state.sliderData
    const slides = document.getElementsByClassName("slide")

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[asd].style.display = "flex"

    this.setState({
      sliderIndex: asd
    })
  }

  // <img className="slide-img" src={data[this.state.sliderIndex].url} alt={data.title} />

  render(){
    const data = this.state.sliderData

    return(
      <div className="slider-container">
        { data.map((dat, i) =>
          <div className="slide fade" key={i}>
            <div className="slide-img" style={{backgroundImage: `url(${data[this.state.sliderIndex].url})`}}/>
            <div className="prev-next-container">
              <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Slider
