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
import Action from './Action'
import HomeLayout from './HomeLayout'
import Schedule from './Schedule'
import MemoryTest from './MemoryTest'
import CareTakerDashboard from './CareTakerDashboard';


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
            <Route
              path='/action'
              element={<Action/>}
            />
            <Route
              path='/actionguardian'
              element={<Action isGuardian={true}/>}
            />
            <Route
              path='/homelayout'
              element={<HomeLayout/>}
            />
            <Route
              path='/homelayoutguardian'
              element={<HomeLayout isGuardian={true}/>}
            />

            <Route
              path='/schedule'
              element={<Schedule/>}
            />
             <Route
              path='/memorytest'
              element={<MemoryTest/>}
            />

            <Route
              path='/caretaker'
              element={<CareTakerDashboard />}
            />
            
        </Routes>
    </div>
  )
}

export default Base