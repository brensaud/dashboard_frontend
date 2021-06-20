import React, { Component} from 'react'
import Wrapper from "../Wrapper";
import axios from 'axios';
import {User} from "../../classes/User";


export default class Users extends Component {

    state = {
        users: []
    }


    componentDidMount = async () => {
        const response = await axios.get('users',{})

        console.log(response.data.data);
        this.setState({
            users: response.data.data
        });
    }

    render() {
        return (
            <Wrapper>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.users.map(
                        
                        (user: User) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>user.email</td>
                                <td>Empty</td>
                                <td>Empty</td>
                            </tr>
                        )
                    )}

                </tbody>
              </table>
            </div>
          </Wrapper>
        )
    }
}