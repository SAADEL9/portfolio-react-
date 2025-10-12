import "../css/certifications.css";

export default function Certifications({ title, school }) {
  return (
    <div className="certif-card">
      <p className="certif-text">{title} - {school}</p>
    </div>
  );
}
