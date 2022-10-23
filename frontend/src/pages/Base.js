import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Forum from './Forum';
import Login from './Login';
import Register from './Register';
import Jigsaw from './Jigsaw';
import Puzzle from './Puzzle';
import UserDashboard from './UserDashboard';
import Caretakerregistration from './Caretakerregistration';
import Landing from './Landing';
import GuardianDashboard from './GuardianDashboard';


const Base = () => {
  return (
    <div>
        <Routes>

            <Route
              path='/'
              element={<Landing />}
            />

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

            <Route
              path="/user"
              element={<UserDashboard />}
            />

            <Route
              path='/caretakerregistration'
              element={<Caretakerregistration />}
            />

            <Route
              path='/guardian'
              element={<GuardianDashboard />}
            />
            
        </Routes>
    </div>
  )
}

export default Base