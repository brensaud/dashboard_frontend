import React, { Component, SyntheticEvent } from 'react';

import { Redirect } from 'react-router-dom';


import "./Public.css";

import axios from 'axios';


class Login extends Component {

    email = '';

    password ='';

    state = {
        redirect: false
    }

    sumbitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('login',{
            email: this.email,
            password: this.password,
        })

        this.setState({
            redirect: true
        })

    }

    render() {

        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <form className="form-signin" onSubmit={this.sumbitHandler}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail"     
                    className="form-control" 
                    placeholder="Email address" required 
                    onChange={e => this.email = e.target.value}
                />


                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" required 
                    onChange={e => this.password = e.target.value}

                />


                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        );
    }
}

export default Login;
