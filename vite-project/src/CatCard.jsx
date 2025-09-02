const CatCard = (props) => {
  const { cat } = props;
  return (
    <div>
      <div className="flex text-neutral-500">
        <div className="mr-2 font-bold">name </div>
        <div>{cat.name}</div>
      </div>
    </div>
  );
};

export default CatCard;
