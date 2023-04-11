import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Projects/UserLoginRouter/Pages/HomePage";
import BlogPage from "./Projects/UserLoginRouter/Pages/BlogPage";
import PanelPage from "./Projects/UserLoginRouter/Pages/PanelPage";
import PrivateRoute from './Projects/UserLoginRouter/Pages/PrivateRouter'
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { useAuth } from "./Projects/UserLoginRouter/Context/auth-user";
// import RouterApp from "./Projects/PracticesRouting/RouterApp";
// import Core from "./Projects/Core";

function App() {
  return (
    // 1
    // <BrowserRouter>
    //   <Core />
    // </BrowserRouter>

    // 2
    // <RouterApp />

    // 3

    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Panel">Panel</Link>
          </li>
        </ul>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Blog" element={<BlogPage />}></Route>
          <PrivateRoute path="/Panel" element={<PanelPage />}></PrivateRoute>
        </Routes>
      </div>
    </>
  );
}

export default App;
