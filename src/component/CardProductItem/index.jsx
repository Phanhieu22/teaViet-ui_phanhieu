import { faGear } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/component/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/component/Button';
import styles from './CardproductItem.module.scss';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CardProductItem({ item, onClick, className, setting, guide, search, ...passProps }) {
    const props = {
        [className]: className,
        onClick,
        ...passProps,
    };
    return (
        <Link to={item.to}>
            <div {...props} className={cx('wrapper', { guide })}>
                <img className={cx('image')} src={item.thumbnail} />
                <div className={cx('wrapperContent')}>
                    <div className={cx('nameItem')}>
                        <h5>{item.nameItem}</h5>
                    </div>
                    {guide ? (
                        <Button className={cx('contact')} text>
                            Liên hệ
                        </Button>
                    ) : (
                        <span className={cx('price')}>
                            {item.price}
                            <span className={cx('currency')}>đ</span>
                        </span>
                    )}
                </div>
                <div className={cx('layer')}>
                    <div className={cx('buttonWrapper')}>
                        {setting && (
                            <Tippy placement="bottom" content="Cài đặt">
                                <Button outline rounded className={cx('customBtn')} icon>
                                    <FontAwesomeIcon icon={faGear} />
                                </Button>
                            </Tippy>
                        )}
                        {search && (
                            <Tippy placement="bottom" content="Xem nhanh">
                                <Button outline rounded className={cx('customBtn')} icon>
                                    <SearchIcon width="1.4em" height="1.4em" />
                                </Button>
                            </Tippy>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardProductItem;
