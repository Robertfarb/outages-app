import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestSingleOutage } from '../../actions/outage_actions';

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
      return <div className="card text-center">
          <div className="card-header">
            Outage Type: {outage.outageType}
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Outage City: {outage.locationCity}
            </h4>
            <p className="card-text">Outage Address: {outage.address}</p>
            <p className="card-text">Outage Zip Code: {outage.zipCode}</p>
            <p className="card-text">Outage Type: {outage.outageType}</p>
            <p className="card-text">Reason: {outage.reason}</p>
            <p className="card-text">Start Time: {outage.startTime}</p>
            <h2>Updates:</h2>{updates.map((update, idx) => (
              <div className="m-4 card" key={idx}>
                <h3>Update {idx + 1}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Est. Restoration Time:</strong>{" "}
                    {update.estimatedRestTime}
                  </li>
                  <li className="list-group-item">
                    <strong>Crew Arrival Time:</strong>{" "}
                    {update.crewArrivalTime}
                  </li>
                  <li className="list-group-item">
                    <strong>Delay Reason:</strong> {update.delayReason}
                  </li>
                  <li className="list-group-item">
                    <strong>Complete Restoration Time:</strong> {update.completeRestTime}
                  </li>
                </ul>
              </div>
            ))}
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
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

export default connect(mapStateToProps, { requestSingleOutage })(OutageDetailCard);
