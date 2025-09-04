const QuoteBox2 = (props) => {
  return (
    <div className="flex flex-col m-8">
      <div className="bg-cyan-600 text-cyan-200 p-8 text-lg rounded-t-lg w-[420px]">
        text1
      </div>
      <div
        className="flex flex-col items-center p-4 border rounded-b-lg bg-stone-100 
      border-stone-300 flex flex-col items-center"
      >
        <div className="text-xl text-blue-700">text2</div>
        <div className="text-stone-500 ">text3</div>
      </div>
    </div>
  );
};

export default QuoteBox2;
