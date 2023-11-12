function Input(props) {
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        placeholder={props.placeholder}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
}

export default Input;
