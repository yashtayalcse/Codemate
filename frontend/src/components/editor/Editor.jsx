import { createEditorState, createEditorView } from "./editor.js";
import { useEffect, useRef } from "react";

export default function Editor(){
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const initialState = createEditorState("\n\n\n\n\n\n\n\n\n");
      const view = createEditorView(initialState, editorRef.current);
    }
  }, []);

  return (
    <div ref={editorRef}
    className="w-full max-w-2xl h-[500px] border border-neutral-700 rounded-md overflow-hidden"></div>
  );
}
