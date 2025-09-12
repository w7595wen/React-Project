const Component2 = (props) => {
  const { display } = props;
  return (
    <div className=" flex flex-col items-center justify-center bg-[#012746] p-4 text-lg  text-slate-100 ">
      <div>
        <div
          className="font-bold w-60 underline underline-offset-[6px] decoration-4 decoration-yellow-200
 hover:underline hover:decoration-[#7a36d9] hover:decoration-4"
        >
          {display.q1}
        </div>
        <div className="m-3">{display.a1}</div>
      </div>
      <div>
        <div
          className="font-bold w-60 underline underline-offset-[6px] decoration-4 decoration-yellow-200
         hover:underline hover:decoration-[#7a36d9] hover:decoration-4"
        >
          {display.q2}
        </div>
        <div className="m-3">{display.a2}</div>
      </div>
      <div>
        <img className="w-[1100px] h-[600px]" src={display.imageUrl} />
        <div className="italic">{display.caption}</div>
      </div>
    </div>
  );
};

export default Component2;
