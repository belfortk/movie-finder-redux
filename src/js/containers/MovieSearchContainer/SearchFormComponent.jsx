import React from "react";
import { connect } from "react-redux";
import * as actions from '../../actions.js'

class SearchFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchParam: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault()
    const { dispatch } = this.props;
    dispatch(actions.getMovieSearchResults(this.state.searchParam));
  }

  render() {
    return (
      <form className="form-inline" onSubmit={ this.handleSubmit }>
        <input type="text" className="form-control " placeholder="Search movies by title" onChange={ this.handleChange } />
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.searchInfo
  };
}

export default connect(mapStateToProps)(SearchFormComponent);
