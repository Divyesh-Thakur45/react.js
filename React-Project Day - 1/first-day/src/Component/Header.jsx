import "../Component/Header.css";
export default function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">MyStore</a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          ></input>
          <button>Search</button>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
