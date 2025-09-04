const QuoteBox1 = (props) => {
  const { quote } = props;
  console.log(quote);

  return (
    <div className="flex flex-col m-8">
      <div className="bg-cyan-600 text-cyan-200 p-8 text-lg rounded-t-lg w-[420px]">
        one
      </div>
      <div className="flex flex-col items-center p-4 border rounded-b-lg bg-stone-100 border-stone-300">
        <div className="text-xl text-cyan-700">two</div>
        <div className="text-stone-500 ">three</div>
      </div>
    </div>
  );
};

export default QuoteBox1;
