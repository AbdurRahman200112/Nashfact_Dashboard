import React, { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the snow theme for Quill

const TextEditor = () => {
  const quillRef = useRef<ReactQuill | null>(null);

  // Custom handler to apply column styles
  const applyColumns = (columns: number) => {
    const editor = quillRef.current?.getEditor();
    const range = editor?.getSelection();
    if (editor && range) {
      editor.format('class', `columns-${columns}`);
    }
  };

  // Custom toolbar modules
  const modules = {
    toolbar: {
      container: [
        // Standard options
        [{ font: [] }, { size: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', { script: 'sub' }, { script: 'super' }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
        ['clean'],
        // Custom dropdown for columns
        [
          {
            label: 'Columns',
            children: [
              { label: '1 Column', action: () => applyColumns(1) },
              { label: '2 Columns', action: () => applyColumns(2) },
              { label: '3 Columns', action: () => applyColumns(3) },
            ],
          },
        ],
      ],
    },
  };

  // Formats configuration
  const formats = [
    'font',
    'size',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'script',
    'list',
    'bullet',
    'indent',
    'align',
    'link',
    'image',
    'video',
    'color',
    'background',
    'class',
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
