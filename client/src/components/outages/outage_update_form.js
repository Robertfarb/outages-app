import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';


class OutageUpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outageNum: '',
      estimatedRestTime: '',
      crewArrivalTime: '',
      delayReason: '',
      completeRestTime: '',
      errors: {}
    }
    this.update = this.update.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUpdate = {
      outageNum: this.state.outageNum,
      estimatedRestTime: this.state.estimatedRestTime,
      crewArrivalTime: this.state.crewArrivalTime,
      delayReason: this.state.delayReason,
      completeRestTime: this.state.completeRestTime
    }

    this.props.updateOutage(newUpdate, this.props.outage.outageNum);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { errors } = this.state;
    
    return (
      <div className="register p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <p className="lead text-center">Add Outage Outage Update</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Outage Num
                <input
                  type="text"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.outageNum
                  })}
                  placeholder="Outage Num"
                  name="outageNum"
                  value={this.props.outage.outageNum}
                  onChange={this.update('outageNum')}
                />
                </label>
                  {errors.outageNum && (<div className="invalid-feedback">{errors.outageNum}</div>)}
                </div>
                <div className="form-group">
                <label>Estimated Restoration Time
                  <input
                    type="date"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.estimatedRestTime
                    })}
                    placeholder="Estimated Restoration Time"
                    name="estimatedRestTime"
                    value={this.state.estimatedRestTime}
                    onChange={this.update('estimatedRestTime')}
                  />
                </label>
                {errors.estimatedRestTime && (<div className="invalid-feedback">{errors.estimatedRestTime}</div>)}
                </div>
                <div className="form-group">
                <label>Crew Arrival Time
                  <input
                    type="date"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.crewArrivalTime
                    })}
                    placeholder="Crew Arrival Time"
                    name="crewArrivalTime"
                    value={this.state.crewArrivalTime}
                    onChange={this.update('crewArrivalTime')}
                  />
                </label>
                  {errors.crewArrivalTime && (<div className="invalid-feedback">{errors.crewArrivalTime}</div>)}
                </div>
                <div className="form-group">
                <label>Delay Reason
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.delayReason
                    })}
                    placeholder="Delay Reason"
                    name="delayReason"
                    value={this.state.delayReason}
                    onChange={this.update('delayReason')}
                  />
                </label>
                  {errors.delayReason && (<div className="invalid-feedback">{errors.delayReason}</div>)}
                </div>
                <div className="form-group">
                <label>Complete Restoration Time
                  <input
                    type="date"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.completeRestTime
                    })}
                    placeholder="Complete Restoration Time"
                    name="completeRestTime"
                    value={this.state.completeRestTime}
                    onChange={this.update('completeRestTime')}
                  />
                </label>
                  {errors.completeRestTime && (<div className="invalid-feedback">{errors.completeRestTime}</div>)}
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OutageUpdateForm);
