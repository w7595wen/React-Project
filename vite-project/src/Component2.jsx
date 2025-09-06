const Component2 = (props) => {
  const { display } = props;
  return (
    <div>
      <div className="flex">
        <div>Static text</div>
        <div>{display.text1}</div>
      </div>
    </div>
  );
};

export default Component2;
