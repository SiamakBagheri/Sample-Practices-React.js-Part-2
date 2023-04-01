import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import AuthPage from "./Pages/AuthPage";
import Route from "./Router/Route";
import Link from "./Router/Link";

const RouterApp = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Auth">Auth</Link>
        </li>
      </ul>

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/Blog">
        <BlogPage />
      </Route>
      <Route path="/Auth">
        <AuthPage />
      </Route>
    </>
  );
};

export default RouterApp;
