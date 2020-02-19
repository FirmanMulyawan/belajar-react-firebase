import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import Button from "../../../components/atoms/Button"
import { loginUserAPI } from "../../../config/redux/action"

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleLoginSubmit = async () => {
    const { email, password } = this.state
    const { history } = this.props
    const res = await this.props
      .loginUserAPI({ email: email, password: password })
      .catch(err => err)
    if (res) {
      console.log("login sukses", res)
      //lokalstorage {bentuk object}
      localStorage.setItem("userData", JSON.stringify(res))
      this.setState({
        email: "",
        password: ""
      })
      history.push("./")
    } else {
      console.log("login field")
    }
  }

  render() {
    return (
      <Fragment>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Login Page</p>
            <input
              className="input"
              id="email"
              placeholder="Email"
              type="text"
              onChange={this.handleChangeText}
              value={this.state.email}
            />
            <input
              className="input"
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChangeText}
              value={this.state.password}
            />
            <Button
              onClick={this.handleLoginSubmit}
              title="Login"
              loading={this.props.isLoading}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}
const reduxState = state => ({
  isLoading: state.isLoading
})

const reduxDispatch = dispatch => ({
  loginUserAPI: data => dispatch(loginUserAPI(data))
})
export default connect(reduxState, reduxDispatch)(Login)
