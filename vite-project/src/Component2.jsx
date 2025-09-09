const Component2 = (props) => {
  const { display } = props;
  return (
    <div className="bg-[#012746] p-4 text-md  text-slate-100 ">
      <div className="flex flex-row items-center justify-center">
        <div className="font-bold w-60">{display.q1}</div>
        <div>{display.a1}</div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="font-bold w-60">{display.q2}</div>
        <div>{display.a2}</div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-80 h-64" src={display.imageUrl} />
      </div>
    </div>
  );
};

export default Component2;
