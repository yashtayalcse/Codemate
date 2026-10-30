import Editor from "../editor/Editor.jsx";

export default function Meeting(){
  return (
    <div className="flex" >
      <div>
        <Editor/>
      </div>
      <div className="flex flex-col gap-5 p-5"> 
        <button className="border-1">HangUp</button>
        <button className="border-1">Voice</button>
      </div>
    </div>
  )
}