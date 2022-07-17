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
import EditProduct from '~/component/adminPages/EditProduct';
import AllProduct from '~/component/adminPages/AllProduct';
import Intro from '~/component/pages/Intro';
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
                    to: '/collections/tat-ca-san-pham',
                    title: 'Tất cả sản phẩm',
                },
                {
                    id: '2',
                    to: '/collections/tra-xanh-matcha',
                    title: 'Trà xanh matcha',
                },
                {
                    id: '3',
                    to: '/collections/tra-xanh-sencha',

                    title: 'Trà xanh sencha',
                },
                {
                    id: '4',
                    to: '/collections/tra-xanh-komachi',

                    title: 'Trà xanh komachi',
                },
                {
                    id: '5',
                    to: '/collections/tra-xanh-houijcha',
                    title: 'Trà xanh houijcha',
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
                    id: '4',
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
                    id: '5',
                    to: '/knowledge',
                    title: 'kiến thưc pha trà',
                },
                {
                    id: '6',
                    to: '/knowledge',
                    title: 'câu hỏi thường gặp',
                },
            ],
        },
    },
    { id: '9', icon: null, title: 'Tin tức', to: '/news' },
    {
        id: '10',
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
                    id: '4',
                    to: '/admin/business',
                    title: 'chăm sóc khách hàng',
                },
            ],
        },
    },
];

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
        path: '/intro',
        component: Intro,
    },
    {
        path: '/admin/createProduct',
        component: CreateProduct,
        layout: AdminLayout,
    },
    {
        path: '/admin/edit/:slug',
        layout: AdminLayout,
        component: EditProduct,
    },
    {
        path: '/admin/edit',
        layout: AdminLayout,
        component: EditProduct,
    },
    {
        path: '/admin/allProduct',
        layout: AdminLayout,
        component: AllProduct,
    },
];
const privateRoute = [];
export { configNavBar, configLanguage, publicRoute, privateRoute, configAdminNav };
