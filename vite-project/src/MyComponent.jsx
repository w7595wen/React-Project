/*Creating another component:
for every component made, it has its own file so can easily locate and modify*/
/*Make sure file name matches component name */

/*children is the prompt to pass text btwn pair tags 
to reference a reusable container like that text wants the pink MyComponent layout*/
const MyComponent = (props) => {
  const { children, bgColor, height } = props;

  return (
    <div
      style={{
        /* specify MyComponent’s features. style{{} inside <div> */
        background: bgColor,
        height: "20px",
      }}
    >
      {children}
    </div>
  );
};

/* This line makes MyComponent available in the rest of the application
if I choose to import it somewhere else */
export default MyComponent;
