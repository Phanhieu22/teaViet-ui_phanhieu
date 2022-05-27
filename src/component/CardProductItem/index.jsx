import styles from './CardproductItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CardProductItem() {
    const item = {
        img: 'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
        nameItem: 'Trà xanh Matcha hương Nhài 100g',
        price: 125000,
        to: '/detailItem',
    };
    return (
        <Link to={item.to}>
            <div className={cx('wrapper')}>
                <img className={cx('image')} src={item.img} />
                <div className={cx('wrapperContent')}>
                    <h5 className={cx('nameItem')}>{item.nameItem}</h5>
                    <span className={cx('price')}>
                        {item.price}
                        <span className={cx('currency')}>đ</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default CardProductItem;
