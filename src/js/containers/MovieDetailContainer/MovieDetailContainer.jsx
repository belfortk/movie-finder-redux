import React from "react";
import { connect } from "react-redux";
import { Router, Link } from "react-router-dom";
import * as actions from '../../actions';
import axios from 'axios';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
        if( this.props.store.dataResolution === 'UNFETCHED'){
          const { dispatch } = this.props;
          dispatch(actions.getMovieDetails(this.props.match.params.id));
        }
      }

  render() {
    if (this.props.store.dataResolution !== 'FULFILLED') {
      return <h3> {this.props.store.dataResolution} </h3>;
    }

    return (
      <div>
        <div className='jumbotron'>
        <h3>Check out this cool movie! </h3>
        <Link to='/'>
          <button className="btn btn-danger" style={{float: 'right' }}> Nah, not interested </button>
        </Link>
        </div>

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
              <h6> {this.props.store.movieDetails.Genre} </h6>
            </header>
            <br></br>
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
