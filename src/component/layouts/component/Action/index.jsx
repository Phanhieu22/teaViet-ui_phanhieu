import { faCartPlus, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from '@mui/material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import MenuListItem from '~/component/layouts/component/Popper/menuItemCart/MenuListItem';
import MenuListItemLanguage from '~/component/layouts/component/Popper/menuListItemLanguage';
import { logoutUser } from '~/redux/auth/action';
import { selectCartUser, selectorAuthState } from '~/redux/auth/selector';
import { configLanguage } from '~/router';
import MenuAccount from '../Popper/MenuAccount';
import PopperSearch from '../Popper/PopperSearch';
import Search from '../Search';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Action() {
    const dispatch = useDispatch();
    const auth = useSelector(selectorAuthState);
    const cart = useSelector(selectCartUser);

    const configSearch = {
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        component: <Search />,
    };

    const configFeatureAccountNotLogin = {
        avatar: <FontAwesomeIcon icon={faUserPlus} />,
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
                    to: '/register',
                    title: 'Đăng ký',
                },
                {
                    id: '3',
                    to: '/login',
                    title: 'Đăng nhập',
                },
            ],
        },
    };
    const configFeatureAccountLogin = {
        avatar: <FontAwesomeIcon icon={faUserPlus} />,
        children: {
            title: 'product',
            data: [
                {
                    id: '1',
                    to: '/account',
                    title: 'Tài khoản',
                },
                {
                    id: '3',
                    title: 'Đăng xuất',
                    onclick: (logout) => {
                        var answer = window.confirm('bạn có chắc chắn muốn đăng xuất ?');
                        if (answer) {
                            dispatch(logoutUser.logoutUseRequest());
                            toast.success('Đăng xuất thành công');
                        } else {
                        }
                    },
                },
            ],
        },
    };
    const configCart = {
        icon: <FontAwesomeIcon icon={faCartPlus} />,
        children: {
            title: 'product',
            data: cart
                ? cart.map((item) => {
                      return {
                          id: item.id,
                          to: `/products/${item.slug}`,
                          nameItem: item.nameProduct,
                          image: item.thumbnail,
                          price: item.price,
                          quality: item.amount,
                          idUser: item.idUser,
                      };
                  })
                : [],
        },
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('searchIcon')}>
                <PopperSearch items={configSearch}> {configSearch.icon}</PopperSearch>
            </div>
            <div className={cx('iconAvatar')}>
                <MenuAccount items={!!auth.user ? configFeatureAccountLogin : configFeatureAccountNotLogin}>
                    {configFeatureAccountLogin.avatar}
                </MenuAccount>
            </div>
            <div className={cx('iconCart')}>
                {' '}
                <MenuListItem items={configCart}>
                    <Badge badgeContent={cart?.length} color="success">
                        {configCart.icon}
                    </Badge>
                </MenuListItem>
            </div>

            <div className={cx('iconLanguage')}>
                <MenuListItemLanguage items={configLanguage}>{configLanguage.icon}</MenuListItemLanguage>
            </div>
        </div>
    );
}

export default Action;
