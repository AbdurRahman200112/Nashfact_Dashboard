import React, { useRef, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sortable from 'sortablejs';
import './TextEditor.css';

// Custom Quill format for rows and columns
const Block = Quill.import('blots/block');
class RowBlot extends Block {
  static create(columns: number) {
    const node = super.create();
    node.setAttribute('class', `row grid grid-cols-${columns} gap-4 border border-gray-400 p-4 rounded my-4`);
    node.setAttribute('data-columns', `${columns}`);
    return node;
  }

  static formats(node: HTMLElement) {
    return node.getAttribute('data-columns');
  }
}

RowBlot.blotName = 'row';
RowBlot.tagName = 'div';
Quill.register(RowBlot);

const TextEditor: React.FC = () => {
  const quillRef = useRef<ReactQuill | null>(null);

  const initializeSortable = () => {
    const editor = quillRef.current?.getEditor();
    const root = editor?.root;

    if (root) {
      const rows = root.querySelectorAll('.row');
      rows.forEach((row) => {
        if (!row.classList.contains('sortable-initialized')) {
          Sortable.create(row, {
            animation: 150,
            group: 'shared',
            ghostClass: 'sortable-ghost',
          });
          row.classList.add('sortable-initialized');
        }
      });
    }
  };

  const addRowWithColumns = (columns: number) => {
    const editor = quillRef.current?.getEditor();
    const range = editor?.getSelection();
    if (editor && range) {
      const rowHtml = `
        <div class="row grid grid-cols-${columns} gap-4 border border-gray-400 p-4 rounded my-4" data-columns="${columns}">
          ${Array(columns)
            .fill('')
            .map(
              () =>
                `<div class="column border border-dashed border-gray-400 p-2 bg-gray-50 min-h-[50px]" contenteditable="true"></div>`
            )
            .join('')}
        </div>
      `;
      editor.clipboard.dangerouslyPasteHTML(range.index, rowHtml);
      setTimeout(initializeSortable, 100); // Ensure SortableJS initializes after DOM updates
    }
  };

  const addCustomToolbarOption = () => {
    const toolbar = document.querySelector('.ql-toolbar');
    if (toolbar && !toolbar.querySelector('.ql-row')) {
      const dropdown = document.createElement('select');
      dropdown.className = 'ql-row border border-gray-300 rounded px-2';
      dropdown.innerHTML = `
        <option value="">Add Row</option>
        <option value="1">1 Column</option>
        <option value="2">2 Columns</option>
        <option value="3">3 Columns</option>
      `;
      dropdown.addEventListener('change', (e: any) => {
        const value = e.target.value;
        if (value) {
          addRowWithColumns(parseInt(value, 10));
          e.target.value = ''; // Reset dropdown selection
        }
      });
      toolbar.appendChild(dropdown);
    }
  };

  useEffect(() => {
    addCustomToolbarOption();
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ font: [] }, { size: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
        ['clean'],
      ],
    },
  };

  const formats = [
    'font',
    'size',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'color',
    'background',
    'row',
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <ReactQuill
        ref={quillRef}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Start writing here..."
        onChange={() => initializeSortable()} // Reinitialize draggable elements on change
      />
    </div>
  );
};

export default TextEditor;
