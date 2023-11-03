import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";
import NewPostForm from "../features/posts/NewPostForm";
import EditPostForm from "../features/posts/EditPostForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="posts/:id/edit" element={<EditPostForm />} />
            <Route path="posts/new" element={<NewPostForm />} />
        </Routes>
    )
}

export default AppRoutes;