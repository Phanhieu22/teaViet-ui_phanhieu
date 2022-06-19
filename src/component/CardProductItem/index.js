import { faGear, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import { SearchIcon } from '~/component/icons';
import { getAllCollections } from '~/redux/collections/actions';
import MenuAdmin from '../layouts/component/Popper/menuAdmin';

import classnames from 'classnames/bind';
import styles from './productItem.module.scss';

const cx = classnames.bind(styles);

function CardProductItem({ item, onClick, className, setting, guide, search, favorite = true, ...passProps }) {
    const props = {
        [className]: className,
        onClick,

        ...passProps,
    };

    const dispatch = useDispatch();
    const handleGetDataProduct = () => {
        dispatch(getAllCollections.getAllCollectionsRequest(item.productPortfolio));
    };
    return (
        <Link onClick={handleGetDataProduct} to={`/products/${item.slug}`}>
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
                                <Button outline rounded className={cx('customBtn')} icon>
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
                    </div>{' '}
                    {favorite && (
                        <div
                            className={cx('favorite')}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            <Button icon favorite>
                                <FontAwesomeIcon size="2x" icon={faHeart} />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default CardProductItem;
