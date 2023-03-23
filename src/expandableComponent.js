import React, { useState } from 'react'

function ExpandableComponent(props) {
    const { children, title } = props;
    const [display, setDisplay] = useState(false);
    const handleExpandable = () => {
        setDisplay(!display)
    }
  return (
      <div className="expandable">
          <div className='flex  border-none color'>
              <div>{title}</div>
              <div className="expandable-header float-right" onClick={handleExpandable}>
                  {display ? <span> &uarr;</span> : <span>&darr;</span>}  Click to expand</div>
          </div>
          <div className="expandable-content" style={{display:`${display ? "block": "none"}` }}>
              {children}
          </div>
      </div>
  )
}

export default ExpandableComponent