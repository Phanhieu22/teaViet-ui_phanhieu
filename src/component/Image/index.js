import { forwardRef } from 'react';
import classnames from 'classnames/bind';
import defaultImg from '~/assets/images/userDefault zip.png';
import styles from './Image.module.scss';
import { UserIcon } from '~/component/icons';
const cx = classnames.bind(styles);
const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    if (src === null) {
        src = UserIcon;
    }
    return (
        <div className={cx('wrapper')}>
            <img ref={ref} className={cx('avatar', className)} src={src} alt={alt} {...props} />
        </div>
    );
});

export default Image;
