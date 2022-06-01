import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/component/Button';
import { configNavBar } from '~/router';
import Action from '../Action';
import NavMobile from '../NavMobile';
import Menu from '../Popper/Menu';
import MenuItem from '../Popper/Menu/MenuItems';
import Search from '../Search';
import styles from './NavBar.module.scss';
const cx = classnames.bind(styles);

function NavBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('navigationMobile')}>
                    <FontAwesomeIcon className={cx('iconBars')} icon={faBars} onClick={handleClickOpen} />
                    <NavMobile open={open} handleClose={handleClose}/>
                </div>
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
