const NavButton = (props) => {
  const { icon } = props;
  return (
    <button className="bg-blue-400 text-green-200 rounded-md">
      <i className={"m-2 text-3xl ${icon}"}></i>
    </button>
  );
};

export default NavButton;
