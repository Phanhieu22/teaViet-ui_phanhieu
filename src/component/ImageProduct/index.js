import styles from './ImageProduct.module.scss';
import classnames from 'classnames/bind';
import { Skeleton } from '@mui/material';

const cx = classnames.bind(styles);

function ImageProduct({ img }) {
    return (
        <div className={cx('wrapper')}>
            {img ? (
                <>
                    {' '}
                    <img className={cx('productImage')} src={img} alt="product image" />
                    <div className={cx('thumbnailWrapper')}>
                        <img src={img} className={cx('thumbnail')} alt="product image" />
                    </div>
                </>
            ) : (
                <>
                    <Skeleton sx={{ height: 500 }} animation="wave" variant="rectangular" />
                </>
            )}
        </div>
    );
}

export default ImageProduct;
