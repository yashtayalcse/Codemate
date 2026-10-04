import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import Editor from './components/editor/Editor.jsx'

export default function App(){
  return (
    <>
      <header className="">
        <Show when="signed-out">
          <SignInButton className="border-2 p-1 m-4"/>
        </Show>
        <Show when="signed-in">
          <div className="flex justify-end my-2"><UserButton /></div>
          <Editor/>
        </Show>
      </header>
    </>
  )
}