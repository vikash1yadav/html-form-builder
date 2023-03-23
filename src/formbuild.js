import React, { memo } from "react";
import  { useMyProvider } from "./data";
import JsListCreator from "./JSListCreator";
import KeyListCreator from "./KeyListCreator";
// import keyCreator, { newAllQuestionKeyCombinationArray } from "./keyCreator";
import StructureCreator from "./structureCreator";
import ApiListCreator from "./apiListCreator";
import "./dataCreator.css"
import ExcelSheetListCreator from "./ExcelSheetListCreator";
import OutputFormStructureCreator from "./outputFormStructureCreator";
import ExpandableComponent from "./expandableComponent";

function Formbuild() {
  const { questionList, newAllQuestionKeyCombinationArray, keyCreator } = useMyProvider();
  const questionsArray = questionList;
  // setnewAllQuestionKeyCombinationArray([]);
  return (
    <>
      <div>
        <div className="mb-8 mt-15 color">
          INPUT FORM HTML STRUCTURE
        </div>

        <ExpandableComponent title={"INPUT FORM HTML STRUCTURE"}>
        <div >
            {questionList.map((item, indx) => (
            <>
              <div key={indx} className="border-grey mb-8 p-10">
                <StructureCreator
                  key={item.num}
                  num={item.num}
                  serialNo={item.serialNo}
                  question={item.question}
                  keyCreator={keyCreator}
                  extraField={item.extraField}
                  newAllQuestionKeyCombinationArray={newAllQuestionKeyCombinationArray}
                />
              </div>
            </>
          ))}
          </div>
        </ExpandableComponent>

        <div className="mb-8 mt-15 color">
          OUTPUT FORM HTML STRUCTURE</div>
        <ExpandableComponent title={"OUTPUT FORM HTML STRUCTURE"}>
        <div>
          {questionsArray.map((item) => (
            <>
              <div key={item.num} className="border-grey mb-8 p-10">
                <OutputFormStructureCreator
                  key={item.num}
                  num={item.num}
                  serialNo={item.serialNo}
                  question={item.question}
                  emptyKeyArray={newAllQuestionKeyCombinationArray}
                  extraField={item.extraField}
                />
              </div>
            </>
          ))}
          </div>
        </ExpandableComponent>

        <div className="mb-8 mt-15 color">LIST OF KEYS FOR JAVASCRIPT FILE</div>
        <div className="border-grey p-10">
          <ExpandableComponent title={"LIST OF KEYS FOR JAVASCRIPT FILE"}>
            <JsListCreator dataKeyArray={newAllQuestionKeyCombinationArray} />
          </ExpandableComponent>
        </div>
        <div className="mb-8 mt-15 color">LIST OF KEYS FOR OUTPUT REPORT</div>
        <div className="border-grey p-10 mb-8" style={{ wordBreak: "break-word" }} >
          <ExpandableComponent title={"LIST OF KEYS FOR OUTPUT REPORT"}>
            <KeyListCreator dataKeyArray={newAllQuestionKeyCombinationArray} />
          </ExpandableComponent>
        </div>
        <div className="border-grey p-10 mb-8" style={{ wordBreak: "break-word" }}>
          <ExpandableComponent title={"For API key"}>
            <ApiListCreator dataKeyArray={newAllQuestionKeyCombinationArray} />
          </ExpandableComponent>
        </div>

        <div className="mb-8 mt-15 color">Question Label for excel sheet</div>
        <div className="border-grey mb-8 p-10">
          <ExpandableComponent title={"Question Label for excel sheet"}>
          {questionsArray.map((item) => (
            <>
              <p key={item.num}>{item.question}</p>
            </>
          ))}
          </ExpandableComponent>
        </div>
        <div className="mb-8 mt-15 color">List of key for excel sheet</div>

        <div className="border-grey p-10">
          <ExpandableComponent title={"List of key for excel sheet"}>
            <ExcelSheetListCreator dataKeyArray={newAllQuestionKeyCombinationArray} />
          </ExpandableComponent>
        </div>

      </div>
    </>
  );
}

export default memo(Formbuild);
