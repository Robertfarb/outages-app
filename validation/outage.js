const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOutageInput(data) {
  let errors = {};

  data.outageNum = !isEmpty(data.outageNum) ? data.outageNum : '';
  data.outageType = !isEmpty(data.outageType) ? data.outageType : '';
  data.locationCity = !isEmpty(data.locationCity) ? data.locationCity : '';
  data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.customersImpacted = !isEmpty(data.customersImpacted) ? data.customersImpacted : '';
  data.reason = !isEmpty(data.reason) ? data.reason : '';
  data.crewStatus = !isEmpty(data.crewStatus) ? data.crewStatus : '';

  if (Validator.isEmpty(data.outageNum)) {
    errors.outageNum = 'Outage Number is required';
  }

  if (Validator.isEmpty(data.outageType)) {
    errors.outageType = 'Outage Type is required';
  }

  if (Validator.isEmpty(data.locationCity)) {
    errors.locationCity = 'Location City field is required';
  }

  if (Validator.isEmpty(data.zipCode)) {
    errors.zipCode = 'Zip Code field is required';
  }

  if (Validator.isEmpty(data.customersImpacted)) {
    errors.customersImpacted = 'Customers Impacted field is required';
  }

  if (Validator.isEmpty(data.reason)) {
    errors.reason = 'Reason field is required';
  }

  if (Validator.isEmpty(data.crewStatus)) {
    errors.crewStatus = 'Crew Status field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};