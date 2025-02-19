export default function Button({ text, func, name }) {
  return (
    <button className={name} onClick={func}>
      {text}
    </button>
  );
}
