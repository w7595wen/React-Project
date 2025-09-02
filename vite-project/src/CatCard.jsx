const CatCard = (props) => {
  const { cat } = props;
  return (
    <div className="border border-neutral-500 m-6">
      <img className="w-80 h-64 object-cover" src={cat.imageUrl} />
      <div className="flex text-neutral-500">
        <div className="mr-2 font-bold">Name </div>
        <div>{cat.name}</div>
      </div>

      <div className="flex text-neutral-500">
        <div className="mr-2 font-bold">Location </div>
        <div>{cat.location}</div>
      </div>
    </div>
  );
};

export default CatCard;
