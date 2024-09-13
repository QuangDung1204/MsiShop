import React from 'react'
import { Route, Routes } from 'react-router-dom'
import defaultLayout from './layouts/defaultLayout'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={defaultLayout}>

                </Route>
            </Routes>
        </div>
    )
}

export default App
