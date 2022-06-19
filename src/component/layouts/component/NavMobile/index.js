import {
    Box,
    Collapse,
    Dialog,
    DialogContent,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import classnames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import Button from '~/component/Button';
import SelectButton from '~/component/SelectButton';
import { configNavBar } from '~/router';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import styles from './NavMobile.module.scss';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const cx = classnames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

function NavMobile({ open, handleClose, handleOpen }) {
    const [x, setX] = useState(false);
    const handleClick = () => {
        setX(!x);
    };
    const list = () => (
        <Box className={cx('swapper')} sx=  {{ width: 250 }} role="presentation">
            <img
                className={cx('logo')}
                src="https://theme.hstatic.net/200000354189/1000743772/14/en_logo.png?v=191"
                alt="logo"
            />
            <List
                sx={{
                    width: '100%',
                    fontSize: '2em',
                }}>
                {configNavBar.map((navItem, index) => {
                    let isParent = !!navItem.children;
                    if (isParent) {
                        return (
                            <div key={index}>
                                <SelectButton title={navItem.title}>
                                    {navItem.children.data.map((nav, index) => {
                                        return (
                                            <span key={nav.id}>
                                                <Link to={nav.to}>
                                                    <ListItemButton onClick={handleClose} sx={{ pl: 3 }}>
                                                        <ListItemText primary={nav.title} />{' '}
                                                        <ListItemIcon></ListItemIcon>
                                                    </ListItemButton>
                                                </Link>
                                            </span>
                                        );
                                    })}
                                </SelectButton>
                            </div>
                        );
                    } else {
                        return (
                            <Link to={navItem.to}>
                                <ListItemButton onClick={handleClose} sx={{ pl: 2 }}>
                                    <ListItemText primary={navItem.title} /> <ListItemIcon></ListItemIcon>
                                </ListItemButton>
                            </Link>

                            // <Button className={cx('customBtn')} to={navItem.to} key={navItem.title}>
                            //     {navItem.title}
                            // </Button>
                        );
                    }
                })}
            </List>
        </Box>
    );
    return (
        <>
            <SwipeableDrawer anchor={'left'} open={open} onClose={handleClose} onOpen={handleOpen}>
                {list()}
            </SwipeableDrawer>
        </>
    );
}

export default NavMobile;
