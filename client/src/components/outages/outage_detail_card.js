import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestSingleOutage, updateOutage } from '../../actions/outage_actions';
import moment from 'moment';
import OutageUpdateForm from './outage_update_form';

class OutageDetailCard extends Component {

  componentDidMount() {
    this.props.requestSingleOutage(this.props.outageId);
  }

  render() {
    const outage = this.props.outages[this.props.outageId] ? 
        this.props.outages[this.props.outageId] : {}

    const updates = outage.updates && outage.updates.length > 0 ?
      outage.updates : "There are currently no updates"

    if (this.props.outages[this.props.outageId] === undefined ) {
      return (
        <h1>LOADING...</h1>
      )
    } else {
      return <div className="card text-leftx">
          <div className="card-header">
            Outage Type: {outage.outageType}
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Outage City: {outage.locationCity}
            </h4>
          <p className="card-text"><strong>Outage Address:</strong> {outage.address}</p>
          <p className="card-text"><strong>Outage Zip Code:</strong> {outage.zipCode}</p>
          <p className="card-text"><strong>Outage Type:</strong> {outage.outageType}</p>
          <p className="card-text"><strong>Reason:</strong> {outage.reason}</p>
          <p className="card-text"><strong>Start Time:</strong> {outage.startTime}</p>
            <h2>Updates:</h2>{updates.map((update, idx) => (
              <div className="m-4 card text-left" key={idx}>
                <h3>Update {Math.abs(idx - updates.length)}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Est. Restoration Time:</strong>{" "}
                    {moment(update.estimatedRestTime).format("MMMM D, YYYY h:mm:ss a")}
                  </li>
                  <li className="list-group-item">
                    <strong>Crew Arrival Time:</strong>{" "}
                    {moment(update.crewArrivalTime).format("MMMM D, YYYY h:mm:ss a")}
                  </li>
                  <li className="list-group-item">
                    <strong>Delay Reason:</strong> 
                    {update.delayReason}
                  </li>
                  <li className="list-group-item">
                    <strong>Complete Restoration Time:</strong> 
                    {moment(update.completeRestTime).format("MMMM D, YYYY h:mm:ss a")}
                  </li>
                </ul>
              </div>
            ))}
            <OutageUpdateForm 
              outage={outage}
              updateOutage={this.props.updateOutage}
            />
          </div>
        <div className="card-footer text-muted">{moment(outage.startTime).format("MMMM D, YYYY")}</div>
        </div>;
    }
  }
}

OutageDetailCard.propTypes = {
  requestSingleOutage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  outages: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors: state.errors,
    outageId: ownProps.match.params.outageId,
    outages: state.outages
  }
};

export default connect(mapStateToProps, { requestSingleOutage, updateOutage })(OutageDetailCard);
