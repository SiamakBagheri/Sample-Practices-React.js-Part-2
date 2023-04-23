import { Component } from "react";
import "./style.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogged: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.email.length !== 0 && this.state.password.length !== 0) {
      alert("شما با موفقیت وارد شدید");
      this.setState({
        isLogged: true,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <form className="center" onSubmit={this.handleClick}>
          <h2>Please SignIn</h2>

          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.handleEmailChange(e)}
            placeholder="email"
          />
          { this.state.isLogged && this.state.email.length <= 1 && <span>ایمیل خود را وارد کنید</span>}

          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.handlePasswordChange(e)}
            placeholder="password"
          />
          { this.state.isLogged && this.state.password.length <= 1 && (
            <span>رمز خود را وارد کنید</span>
          )}
          <h2>&nbsp;</h2>

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
