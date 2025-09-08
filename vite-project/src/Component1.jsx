const Component1 = () => {
  return (
    <div className="bg-[#123f94]">
      <div className="py-2 text-slate-100">Dream big.</div>
      <div className="py-4 text-slate-100">The sky's the limit.</div>
      <div className="flex justify-between">
        <div className="text-left">
          <i class="fa-solid fa-star text-xl text-yellow-100"></i>
          <i class="fa-solid fa-star text-xl text-yellow-100"></i>
        </div>
        <div className="text-center">
          <i class="fa-solid fa-star text-xl text-yellow-100"></i>
          <i class="fa-solid fa-star text-xl text-yellow-100"></i>
        </div>
        <button className="hover:text-yellow-100 text-[#4a4e57]">
          <i class="fa-solid fa-star text-xl"></i>
          <i class="fa-solid fa-star text-xl text-yellow-100"></i>
        </button>
      </div>
    </div>
  );
};

export default Component1;
