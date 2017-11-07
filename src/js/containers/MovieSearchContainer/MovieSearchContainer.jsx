import React from "react";
import SearchFormComponent from "./SearchFormComponent";
import ResultsList from "./ResultsList";
import { connect } from "react-redux";
import Slider from "react-slick";
import NextArrow from "./NextArrowComponent";
import PreviousArrow from "./PreviousArrowComponent";

class MovieSearchContainer extends React.Component {
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
      prevArrow: <PreviousArrow />
    };

    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <h3> I'm in the mood to watch... </h3>
        </div>
        <div className="row" id="search-row" style={{ margin: "2em" }}>
          <SearchFormComponent />
        </div>

        <div className="container" id="result-contatiner">
          {/* <div className="row">
            <div className="col-md-12">
              {this.props.store.movies.map(movie => (
                <ResultsList
                  movieTitle={movie.Title}
                  releaseYear={movie.Year}
                  imgSrc={movie.Poster}
                  movieID={movie.imdbID}
                  key={movie.imdbID}
                />
              ))}
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12">
              { this.props.store.movies.length != 0 &&
              <Slider {...settings} id="slider">
                {this.props.store.movies.map((movie, index) => {
                  return <div data-index={index}><ResultsList
                    movieTitle={movie.Title}
                    releaseYear={movie.Year}
                    imgSrc={movie.Poster}
                    movieID={movie.imdbID}
                    key={movie.imdbID}
                  />
                  </div>
                })}
              </Slider>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.searchInfo
  };
}

export default connect(mapStateToProps)(MovieSearchContainer);
