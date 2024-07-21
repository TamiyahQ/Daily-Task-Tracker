import Button from "./Button";

const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button
        color={props.showAdd ? 'orange' : 'blue'}
        text={props.showAdd ? 'Close' : 'Add'} // Swapped the values
        onClick={props.onAdd}
      />
    </header>
  );
};

export default Header;
