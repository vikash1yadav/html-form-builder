// import { newAllQuestionKeyCombinationArray } from "./keyCreator";
// let emptyKeyArray = [];

import { memo } from "react";

function OutputFormStructureCreator({ serialNo, question, num, extraField, emptyKeyArray }) {
  // keyCreator(question);
  // // for out put
  // console.log("check out");
  const structureHTML = `
               <!-- >${serialNo} --> 
               <div class="row-container page-break">
                   <div class="row">
                       <div class="column w-5 align-center">
                           <span class="font-style">${serialNo} </span>
                       </div>
                       <div class="column w-45  align-left">
                           <p>${question}</p>
                       </div>
                       <div class="column w-15 align-center">
                           <span class="value_text"><%- data?.${
                             emptyKeyArray[num - 1]
                           } || "" %></span>
                       </div>
                       <div class="column w-35 align-left">
                           <p remark_normal><%- data?.${
                             emptyKeyArray[num - 1]
                           }_remark || "" %></p>
                       </div>
                   </div>
               </div>
               `;
  return (
    <>
      {structureHTML} <br />
    </>
  );
}
export default memo(OutputFormStructureCreator);
