function JsListCreator({ dataKeyArray }) {
  let tempString = "";
  for (let item of dataKeyArray) {
    tempString =
      `${tempString}${item} : "", ${item}_remarks : "", `
  }
    return (
      <div className="whiteSpace">
        {tempString}
      </div>
    );
  }
  export default JsListCreator