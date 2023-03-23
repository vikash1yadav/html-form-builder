function KeyListCreator({ dataKeyArray }) {
    return (
      <>
        
          {dataKeyArray.map((item, indx) => (
            <div key={indx}>{`"${item}",`}</div>
          ))}
        
      </>
    );
  }
  export default KeyListCreator