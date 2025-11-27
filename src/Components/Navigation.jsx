import "./Navigation.css";

export default function Navigation() {
  return (
        <div className="nav">
        <div className="logo">Shivalika Mehra</div>
        <div className="nav-links">
          <div className="nav-items" onClick={() => goToSection("#About")}>About</div>
          <div className="nav-items" onClick={() => goToSection("#Projects")}>Projects</div>
          <div className="nav-items" onClick={() => goToSection("#Contact")}>Contact</div>
        </div>
      </div>

);
}
