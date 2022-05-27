import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import Button from '~/component/Button';
import { configNavBar } from '~/router';
import Action from '../Action';
import Menu from '../Popper/Menu';
import MenuItem from '../Popper/Menu/MenuItems';
import Search from '../Search';
import styles from './NavBar.module.scss';
const cx = classnames.bind(styles);

function NavBar() {
    const configSearch = {
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        component: <Search />,
    };
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('navigationMobile')}>mobile</div>
                <div className="logo">
                    <Button className={cx('logo')} to="/">
                        logo
                    </Button>
                </div>
                <div className={cx('navigationDesktop')}>
                    {configNavBar.map((navItem, index) => {
                        let isParent = !!navItem.children;
                        if (isParent) {
                            return (
                                <Menu key={index} items={navItem}>
                                    {navItem.title}
                                </Menu>
                            );
                        } else {
                            return <MenuItem key={index} data={navItem} />;
                        }
                    })}
                </div>
                <div className={cx('searchDesktop')}>
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
