import { faCartPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { CartIcon, UserIcon } from '~/component/icons';
import Image from '~/component/Image';
import Menu from '~/component/layouts/component/Popper/Menu';
import MenuListItem from '~/component/layouts/component/Popper/Menu/MenuListItem';
import styles from './Action.module.scss';
const cx = classNames.bind(styles);
function Action() {
    const configFeatureAccount = {
        avatar: <FontAwesomeIcon icon={faUserPlus} size="lg" />,
        children: {
            title: 'product',
            data: [
                {
                    id: '1',
                    to: '/account',
                    title: 'Tài khoản',
                },
                {
                    id: '2',
                    to: '/login',
                    title: 'Đăng nhập',
                },
            ],
        },
    };
    const configCart = {
        icon: <FontAwesomeIcon icon={faCartPlus} size="lg" />,
        children: {
            title: 'product',
            data: [
                {
                    id: '1',
                    to: '/item',
                    nameItem: 'Bột trà Houjicha Special 500g',
                    image: 'https://product.hstatic.net/200000354189/product/houjicha_genmai_tea_powder_8ebf5280b5a6428da030e02b7fbf171d_1024x1024.jpg',
                    price: 300.000,
                    quantity: 1,
                },
                {
                    id: '2',
                    to: '/item',
                    nameItem: 'Bột trà Houjicha Special 500g',
                    image: 'https://product.hstatic.net/200000354189/product/houjicha_genmai_tea_powder_8ebf5280b5a6428da030e02b7fbf171d_1024x1024.jpg',
                    price: 400.000,
                    quantity: 1,
                },
            ],
        },
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iconAvatar')}>
                <Menu items={configFeatureAccount}>{configFeatureAccount.avatar}</Menu>
            </div>
            <div className={cx('iconCart')}>
                <MenuListItem items={configCart}>{configCart.icon}</MenuListItem>
            </div>
        </div>
    );
}

export default Action;
