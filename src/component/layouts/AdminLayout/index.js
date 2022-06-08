import styles from './AdminLayout.module.scss';
import classnames from 'classnames/bind';

import Grid from '@mui/material/Grid';
import { configAdminNav, configNavBar } from '~/router';
import SelectButton from '~/component/SelectButton';
import Button from '~/component/Button';
const cx = classnames.bind(styles);

function AdminLayout({ children }) {
    return (
        <Grid container>
            <Grid item xs={2} className={cx('wrapperNav')}>
                <div className={cx('nav')}>
                    {configAdminNav.map((navItem, index) => {
                        let isParent = !!navItem.children;
                        if (isParent) {
                            return (
                                <div key={index}>
                                    <SelectButton title={navItem.title}>
                                        {navItem.children.data.map((nav) => (
                                            <span key={nav.id}>
                                                <Button className={cx('customBtn')} to={nav.to}>
                                                    {nav.title}
                                                </Button>
                                            </span>
                                        ))}
                                    </SelectButton>
                                </div>
                            );
                        } else {
                            return (
                                <Button className={cx('customBtn')} to={navItem.to}>
                                    {navItem.title}
                                </Button>
                            );
                        }
                    })}
                </div>
            </Grid>
            <Grid item xs={10} className={cx('content')}>
                <div className={cx('breadcrumb_background')}></div>
                {children}
            </Grid>
        </Grid>
    );
}

export default AdminLayout;
