import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {
  return (
    <main className="">
      <nav className="navbar navbar-expand-sm bg-secondary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Intra Voyage</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
