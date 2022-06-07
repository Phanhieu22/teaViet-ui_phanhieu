import { faCartPlus, faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlagEngland, FlagVietNam } from '~/component/icons';
import BlogLayout from '~/component/layouts/blog';
import Login from '../component/pages/auth/Login';
import Register from '../component/pages/auth/Register';
import Blog from '../component/pages/Blog';
import Home from '../component/pages/home';
import ProductsPage from '../component/pages/ProductsPage';
import Profile from '../component/pages/Profile';
import CreateProduct from '~/component/adminPages/CreateProduct';
import CollectionsPage from '~/component/pages/CollectionsPage';
import AdminLayout from '~/component/layouts/AdminLayout';
const configNavBar = [
    {
        icon: null,
        title: 'Giới thiệu',
        to: '/intro',
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
        title: 'Sản phẩm',
        children: {
            title: 'product',
            data: [
                {
                    id: '1',
                    to: '/collections/tra-xanh-matcha',
                    title: 'trà xanh matcha',
                },
                {
                    id: '2',
                    to: '/collections/tra-xanh-sencha',

                    title: 'trà xanh sencha',
                },
                {
                    id: '3',
                    to: '/collections/tra-xanh-komachi',

                    title: 'trà xanh komachi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
        title: 'Bán buôn',
        children: {
            title: 'purchase',
            data: [
                {
                    id: '1',
                    to: '/purchase',
                    title: 'Tại sao chọn chúng tôi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
        title: 'Kiến thức',
        children: {
            title: 'knowledge',
            data: [
                {
                    id: '1',
                    to: '/knowledge',
                    title: 'kiến thưc pha chế',
                },
                {
                    id: '2',
                    to: '/knowledge',
                    title: 'câu hỏi thường gặp',
                },
                {
                    id: '3',
                    to: '/product2',
                    title: 'quy trình sản xuất chè macha',
                },
                {
                    id: '4',
                    to: '/product2',
                    title: 'quy trình sản xuất chè sencha',
                },
            ],
        },
    },
    {
        icon: null,
        title: 'Tin tức',
        to: '/news',
    },
    {
        icon: null,
        title: 'Liên hệ',
        to: '/contact',
    },
];
const configAdminNav = [
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
        title: 'Sản phẩm',
        children: {
            title: 'product',
            data: [
                {
                    id: '1',
                    to: '/admin/createProduct',
                    title: 'tạo sản phẩm',
                },
                {
                    id: '2',
                    to: '/admin/allProduct',
                    title: 'tất cả các sản phẩm',
                },
                {
                    id: '3',
                    to: '/admin/business',
                    title: 'Tình hình kinh doanh',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
        title: 'Khách hàng',
        children: {
            title: 'user',
            data: [
                {
                    id: '1',
                    to: '/admin/allUser',
                    title: 'tất cả khách hàng',
                },
                {
                    id: '2',
                    to: '/admin/user',
                    title: 'khách hàng bán buôn',
                },
                {
                    id: '3',
                    to: '/admin/business',
                    title: 'khách hàng bán lẻ',
                },
                {
                    id: '3',
                    to: '/admin/business',
                    title: 'chăm sóc khách hàng',
                },
            ],
        },
    },
];
const configCart = {
    icon: <FontAwesomeIcon icon={faCartPlus} />,
    children: {
        title: 'product',
        data: [
            {
                id: '1',
                to: '/item',
                nameItem: 'Bột trà Houjicha Special 500g',
                image: 'https://product.hstatic.net/200000354189/product/houjicha_genmai_tea_powder_8ebf5280b5a6428da030e02b7fbf171d_1024x1024.jpg',
                price: 300.0,
                quantity: 1,
            },
            {
                id: '2',
                to: '/item',
                nameItem: 'Trà túi lọc Houjicha Genmai 250g',
                image: 'https://product.hstatic.net/200000354189/product/houjicha_genmai_31f0fa5e9a734f60a4be7bdd5c9946f9_1024x1024.png',
                price: 400.0,
                quantity: 1,
            },
        ],
    },
};
const configLanguage = {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
        title: 'language',
        data: [
            {
                icon: <FlagVietNam />,
                id: '1',
                code: 'vn',
                title: 'Tiếng Việt',
            },
            {
                icon: <FlagEngland />,
                id: '2',
                code: 'en',
                title: 'English',
            },
        ],
    },
};

const publicRoute = [
    { path: '/', component: Home },
    { path: '/collections/:productPortfolio', component: CollectionsPage },

    { path: '/products/:slug', component: ProductsPage },

    {
        path: '/blog',
        component: Blog,
        layout: BlogLayout,
    },

    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/admin/createProduct',
        component: CreateProduct,
        layout: AdminLayout,
    },
    {
        path: '/admin',
        component: CreateProduct,
    },
];
const privateRoute = [];
export { configNavBar, configCart, configLanguage, publicRoute, privateRoute, configAdminNav };
