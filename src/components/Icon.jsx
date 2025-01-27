export default function Icon({ icon, action }) {
  return (
    <span onClick={action} className="material-symbols-rounded cursor-pointer">
      {icon}
    </span>
  );
}
