import React from "react";
import { connect } from "react-redux";
import * as actions from '../../actions';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props;
    dispatch(actions.getMovieDetails(e.target.value));
  }

  render() {
    return (
      <div className="row movie-result-item" style={{ margin: "2em" }}>
        <div className="col-md-12">
          <div>
            <img src={this.props.imgSrc} alt="" />
            <h4>{this.props.movieTitle}</h4>
            <p>{this.props.releaseYear}</p>
            {/* <a href={ '#/movie/' + this.props.movieID }> */}
            <button className="btn btn-primary" value={ this.props.movieID } onClick={ this.handleClick }>
              This looks interesting...
            </button>
            {/* </a> */}
          </div>
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
export default connect(mapStateToProps)(ResultsList);
