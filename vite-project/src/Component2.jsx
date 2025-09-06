const Component2 = (props) => {
  const { display } = props;
  return (
    <div>
      <div className="flex">
        <div className="mr-2 font-bold">Static text</div>
        <div>{display.text1}</div>
      </div>
      <div className="flex">
        <div className="mr-2 font-bold">Static text</div>
        <div>{display.text2}</div>
      </div>
    </div>
  );
};

export default Component2;
