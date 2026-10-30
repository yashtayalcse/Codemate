import { useRef } from "react";
import createRoomId from "../../controllers/createRoomId.controller";

export default function HomePage() {
  const displayRef = useRef();
  const inputRef = useRef();
  return (
    <div className="flex flex-col gap-10">
    <h1 className="flex justify-center align-middle text-5xl mb-8">CodeMate</h1>

    <div className="flex gap-4 min-w-3">
      <button onClick={createRoomId} className="border-1">Create room id</button>
      <div ref={displayRef} className="border-1 min-w-10"></div>
    </div>

    <div className="flex gap-4">
      <button onClick={()=>{}} className="border-1">Join room</button>
      <input type="text" name="roomCode" ref={inputRef} className=" border-2 border-amber-100"/>
    </div>
    
    <div>

    </div>
    </div>
  )
}