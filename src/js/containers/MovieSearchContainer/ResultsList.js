import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../actions";

class ResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props;
    const movieId = e.target.value;
    dispatch(actions.getMovieDetails(movieId));
    this.props.history.push(`/movie/${movieId}`);
  }

  render() {
    return (
      <div className="movie-result-item" style={{ margin: "2em" }}>
        <div className="movie-result">
          <img src={this.props.imgSrc} alt={this.props.movieTitle + "poster image"} style={{ marginBottom: "1em" }} />
          <h4>{this.props.movieTitle}</h4>
          <p>{this.props.releaseYear}</p>
          {/* <a href={ '#/movie/' + this.props.movieID }> */}
          <button className="btn btn-primary" value={this.props.movieID} onClick={this.handleClick}>
            This looks interesting...
          </button>
          {/* </a> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.detailsInfo
  };
}
export default connect(mapStateToProps)(withRouter(ResultsList));
