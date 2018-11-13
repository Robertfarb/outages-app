import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  createUser: user => dispatch(createUser(user))
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;