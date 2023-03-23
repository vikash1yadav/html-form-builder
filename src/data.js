import React, { useCallback, useContext, useMemo, useState } from "react";
import { nonKeyWords } from "./helper/constant";

// createContext returns an object with Provider and Consumer properties
// You can also use destructuring to extract these properties
export const MyContext = React.createContext();

// Create a component that provides the context data
export function MyProvider(props) {
  const [data, ] = useState('Hello World');

  let [showHTML, setShowHTML] = useState(false)

  let [newAllQuestionKeyCombinationArray, setnewAllQuestionKeyCombinationArray] = useState([]);

  const [questionList, setQuestionList] = useState([]);
  const [serialNo, setSerialNo] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(1);
  const [extraField, setExtraField] = useState("");

  const deleteQuestionFunction= useCallback((id)=> {
    questionList.pop();
    const newArray = questionList.map((item) => item);
    setNum((prev) => prev - 1);
    setQuestionList(() => newArray);
  }, [questionList])

  const handleAddQuestion = useCallback(() => {
    setNum((prev) => prev + 1);
    setQuestionList([
      ...questionList,
      {
        serialNo: `"${serialNo}"`,
        question: `"${question}"`,
        num: `"${num}"`,
        extraField: `"${extraField}"`,
      },
    ]);
    setSerialNo("");
    setQuestion("");
    setExtraField("");
  }, [questionList, serialNo, question, num, extraField])
  
  const handleGenerateStr = () => {
    if (questionList.length === 0) {
      alert("enter some question")
      return;;
    }
    showHTML = !showHTML
    if (showHTML) {
      newAllQuestionKeyCombinationArray = [];
      setnewAllQuestionKeyCombinationArray(newAllQuestionKeyCombinationArray);
      // for (const item of questionList) {
      //   // keyCreator(item.question)
      // }
    } else {
      newAllQuestionKeyCombinationArray = [];
      setnewAllQuestionKeyCombinationArray(newAllQuestionKeyCombinationArray);
    }
    setShowHTML(showHTML);
    
  }
  
  const keyCreator=useCallback((keyquestion)=> {
    console.log("checking call for keyCreator");
    let singleQuestionKeyCombinationArray = [];
    let wordsArray = keyquestion.split(" ");
    for (let index = 0; index < nonKeyWords.length; index++) {
      const element = nonKeyWords[index];
      // eslint-disable-next-line no-loop-func
      wordsArray = wordsArray.filter((word, i) => {
        if (word.toLowerCase() === element.toLowerCase()) {
          // If the word is found, check if it is separate
          if ((i === 0 || !/\w/.test(wordsArray[i - 1])) && (i === wordsArray.length - 1 || !/\w/.test(wordsArray[i + 1]))) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });
    }

    for (let i = 0; i < wordsArray.length; i++) {
      const element1 = wordsArray[i];
      const element2 = wordsArray[i + 1];
      const key = `${element1}_${element2}`;
      singleQuestionKeyCombinationArray.push(key.toLowerCase());
      if (wordsArray.indexOf(element2) === wordsArray.length - 1) break;
    }

    var randomKeyOfSingleQuestion =
      singleQuestionKeyCombinationArray.length === 0
        ? "enter_your_key"
        : singleQuestionKeyCombinationArray[
        Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
        ];
    for (let i = 0; i < randomKeyOfSingleQuestion.length; i++) {
      const singleCharacterOfKey = randomKeyOfSingleQuestion[i];
      if (
        singleCharacterOfKey === "?" ||
        singleCharacterOfKey === ":" ||
        singleCharacterOfKey === "," ||
        singleCharacterOfKey === "(" ||
        singleCharacterOfKey === ")" ||
        singleCharacterOfKey === "." ||
        singleCharacterOfKey === "/" ||
        singleCharacterOfKey === "’" ||
        singleCharacterOfKey === "-"
      ) {
        randomKeyOfSingleQuestion = randomKeyOfSingleQuestion.replace(
          singleCharacterOfKey,
          ""
        );
      }
    }

    if (!newAllQuestionKeyCombinationArray.includes(randomKeyOfSingleQuestion)) {
      console.log("check 1", randomKeyOfSingleQuestion);
      newAllQuestionKeyCombinationArray.push(randomKeyOfSingleQuestion);
      // newAllQuestionKeyCombinationArray=[...newAllQuestionKeyCombinationArray, randomKeyOfSingleQuestion]
      setnewAllQuestionKeyCombinationArray(newAllQuestionKeyCombinationArray);
    } else {
      console.log("check else", singleQuestionKeyCombinationArray, randomKeyOfSingleQuestion);
      newAllQuestionKeyCombinationArray.push(
        singleQuestionKeyCombinationArray.length === 0
          ? "Enter_your_key"
          : `${randomKeyOfSingleQuestion}_1`
      );
      setnewAllQuestionKeyCombinationArray(newAllQuestionKeyCombinationArray);
    }
  }, [newAllQuestionKeyCombinationArray])

  console.log("check", newAllQuestionKeyCombinationArray);

  const handleQuestionChange = (e) => {
    switch (e.target.name) {
      case "serialNo":
        setSerialNo(e.target.value);  
        break;
      case "extraField":
        setExtraField(e.target.value);
        break;
      case "question":
        setQuestion(e.target.value);
        break;
      default:
        break;
    }
  }

  const values = useMemo(() => {
    return {
      data, handleAddQuestion, questionList,
      deleteQuestionFunction, num, serialNo, setSerialNo,
      question, setQuestion, extraField, setExtraField,
      newAllQuestionKeyCombinationArray,
      setnewAllQuestionKeyCombinationArray,
      showHTML, setShowHTML,
      handleQuestionChange, keyCreator
    }
  }, [data, handleAddQuestion, questionList,
    deleteQuestionFunction, num, serialNo,
    question, setQuestion, extraField,
    newAllQuestionKeyCombinationArray,
    showHTML, keyCreator
  ])
  return (
    <MyContext.Provider value={{ ...values, handleGenerateStr, }}>
      {props.children}
    </MyContext.Provider>
  );
}

export const withMyContext = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <MyProvider>
        <WrappedComponent {...props} />
      </MyProvider>
    );
  };
};

export function useMyProvider() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error(
      "withMyContext must be used within a App"
    );
  }
  return context;
}


// { serialNo: "1", question: "Is the firm registered with local govt. body and address of company as submitted confirms to the same?", num: "1", extraField: "" },
// { serialNo: "2", question: "Is the firm’s Quality System approved as per ISO standard for providing UAV services – if yes provide details (certificate to be uploaded).", num: "2", extraField: "" },
// { serialNo: "3", question: "If the firm is not ISO approved, does the Quality Assurance System of the firm meet IRS procedural requirements.", num: "3", extraField: "" },