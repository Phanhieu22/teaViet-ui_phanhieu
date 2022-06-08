import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import { SearchIcon } from '~/component/icons';
import MenuAdmin from '../layouts/component/Popper/menuAdmin';
import styles from './CardProductItem.module.scss';

import { useDispatch } from 'react-redux';
import { editProduct } from '~/redux/product/actions';
const cx = classNames.bind(styles);

function CardProductItem({ item, onClick, className, setting, guide, search, ...passProps }) {
    const props = {
        [className]: className,
        onClick,
        ...passProps,
    };

    const dispatch = useDispatch();
    
    return (
        <Link to={`/products/${item.slug}`}>
            <div {...props} className={cx('wrapper', { guide })}>
                <img className={cx('image')} src={item.thumbnail} />
                <div className={cx('wrapperContent')}>
                    <div className={cx('nameItem')}>
                        <h5>{item.nameProduct}</h5>
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
                            <MenuAdmin item={item}>
                                <Button
                                    outline
                                    rounded
                                    
                                    className={cx('customBtn')}
                                    icon>
                                    <FontAwesomeIcon icon={faGear} />
                                </Button>
                            </MenuAdmin>
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
