// // components/RichTextEditor/RichTextEditor.tsx
// import React, { useState, useEffect } from 'react';
// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const RichTextEditor = () => {
//   const [editorState, setEditorState] = useState(() => {
//     const savedContent = localStorage.getItem('editorContent');
//     if (savedContent) {
//       const contentState = ContentState.createFromBlockArray(
//         htmlToDraft(savedContent).contentBlocks
//       );
//       return EditorState.createWithContent(contentState);
//     }
//     return EditorState.createEmpty();
//   });

//   // Convert editor content to HTML
//   const getHtmlContent = () => {
//     return draftToHtml(convertToRaw(editorState.getCurrentContent()));
//   };

//   // Save editor content to localStorage
//   useEffect(() => {
//     const htmlContent = getHtmlContent();
//     localStorage.setItem('editorContent', htmlContent);
//   }, [editorState]);

//   return (
//     <div>
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={setEditorState}
//         toolbar={{
//           options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'image'],
//           inline: { options: ['bold', 'italic', 'underline'] },
//           list: { inDropdown: true },
//           textAlign: { inDropdown: true },
//           link: { inDropdown: true },
//           history: { inDropdown: true },
//         }}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//       />
//       {/* Preview HTML output */}
//       <div>
//         <h3>HTML Output:</h3>
//         <pre>{getHtmlContent()}</pre>
//       </div>
//     </div>
//   );
// };

// export default RichTextEditor;



// components/RichTextEditor/RichTextEditor.tsx
import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(() => {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            const contentState = ContentState.createFromBlockArray(
                htmlToDraft(savedContent).contentBlocks
            );
            return EditorState.createWithContent(contentState);
        }
        return EditorState.createEmpty();
    });

    // Convert editor content to HTML
    const getHtmlContent = () => {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    };

    // Save editor content to localStorage
    useEffect(() => {
        const htmlContent = getHtmlContent();
        localStorage.setItem('editorContent', htmlContent);
    }, [editorState]);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbar={{
                    options: ['inline'], // Only keep inline formatting options
                    inline: { options: ['bold', 'italic', 'underline'] },
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />

            {/* Preview HTML output */}
            <div style={{ marginTop: '20px' }}>
                <h3>HTML Output:</h3>
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {getHtmlContent()}
                </pre>
            </div>
        </div>
    );
};

export default RichTextEditor;
