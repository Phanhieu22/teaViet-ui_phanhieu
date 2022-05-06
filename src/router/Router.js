import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../component/pages/home/Home';
import Product from '../component/pages/product/Product';
import Blog from '../component/pages/blog/Blog';
import Auth from '../component/pages/auth/Login';
import NavBar from '../component/layouts/navBar/NavBar';
import Register from '../component/pages/auth/Register';
import NavigateSetter from '../Navigation';
const Router = () => (
    <BrowserRouter>
        <NavigateSetter />
        <NavBar />
        <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/login" index element={<Auth />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    </BrowserRouter>
);
export default Router;
