import { Dialog, DialogContent } from '@mui/material';
import Slide from '@mui/material/Slide';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import SelectButton from '~/component/SelectButton';
import { configNavBar } from '~/router';
import styles from './NavMobile.module.scss';
const cx = classnames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

function NavMobile({ open, handleClose }) {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            className={cx('container')}
            aria-describedby="alert-dialog-slide-description">
            <img
                className={cx('logo')}
                src="https://theme.hstatic.net/200000354189/1000743772/14/en_logo.png?v=191"
                alt="logo"
            />
            <DialogContent>
                {configNavBar.map((navItem, index) => {
                    let isParent = !!navItem.children;
                    if (isParent) {
                        return (
                            <div key={index}>
                                <SelectButton title={navItem.title}>
                                    {navItem.children.data.map((nav, index) => {
                                        return (
                                            <span key={nav.id}>
                                                <Button className={cx('customBtn')} to={nav.to}>
                                                    {nav.title}
                                                </Button>
                                            </span>
                                        );
                                    })}
                                </SelectButton>
                            </div>
                        );
                    } else {
                        return (
                            <Button className={cx('customBtn')} to={navItem.to} key={navItem.title}>
                                {navItem.title}
                            </Button>
                        );
                    }
                })}
            </DialogContent>
        </Dialog>
    );
}

export default NavMobile;
