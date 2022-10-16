import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Bloggy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#posts-index">
                  All Posts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#posts-new">
                  New Post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <LogoutLink />
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
