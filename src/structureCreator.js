import { memo } from "react";
// import { newAllQuestionKeyCombinationArray } from "./keyCreator";
// let emptyKeyArray = [];

function StructureCreator({ serialNo, question, num, keyCreator, newAllQuestionKeyCombinationArray, extraField }) {
  keyCreator(question);
console.log("call fun str");
  /*for input*/
  const structureHTML = `
    <div class="section">
              <div class="rows">
                <div class="col-1 text-center">
                  <p class="num-label">${serialNo}</p>
                </div>
                <div class="col-11">
                  <label class="ors-form-label">${question}</label>
                  <div class="rows">
                    <div class="col-3 main-radio" data-fieldtype="radio-group" data-bind="foreach:{
                        data:[
                          {id:'yes',label:'Yes'},
                          {id:'no',label:'No'}
                        ],
                        as:'option'
                      }">
                      <div class="radio-common"
                        data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]
    }()===option.id}">
                        <input type="radio" name="${newAllQuestionKeyCombinationArray[num - 1]
    }" data-bind="
                            checkedValue: option.id,
                            checked: vm.formData.${newAllQuestionKeyCombinationArray[num - 1]
    },
                            attr:{
                              id:'${newAllQuestionKeyCombinationArray[num - 1]
    }'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]
    }')
                            }" />
                        <label
                          data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]
    }'+'-'+option.id}"></label>
                      </div>
                    </div>
                    <div class="col-9 ors-form-control textarea-input p-0" data-fieldtype="textarea">
                      <textarea class="textarea-text" name="${newAllQuestionKeyCombinationArray[num - 1]
    }_remarks"
                        placeholder="Remarks by Auditor" style="height: 30px;"
                        data-bind="expandable:{min:1},value:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]
    }_remarks,attr:{readonly:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]
    }_remarks')}"></textarea>
                    </div>
                  </div>
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
// export default StructureCreator;

export default memo(StructureCreator);

