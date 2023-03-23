function ExcelSheetListCreator({ dataKeyArray }) {
  let tempString = "";
  console.log("length", dataKeyArray.length);
  for (let item of dataKeyArray) {
    tempString =
  `${tempString}${item}
  ${item}_remarks
  `
  }

  return (
    <div
      className="whiteSpace"
    >
      {tempString}
    </div>
  );
}
export default ExcelSheetListCreator