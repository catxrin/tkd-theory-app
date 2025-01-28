export default function Button({ label, action }) {
  return (
    <button className="btn-primary" onClick={action}>
      {label}
    </button>
  );
}
