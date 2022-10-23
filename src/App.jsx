import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsNew } from "./PostsNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/new" element={<PostsNew />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
