import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Result from "./ResultsList";

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Slider {...settings} id="slider">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        {this.props.store.movies.map(movie => (
          <div>
                <ResultsList
                  movieTitle={movie.Title}
                  releaseYear={movie.Year}
                  imgSrc={movie.Poster}
                  movieID={movie.imdbID}
                  key={movie.imdbID}
                />
                </div>
              ))}

      </Slider>
    );
  }
}

export default SliderComponent;
