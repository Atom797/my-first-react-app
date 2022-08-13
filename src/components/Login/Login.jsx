import { reduxForm} from "redux-form"
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        {createField("Login", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {type:"password"})}
        {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "rememberMe")}
      {props.error && <div className={style.formSummaryError}>
        {props.error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth
})


export default connect(mapStateToProps, { login })(Login);