function Input({ type, text, name, placeholder, handlenOnChange, value }) {
  return (
    <div className="flex flex-col mb-8">
      <label className="font-bold mb-3" htmlFor={name}>{text}:</label>
      <input className="bg-gray-50 rounded-lg border-0 p-3"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handlenOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
