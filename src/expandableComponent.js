import React, { useRef, useState } from 'react'

function ExpandableComponent(props) {
    const { children, title, } = props;
    const divRef = useRef(null);
    const [display, setDisplay] = useState(false);
    const handleExpandable = () => {
        setDisplay(!display)
    }

    const copyToClipboard = () => {
// Get the innerText of the <div> element
const textToCopy = divRef.current.innerText;

// Create a temporary textarea element to copy the text to the clipboard
const textarea = document.createElement('textarea');
textarea.value = textToCopy;

// Append the textarea to the document
document.body.appendChild(textarea);

// Select the text in the textarea
textarea.select();

// Copy the selected text to the clipboard
document.execCommand('copy');

// Remove the temporary textarea
document.body.removeChild(textarea);
      };
      

  return (
      <div className="expandable">
          <div className='flex  border-none color'>
              <div>{title}</div>
              <div className='flex'>
                {display && 
                <button onClick={copyToClipboard}  className='cursor-pointer p-3'>&#x2398; Copy </button>
                }
              
              <div className="expandable-header float-right" onClick={handleExpandable}>
                  {display ? <span> &uarr;</span> : <span>&darr;</span>}  Click to expand</div>
              </div>
          </div>
          <div ref={divRef} className="expandable-content" style={{display:`${display ? "block": "none"}` }}>
              {children}
          </div>
      </div>
  )
}

export default ExpandableComponent