import React, { Component, Fragment } from "react"
import "./Register.scss"
import Button from "../../../components/atoms/Button"
import { connect } from "react-redux"
import { registerUserAPI } from "../../../config/redux/action"

class Register extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleRegisterSubmit = async () => {
    const { email, password } = this.state
    const { history } = this.props
    const res = await this.props
      .registerAPI({ email: email, password: password })
      .catch(err => err)
    if (res) {
      this.setState({
        email: "",
        password: ""
      })
      history.push("./login")
    } else {
      alert("Gagal Register")
    }
  }
  render() {
    return (
      <Fragment>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Register Page</p>
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
              onClick={this.handleRegisterSubmit}
              title="Register"
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
  registerAPI: data => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register)
