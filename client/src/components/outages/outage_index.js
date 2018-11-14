import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestAllOutages } from '../../actions/outage_actions';

class OutageIndex extends Component {
  componentDidMount() {
    this.props.requestAllOutages();
  }
  render() {
    return (
      <div>
        <h1>Outage Index</h1>
      </div>
    )
  }
}

// OutageIndex.propTypes = {
  
// }

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  outages: state.outages
});
export default connect(null /*mstp*/, { requestAllOutages })(OutageIndex);
