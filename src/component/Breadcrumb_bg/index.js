import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Link } from '@mui/material';
import classnames from 'classnames/bind';
import styles from './Breadcrumb_bg.module.scss';
const cx = classnames.bind(styles);
function Breadcrumb_bg({ title, level2, level3, level4, toLv2, toLv3 }) {
    return (
        <div className={cx('breadcrumb_background')}>
            <div className={cx('breadcrumb')}>
                <h3>{title}</h3>
                <div>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="medium" />} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href={'/'}>
                            <span className={cx('iconHome')}>
                                {' '}
                                <HomeIcon sx={{ marginTop: '5px' }} color="inherit" fontSize="large" />
                            </span>
                        </Link>
                        <Link underline="hover" color="info" href={toLv2}>
                            {level2}
                        </Link>
                        <Link underline="hover" color="inherit" href={toLv3}>
                            {level3}
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb_bg;
