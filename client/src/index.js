import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider }from 'react-redux'
import store from './store'
import {
    LocaleProvider
} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import NavTop from './component/NavTop'
import NavBottom from './component/NavBottom'

import Home from './routes/Home'
import Mycourse from './routes/Mycourse'
import Person from './routes/Person'

import'./static/css/reset.css'
import './static/css/common.less'

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <>
                <NavTop />
                <main className='container'>
                    <Switch>
                        <Route path='/course'  component={Home}/>
                        <Route path='/mycourse' component={Mycourse}/>
                        <Route path='/person' component={Person}/>
                        <Redirect  to='/course'/>
                    </Switch>
                </main>
                <NavBottom />
            </>
        </LocaleProvider>
    </HashRouter>
</Provider>
, document.getElementById('root'));



