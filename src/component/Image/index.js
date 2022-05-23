import { forwardRef } from 'react';
import classnames from 'classnames/bind';
import defaultImg from '~/assets/images/userDefault zip.png';
import styles from './Image.module.scss';
const cx = classnames.bind(styles);
const Image = forwardRef(({ className, src = defaultImg, alt }, ref) => {
    return (
        <div className={cx('wrapper')}>
            <img
                ref={ref}
                className={cx('avatar', className)}
                src={src}
                alt={alt}
            />
        </div>
    );
});

export default Image;
