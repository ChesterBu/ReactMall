import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Dialog from './component/Dialog'
let a = () => <div>a</div>

//
ReactDOM.render(<HashRouter>
    <Switch> {/*匹配一个 */}
        < Route path='/' exact  component={Dialog} />
        {/* /a2 则不匹配  excat属性严格匹配 /a也会渲染上面的，加了exact就不会了 */}
        < Route path='/a' component={a} /> 
        < Redirect to = '/' />
    </Switch>    
</HashRouter>
, document.getElementById('root'));



