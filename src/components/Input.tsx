export default function Input({ ...otherProps }) {
  const { id, label, onChange, value } = otherProps;
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input id={id} onChange={onChange} type="color" value={value} />
    </>
  );
}
