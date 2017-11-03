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
        <div className='jumbotron' style = { { textAlign: 'center'}}>
          <h3> I'm in the mood to watch... </h3>
          </div>
          <div className='row' id='search-row' style = { { margin: '2em' } }>

          <SearchFormComponent />

          </div>

        <div className="container" id='result-contatiner'>
          <div className='row'>
          <div className='col-md-12'>
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
