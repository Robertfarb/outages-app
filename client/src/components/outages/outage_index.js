import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestAllOutages } from '../../actions/outage_actions';
import OutageIndexItem from './outage_index_item';

class OutageIndex extends Component {
  componentDidMount() {
    this.props.requestAllOutages();
    console.log(this.props.outages)
  }

  render() {
    const outages = this.props.outages === undefined ? [] : Object.values(this.props.outages);
    
    return (
      <div className="outage-index">
        <h1 className="text-center">Outages</h1>
        { 
          outages.map(outage => (
            <OutageIndexItem 
              outageNum={outage.outageNum}
              locationCity={outage.locationCity}
              outageType={outage.outageType}
            />
          ))}
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

export default connect(mapStateToProps, { requestAllOutages })(OutageIndex);
