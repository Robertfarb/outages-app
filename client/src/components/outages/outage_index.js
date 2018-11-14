import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestAllOutages } from '../../actions/outage_actions';
import OutageIndexItem from './outage_index_item';

class OutageIndex extends Component {
  componentDidMount() {
    this.props.requestAllOutages();
  }

  render() {
    const outages = this.props.outages === undefined ? [] : Object.values(this.props.outages);
    
    return (
      <div className="outage-index">
        <h1 className="text-center">Outages</h1>
        { 
          outages.map((outage, idx) => (
            <OutageIndexItem
              key={idx}
              history={this.props.history}
              outageNum={outage.outageNum}
              locationCity={outage.locationCity}
              outageType={outage.outageType}
            />
          ))}
      </div>
    )
  }
}

OutageIndex.propTypes = {
  requestAllOutages: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  outages: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  outages: state.outages
});

export default connect(mapStateToProps, { requestAllOutages })(OutageIndex);
