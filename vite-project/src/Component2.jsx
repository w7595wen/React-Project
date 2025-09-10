const Component2 = (props) => {
  const { display } = props;
  return (
    <div className=" flex flex-col items-center justify-center bg-[#012746] p-4 text-md  text-slate-100 ">
      <div>
        <div className="font-bold w-60">{display.q1}</div>
        <div className="m-3">{display.a1}</div>
      </div>
      <div>
        <div className="font-bold w-60">{display.q2}</div>
        <div className="m-3">{display.a2}</div>
      </div>
      <div>
        <img className="w-100 h-64" src={display.imageUrl} />
        <div className="italic">{display.caption}</div>
      </div>
    </div>
  );
};

export default Component2;
