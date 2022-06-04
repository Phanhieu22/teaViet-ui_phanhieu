import styles from './Breadcrumb_bg.module.scss';
import classnames from 'classnames/bind';
import { Breadcrumbs, Link } from '@mui/material';

const cx = classnames.bind(styles);
function Breadcrumb_bg({ title, level1, level2, level3, level4, toLv1, toLv2, toLv3 }) {
    return (
        <div className={cx('breadcrumb_background')}>
            <div className={cx('breadcrumb')}>
                <h3>{title}</h3>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href={toLv1}>
                        {level1}
                    </Link>
                    <Link underline="hover" color="inherit" href={toLv2}>
                        {level2}
                    </Link>
                    <Link underline="hover" color="inherit" href={toLv3}>
                        {level3}
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default Breadcrumb_bg;
