import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import Editor from './components/editor/Editor.jsx'
import HomePage from './components/homePage/HomePage.jsx'
import { Route, Routes } from 'react-router'
import Meeting from './components/meeting/Meeting.jsx'

export default function App(){
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<SignUpButton/>}></Route>
          <Route path="/room/:roomId" element={<Meeting/>}></Route>
      </Routes>
    </>
  )
}