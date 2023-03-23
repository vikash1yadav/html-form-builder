function JsListCreator({dataKeyArray }) {
    return (
      <>
        {dataKeyArray.map((item, indx) => (
          <div key={indx}>{`"${item}": "" , "${item}_remarks":"",`}</div>
        ))}
      </>
    );
  }
  export default JsListCreator