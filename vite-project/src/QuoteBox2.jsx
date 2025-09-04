const QuoteBox2 = (props) => {
  const { quote } = props;

  return (
    <div className="flex m-8">
      <div className="w-64 p-4 bg-green-500 rounded-l-lg">
        <div className="mb-2 text-2xl text-gray-200">text1</div>
        <div className="text-blue-300">text2</div>
      </div>
      <div className="flex items-center justify-center px-8 text-lg border rounded-r-full w-80 text-stone-500 border-stone-300">
        text3
      </div>
    </div>
  );
};

export default QuoteBox2;
