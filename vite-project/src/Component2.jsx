const Component2 = (props) => {
  const { display } = props;
  return (
    <div className="bg-[#012746] p-4">
      <div className="flex flex-row items-center justify-center">
        <div className="mr-4 font-bold text-slate-100">{display.q1}</div>
        <div className="text-slate-100">{display.a1}</div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="mr-4 font-bold text-slate-100">{display.q2}</div>
        <div className="text-slate-100">{display.a2}</div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-80 h-64" src={display.imageUrl} />
      </div>
    </div>
  );
};

export default Component2;
