import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from '@mui/material';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import MenuListItem from '~/component/layouts/component/Popper/menuItemCart/MenuListItem';
import MenuListItemLanguage from '~/component/layouts/component/Popper/menuListItemLanguage';
import { configCart, configFeatureAccount, configLanguage } from '~/router';
import MenuSearch from '../Popper/MenuAccount';
import PopperSearch from '../Popper/PopperSearch';

import { useSelector } from 'react-redux';
import Search from '../Search';
import styles from './Action.module.scss';
import { selectorAuthState } from '~/redux/auth/selector';

const cx = classNames.bind(styles);
function Action() {
    const configSearch = {
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        component: <Search />,
    };
    // const auth = useSelector(selectorAuthState);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('searchIcon')}>
                <PopperSearch items={configSearch}> {configSearch.icon}</PopperSearch>
            </div>
            <div className={cx('iconAvatar')}>
                <MenuSearch items={configFeatureAccount}>{configFeatureAccount.avatar}</MenuSearch>
            </div>
            <div className={cx('iconCart')}>
                {' '}
                <MenuListItem items={configCart}>
                    <Badge badgeContent={4} color="success">
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
