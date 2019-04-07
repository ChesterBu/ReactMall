import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './person/Login'
import Register from './person/Register'
import Tip from './person/Tip'
import Info from './person/Info'
import { checkLogin } from '../api/person.js'

export default class Person extends Component {
  constructor(props, context) { 
    super(props, context)
    
    this.state = {
      isLogin:false
    }
  }
  
  // use static getDerivedStateFromProps(props, state)  !!!
  async componentWillMount() {
    let result = await checkLogin(),
      isLogin = parseFloat(result.code) === 0 ? true : false;
    this.setState({isLogin})  
  }
  
  render() {
    return (
      <section>
        <Switch>
          <Route
            path="/person/info"
            render={() => {
              if (this.state.isLogin) { 
                return <Info/>
              }
              return <Tip/>;
            }}
          />
          <Route path="/person/login" component={Login} />
          <Route path="/person/register" component={Register} />
          <Redirect from='/person' to='/person/info'/>
        </Switch>
      </section>
    );
  }
}
