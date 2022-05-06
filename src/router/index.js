import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));
const Product = React.lazy(() => import('../pages/product/Product'));
const Blog = React.lazy(() => import('../pages/blog/Blog'));

// login
const Login = React.lazy(() => import('../pages/auth/Auth'));

const homeRoutes = {
    path: '/',
    name: 'general.home',
    icon: '',
    header: 'user',
    component: Home,
};
const productRoutes = {
    path: '/product',
    name: 'general.product',
    icon: '',
    header: 'user',
    component: Product,
};
const blogRoutes = {
    path: '/blog',
    name: 'general.blog',
    icon: '',
    header: 'user',
    component: Blog,
};
const authRoutes = {
    path: '/account',
    name: 'general.auth',
    icon: '',
    header: 'user',
    component: Login,
};
const allRoute = [homeRoutes, productRoutes, blogRoutes, authRoutes];
export default allRoute;
