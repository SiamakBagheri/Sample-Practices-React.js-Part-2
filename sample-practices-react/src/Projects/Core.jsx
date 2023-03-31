import { Route, Routes } from "react-router-dom";
import HomePage from "./SimpleTemplate/Pages/HomePage/HomePage";
import BlogPage from "./SimpleTemplate/Pages/BlogPage/BlogPage";
import PostPage from "./SimpleTemplate/Pages/PostPage/PostPage";
import NotFoundPage from "./SimpleTemplate/Pages/NotFoundPage/NotFoundPage";
import './SimpleTemplate/theme/style.css'

function Core() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/Post/:id" element={<PostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Core;
