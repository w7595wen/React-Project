const CatCard = (props) => {
  const { cat } = props;
  return (
    <div>
      <div>name </div>
      <div>{cat.name}</div>
    </div>
  );
};

export default CatCard;
