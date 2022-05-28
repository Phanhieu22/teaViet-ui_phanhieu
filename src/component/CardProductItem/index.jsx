import { faGear } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/component/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/component/Button';
import styles from './CardproductItem.module.scss';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CardProductItem({ item }) {
    return (
        <Link to={item.to}>
            <div className={cx('wrapper')}>
                <img className={cx('image')} src={item.thumbnail} />
                <div className={cx('wrapperContent')}>
                    <div className={cx('nameItem')}>
                        <h5>{item.nameItem}</h5>
                    </div>
                    <span className={cx('price')}>
                        {item.price}
                        <span className={cx('currency')}>đ</span>
                    </span>
                </div>
                <div className={cx('layer')}>
                    <div className={cx('buttonWrapper')}>
                        <Tippy placement="bottom" content="Cài đặt">
                            <Button outline rounded className={cx('customBtn')} icon>
                                <FontAwesomeIcon icon={faGear} />
                            </Button>
                        </Tippy>
                        <Tippy placement="bottom" content="Xem nhanh">
                            <Button outline rounded className={cx('customBtn')} icon>
                                <SearchIcon width="1.4em" height="1.4em" />
                            </Button>
                        </Tippy>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardProductItem;
