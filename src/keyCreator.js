// import { nonKeyWords } from "./helper/constant";

// export let newAllQuestionKeyCombinationArray = [];

// function keyCreator(keyquestion) {
//   console.log("checking call for keyCreator");
//   let singleQuestionKeyCombinationArray = [];
//   let wordsArray = keyquestion.split(" ");
//   for (let index = 0; index < nonKeyWords.length; index++) {
//     const element = nonKeyWords[index];
//     wordsArray = wordsArray.filter((word, i) => {
//       if (word.toLowerCase() === element.toLowerCase()) {
//         // If the word is found, check if it is separate
//         if ((i === 0 || !/\w/.test(wordsArray[i - 1])) && (i === wordsArray.length - 1 || !/\w/.test(wordsArray[i + 1]))) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     });
//   }

//   for (let i = 0; i < wordsArray.length; i++) {
//     const element1 = wordsArray[i];
//     const element2 = wordsArray[i + 1];
//     const key = `${element1}_${element2}`;
//     singleQuestionKeyCombinationArray.push(key.toLowerCase());
//     if (wordsArray.indexOf(element2) === wordsArray.length - 1) break;
//   }

//   var randomKeyOfSingleQuestion =
//     singleQuestionKeyCombinationArray.length === 0
//       ? "enter_your_key"
//       : singleQuestionKeyCombinationArray[
//           Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
//         ];
//   for (let i = 0; i < randomKeyOfSingleQuestion.length; i++) {
//     const singleCharacterOfKey = randomKeyOfSingleQuestion[i];
//     if (
//       singleCharacterOfKey === "?" ||
//       singleCharacterOfKey === ":" ||
//       singleCharacterOfKey === "," ||
//       singleCharacterOfKey === "(" ||
//       singleCharacterOfKey === ")" ||
//       singleCharacterOfKey === "." ||
//       singleCharacterOfKey === "/" ||
//       singleCharacterOfKey === "’" ||
//       singleCharacterOfKey === "-"
//     ) {
//       randomKeyOfSingleQuestion = randomKeyOfSingleQuestion.replace(
//         singleCharacterOfKey,
//         ""
//       );
//     }
//   }

//   if (!newAllQuestionKeyCombinationArray.includes(randomKeyOfSingleQuestion)) {
//     newAllQuestionKeyCombinationArray.push(randomKeyOfSingleQuestion);
//   } else {
//     newAllQuestionKeyCombinationArray.push(
//       singleQuestionKeyCombinationArray.length === 0
//         ? "Enter_your_key"
//         : `${randomKeyOfSingleQuestion}_1`
//     );
//   }
// }

// export default keyCreator;
