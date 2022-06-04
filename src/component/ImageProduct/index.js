import styles from './ImageProduct.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function ImageProduct({ img }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('productImage')} src={img} alt="product image" />
            <div className={cx('thumbnailWrapper')}>
                <img src={img} className={cx('thumbnail')} alt="product image" />
            </div>
        </div>
    );
}

export default ImageProduct;
