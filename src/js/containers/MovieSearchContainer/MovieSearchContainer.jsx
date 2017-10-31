import React from "react";
import SearchFormComponent from "./SearchFormComponent";
import ResultsList from "./ResultsList";
import { connect } from "react-redux";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h3> Search for Movies </h3>
          <SearchFormComponent />
        </header>
        <div className="container">
          {this.props.store.movies.map(movie => (
            <ResultsList
              movieTitle={movie.Title}
              releaseYear={movie.Year}
              imgSrc={movie.Poster}
              movieID={movie.imdbID}
            />
          ))}
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
