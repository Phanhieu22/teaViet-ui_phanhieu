import classnames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { configNavBar } from '~/router';
import Menu from '../Popper/Menu';
import MenuItem from '../Popper/Menu/MenuItems';
import Search from '../Search';
import Action from '../Action';
import Button from '~/component/Button';
const cx = classnames.bind(styles);

function NavBar() {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="logo">
                    <Button className={cx('logo')} to="/">logo</Button>
                </div>
                <div className={cx('navigation')}>
                    {configNavBar.map((navItem, index) => {
                        let isParent = !!navItem.children;
                        if (isParent) {
                            return (
                                <Menu key={index} items={navItem}>
                                    {navItem.title}
                                </Menu>
                            );
                        } else {
                            return <MenuItem data={navItem} />;
                        }
                    })}
                </div>
                <div className={cx('search')}>
                    <Search />
                </div>
                <div className={cx('action')}>
                    <Action />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
