const QuoteBox3 = (props) => {
  return (
    <div className="flex flex-col items-start m-8">
      <div className="p-8 text-xl text-white rounded-t-lg rounded-br-lg bg-rose-400">
        text1
      </div>
      <div className="flex flex-col p-4 border-b-2 rounded-b-lg bg-rose-100 border-x-2 border-rose-300">
        <div className="text-lg text-rose-700">text2</div>
        <div className="text-rose-400">text3</div>
      </div>
    </div>
  );
};

export default QuoteBox3;
