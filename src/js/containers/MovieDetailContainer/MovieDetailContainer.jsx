import React from "react";
import { connect } from "react-redux";

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Check Out This Cool Movie</h1>
        <a href="/">
          <button> Go Back </button>
        </a>
        <div className="row">
          <div className="col-md-6">
            <img src={this.props.store.movieDetails.Poster} />
          </div>
          <div className="col-md-6">
            <header>
              <h4>
                {" "}
                {this.props.store.movieDetails.Title} {"(" + this.props.store.movieDetails.Year + ")"}
              </h4>
              <h6>
                {" "}
                {"Rated: " + this.props.store.movieDetails.Rated} {"(" + this.props.store.movieDetails.Runtime + ")"}
              </h6>
              <h7> {this.props.store.movieDetails.Genre} </h7>
            </header>
            <p> Starring: {this.props.store.movieDetails.Actors} </p>
            <p> Plot: {this.props.store.movieDetails.Plot} </p>
            <br></br>
            <p> Metascore: {this.props.store.movieDetails.Metascore} </p>
            <p> IMDB Rating: {this.props.store.movieDetails.imdbRating} </p>
            <p> Language: {this.props.store.movieDetails.Language} </p>

          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(store) {
  return {
    store: store.detailsInfo
  };
}

export default connect(mapStateToProps)(MovieDetailContainer);
