import "./button.style.sass";

export const Button = (props) => {
  return (
    <button
      id="button-wrapper"
      type="button"
      className="btn btn-light"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
