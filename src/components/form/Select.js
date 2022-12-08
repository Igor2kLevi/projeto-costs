function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-8">
      <label className="font-bold mb-3" htmlFor={name}>
        {text}
      </label>
      <select
        className="bg-gray-50 font-normal text-gray-400 rounded-lg border-0 p-3"
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value ||  ''}
      >
        <option>Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
