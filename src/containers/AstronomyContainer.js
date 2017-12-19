import React, { Component } from "react";
import { connect } from "react-redux";
import AstronomyCard from "../components/AstronomyCard";
import getData from "../actions/getData";

class AstronomyContainer extends Component {
  componentDidMount = () => {
    this.props.getData();
  };

  render() {
    return <AstronomyCard data={astronomy} />;
  }
}

const mapStateToProps = state => ({
  astronomy: state.astronomy
});

export default connect(mapStateToProps, { getData })(AstronomyContainer);
