import React from 'react'

function ApiListCreator({ dataKeyArray }) {
  return (
    <div>
       
      {dataKeyArray.map((item, indx) => {

       return <div key={indx}> 
            { `{"${item}": {
                "is_required" : false,
                "is_readonly" : false,
                "mapping_type": "yesno_check",
                "type_of" : "string"
            }},`}
           
        </div>
      })}
    </div>
  )
}

export default ApiListCreator
