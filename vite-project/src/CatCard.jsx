const CatCard = (props) => {
  const { cat } = props;
  return (
    <div className="border border-neutral-500 m-6 rounded-lg">
      <img className="w-80 h-64 object-cover" src={cat.imageUrl} />
      <div className="p-4">
        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24 border border-black">Name </div>
          <div>{cat.name}</div>
        </div>

        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24">Location </div>
          <div>{cat.location}</div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
