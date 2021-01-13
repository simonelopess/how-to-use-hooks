import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../data/DataContentex';
import Store from '../data/Store'


const App = props => {
    const [state, setState] = useState(data);

    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}> {/* provem o state e função */}
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App