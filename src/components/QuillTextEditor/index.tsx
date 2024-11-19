import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState<string>(""); // State for content
  const editorRef = useRef<HTMLDivElement | null>(null); // Ref for the ReactQuill editor

  const handleChange = (content: string) => {
    setEditorContent(content);
    adjustHeight();
  };

  // Adjust the editor height based on its content
  const adjustHeight = () => {
    if (editorRef.current) {
      const scrollHeight = editorRef.current.scrollHeight;
      editorRef.current.style.height = `${scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height on initial load
  }, [editorContent]);

  return (
    <div>
      <div ref={editorRef} style={{ overflow: "hidden", transition: "height 0.2s", minHeight: "350px"}}>
        <ReactQuill
          value={editorContent}
          onChange={handleChange}
          theme="snow"
          placeholder="Start writing here..."

        />
      </div>

    </div>
  );
};

export default TextEditor;
