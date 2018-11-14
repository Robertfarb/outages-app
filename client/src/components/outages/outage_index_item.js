import React from 'react'

export default ( props ) => {
  return (
    <div className="card">
      <div className="card-header">
        Outage Number: {props.outageNum}
      </div>
      <div className="card-body">
        <h4 className="card-title">Outage Type: {props.outageType}</h4>
        <p className="card-text">Outage City: {props.locationCity}</p>
        <button href="#" className="btn btn-primary" onClick={() => console.log("Clicked!")}>See Details</button>
      </div>
    </div>
  )
}
