import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                });
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('Login Success')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.handleLogin();
        }
    }

    render() {
        return (

            <>
                <HomeHeader />
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-login'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <label>Username:</label>
                                <input type='text'
                                    className='form-control'
                                    placeholder='Enter your username'
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                                />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password:</label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isShowPassword ? 'text' : 'password'}
                                        className='form-control'
                                        placeholder='Enter your password'
                                        onChange={(event) => { this.handleOnChangePassword(event) }}
                                        onKeyDown={(event) => this.handleKeyDown(event)}
                                    />
                                    <span
                                        onClick={() => { this.handleShowHidePassword() }}
                                    >
                                        <i className={this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-12" style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className='col-12'>
                                <button className='btn-login'
                                    onClick={() => { this.handleLogin() }}
                                >
                                    Login
                                </button>
                            </div>
                            <div className='col-12'>
                                <span className='forgot-password'>Forgot your password</span>
                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span className='text-other-login'>Or login with</span>
                            </div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
