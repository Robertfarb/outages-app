import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestAllOutages } from '../../actions/outage_actions';
import OutageIndexItem from './outage_index_item';

class OutageDetailCard extends Component {

  componentDidMount() {
    // this.props.requestOutage(this.props.history.outageId);
    console.log(this.props.history)
  }

  render() {
    return (
      <div class="card text-center">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h4 class="card-title">Special title treatment</h4>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    )
  }
}

OutageIndex.propTypes = {
  // requestAllOutages: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
  // outages: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  outages: state.outages,
  outage: state.outage
});

export default connect(mapStateToProps, { requestOutage })(OutageDetailCard);
