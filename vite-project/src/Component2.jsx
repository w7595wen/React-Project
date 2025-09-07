const Component2 = (props) => {
  const { display } = props;
  return (
    <div className="bg-violet-100">
      <div className="flex flex-row items-center justify-center">
        <div className="mr-4 font-bold">Static text</div>
        <div>{display.text1}</div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-64 rounded-lg"
          src={"https://static-task-assets.react-formula.com/378212.jpg"}
        />
      </div>
    </div>
  );
};

export default Component2;
