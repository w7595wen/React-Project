const Component2 = (props) => {
  const { display } = props;
  return (
    <div className="bg-violet-700">
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div className="mr-4 font-bold">Static text</div>
          <div>{display.text1}</div>
        </div>
        <div className="flex">
          <div className="mr-4 font-bold">Static text</div>
          <div>{display.text2}</div>
        </div>
        <img
          className="w-64 rounded-lg"
          src={"https://static-task-assets.react-formula.com/378212.jpg"}
        />
      </div>
    </div>
  );
};

export default Component2;
