const NavButton = (props) => {
  const { icon, onClick } = props;
  return (
    <button className="bg-blue-400 text-green-200 rounded-md" onClick={onClick}>
      <i className="fa-regular fa-star m-2 text-3xl"></i>
    </button>
  );
};

export default NavButton;
