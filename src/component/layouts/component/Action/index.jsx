import classNames from 'classnames/bind';
import MenuListItem from '~/component/layouts/component/Popper/menuItemCart/MenuListItem';
import MenuListItemLanguage from '~/component/layouts/component/Popper/menuListItemLanguage';
import { configCart, configFeatureAccount, configLanguage } from '~/router';
import MenuSearch from '../Popper/MenuAccount';
import styles from './Action.module.scss';
const cx = classNames.bind(styles);
function Action() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iconAvatar')}>
                <MenuSearch items={configFeatureAccount}>{configFeatureAccount.avatar}</MenuSearch>
            </div>
            <div className={cx('iconCart')}>
                <MenuListItem items={configCart}>{configCart.icon}</MenuListItem>
            </div>
            <div className={cx('iconLanguage')}>
                <MenuListItemLanguage items={configLanguage}>{configLanguage.icon}</MenuListItemLanguage>
            </div>
        </div>
    );
}

export default Action;
