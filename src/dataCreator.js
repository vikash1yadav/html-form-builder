import React from "react";
import { useMyProvider } from "./data";
import "./dataCreator.css";

function DataCreator() {
  const {  handleAddQuestion, questionList,
    deleteQuestionFunction, serialNo, handleQuestionChange, question,  extraField,} = useMyProvider()
  
  return (
    <div className="border-grey p-30 mb-20">
      <input
        className="border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter serial no."
        name="serialNo"
        value={serialNo}
        onChange={handleQuestionChange}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "800px" }}
        placeholder="Enter question"
        name="question"
        value={question}
        onChange={handleQuestionChange}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter if any extra fields or ignore this field"
        name="extraField"
        value={extraField}
        onChange={handleQuestionChange}
      />
      <br />
      <button
        className="p-10 border-none mr-10"
        style={{ cursor: "pointer" }}
        onClick={handleAddQuestion}
      >
        Add question
      </button>
      <button
        className="p-10 border-none"
        onClick={deleteQuestionFunction}
        style={{cursor:"pointer"}}

      >
        Delete question
      </button>
      <br />
      <div className="mt-15">DATA STRUCTURE IN OBJECT FORMAT</div>
      <div className="border-grey p-30 mb-20">
        {questionList.map((item, indx) => {
          return (
            <div key={indx}>
              {` {
            serialNo : ${item.serialNo} , 
            question :${item.question},
            num :${item.num},
            extraField: ${item.extraField}
        },`}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataCreator;
