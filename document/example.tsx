import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router,Route, Link } from 'react-router-dom';


import IconExample from '../lib/icon/icon.example' ;
import ButtonExample from '../lib/button/button.example' ;
import './example.scss';

ReactDom.render(
    <Router>
        <header className='logo'>
            Wron
        </header>
        <div>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>
                        <Link to='/icon'>Icon</Link>
                    </li>
                    <li>
                        <Link to='/button'>Button</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Route path='/icon' component={IconExample}></Route>
                <Route path='/button' component={ButtonExample}></Route>
            </main>
        </div>
    </Router>
    , document.getElementById('root'));