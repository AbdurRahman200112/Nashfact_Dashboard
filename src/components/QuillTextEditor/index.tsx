import React, { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the snow theme for Quill

const TextEditor = () => {
  const quillRef = useRef<ReactQuill | null>(null); // Explicitly type the ref

  // Custom handler for uploading images
  const handleImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        // Convert the file to a data URL and insert into the editor
        reader.onload = () => {
          const imageUrl = reader.result as string; // Data URL of the image
          const range = quillRef.current?.getEditor().getSelection();

          if (range) {
            quillRef.current?.getEditor().insertEmbed(range.index, 'image', imageUrl);
          }
        };

        reader.readAsDataURL(file); // Convert the file to a data URL
      } else {
        console.error('No file selected');
      }
    };
  };

  // Quill modules configuration
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'], // Include image option
        [
          { label: '2 Columns', action: () => applyColumns(2) },
          { label: '3 Columns', action: () => applyColumns(3) },
        ],
      ],
    },
  };
  
  function applyColumns(columns: number) {
    const editor = quillRef.current?.getEditor(); // Safely access getEditor
    const range = editor?.getSelection(); // Safely access getSelection
    if (editor && range) {
      editor.format('class', `columns-${columns}`);
    }
  }

  // Quill formats configuration
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Start writing here..."
      />
    </div>
  );
};

export default TextEditor;