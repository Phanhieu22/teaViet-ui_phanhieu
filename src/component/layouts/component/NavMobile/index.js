import {
    Box, Divider,
    List, ListItemButton, ListItemText,
    SwipeableDrawer
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SelectButton from '~/component/SelectButton';
import { configNavBar } from '~/router';
import styles from './NavMobile.module.scss';
const cx = classnames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const useStyles = makeStyles({
    text: {
        fontSize: '2em !important',
    },
});

function NavMobile({ open, handleClose, handleOpen }) {
    const classes = useStyles();
    const [x, setX] = useState(false);
    const handleClick = () => {
        setX(!x);
    };
    const list = () => (
        <Box className={cx('swapper')} sx={{ width: 250 }} role="presentation">
            <img
                className={cx('logo')}
                src="https://theme.hstatic.net/200000354189/1000743772/14/en_logo.png?v=191"
                alt="logo"
            />
            <List
                sx={{
                    width: '100%',
                }}>
                {configNavBar.map((navItem, index) => {
                    let isParent = !!navItem.children;
                    if (isParent) {
                        return (
                            <div key={index}>
                                <SelectButton title={navItem.title}>
                                    {navItem.children.data.map((nav, index) => {
                                        return (
                                            <Link key={nav.id} to={nav.to}>
                                                <ListItemButton onClick={handleClose} sx={{ pl: 3 }}>
                                                    <ListItemText
                                                        primaryTypographyProps={{ fontSize: '1.2em' }}
                                                        primary={nav.title}
                                                    />{' '}
                                                </ListItemButton>
                                            </Link>
                                        );
                                    })}
                                    <Divider />
                                </SelectButton>
                            </div>
                        );
                    } else {
                        return (
                            <Link key={navItem.title} to={navItem.to}>
                                <ListItemButton onClick={handleClose} sx={{ pl: 2 }}>
                                    <ListItemText
                                        primaryTypographyProps={{ fontSize: '1.2em' }}
                                        primary={navItem.title}
                                    />{' '}
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
