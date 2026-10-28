import { createEditorState, createEditorView } from "./editor.js";
import { useEffect, useRef } from "react";

export default function Editor(){
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const initialState = createEditorState("hello world"); //used to create intitial doc text and configurations
      const view = createEditorView(initialState, editorRef.current);
      const transaction = view.state.update(
        {
          changes: { from: 0, to: view.state.doc.length, insert: "hello world" },
          selection: { anchor: 0, head:1 } // Set cursor position at the start of the document
        }
      );
      view.dispatch(transaction);
      console.log(view.state.selection);
    }
  }, []);

  return (
    <div ref={editorRef}
    className="w-full max-w-2xl h-[500px] border border-neutral-700 rounded-md overflow-hidden"></div>
  );
}
