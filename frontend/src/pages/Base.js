import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Forum from './Forum';
import Login from './Login';
import Register from './Register';
import Jigsaw from './Jigsaw';
import Puzzle from './Puzzle';


const Base = () => {
  return (
    <div>
        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/dashboard"
                element={<Dashboard />}
            />
            <Route
              path="/forum"
              element={<Forum />}
            />
            <Route
              path="/jigsaw"
              element={<Jigsaw />}
            />
            <Route 
              path="/puzzle"
              element={<Puzzle />}
            />
            

        </Routes>
    </div>
  )
}

export default Base