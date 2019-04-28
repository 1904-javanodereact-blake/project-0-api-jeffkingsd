import React from 'react';
import freddylogo from '../../assets/freddylogo.png';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { login } from '../../actions/auth.actions';
import { RouteComponentProps } from 'react-router';

interface ISignInState {
    username: string;
    password: string;
}
interface ISignInProps extends RouteComponentProps<{}>{
    auth: IAuthState
    login: (username: string, password: string, history: any) => void
}

export class SignInComponent extends React.Component<ISignInProps, ISignInState> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    //When the button get pressed.
    submit = async (event) => {
        event.preventDefault();
        console.log('Trying to log in');
       this.props.login(this.state.username, this.state.password, this.props.history);
    }

    //Updating UserName
    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    //Updating passwordsa
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        const { username, password }= this.state;
        const errorMessage  = this.props.auth.errorMessage;
        return (
            <div className="model-dialog text-center">
            <div className="col-sm-9 main-section">
                <div className="model-content">
                    <div className="col-12 user-img">
                        <img src={freddylogo} alt="Freddy FazBear"/>
                        <p className="col-sm-12 logtitle"> Freddy Fazbear Pizzeria</p>
                    </div>
                    <div className="col-12 form-input">
                        <form className="form-signin" onSubmit={this.submit}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter Username"
                                required value={username} 
                                onChange={this.updateUsername}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Enter Password"
                                required value={password} 
                                onChange={this.updatePassword}/>
                            </div>
                            <button type="submit" 
                            className="btn btn-login">
                            Login
                            </button>
                            <p id="login-error">{errorMessage}</p>
                        </form>
                    </div>

                    <div className="col-12 forgot">
                        Forgot Password?
                    </div>

                </div>
            </div>
            <footer>
            <p> Licensed by Jeffrey King. Free of use. Not Commerical Product</p>
            </footer>   
        </div>
                )
            }    
}
const mapStateToProps = (state: IState) => {
    return  {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = {
    login: login
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);