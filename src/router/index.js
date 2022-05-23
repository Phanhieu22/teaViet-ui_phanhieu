import Login from '../component/pages/auth/Login';
import Register from '../component/pages/auth/Register';
import Blog from '../component/pages/Blog';
import Home from '../component/pages/home';
import Product from '../component/pages/product';
import Profile from '../component/pages/Profile';
import BlogLayout from '~/component/layouts/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    to: '/product',
                    title: 'trà xanh matcha',
                },
                {
                    id: '2',
                    to: '/product2',
                    title: 'trà xanh sencha',
                },
                {
                    id: '3',
                    to: '/product2',
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
        title: 'liên hệ',
        to: '/contact',
    },
];

const publicRoute = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
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
];
const privateRoute = [];
export { configNavBar, publicRoute, privateRoute };
