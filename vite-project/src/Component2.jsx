const Component2 = (props) => {
  const { display } = props;
  return (
    <div className="bg-violet-100">
      <div className="flex flex-row items-center justify-center">
        <div className="mr-4 font-bold">Static text</div>
        <div>{display.text1}</div>
      </div>
    </div>
  );
};

export default Component2;
