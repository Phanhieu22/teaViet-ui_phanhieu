import Button from '~/component/Button';
import classnames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './MenuItemCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectorAuthState } from '~/redux/auth/selector';
import { addProductToCart, removeProductInCart } from '~/redux/auth/action';
const cx = classnames.bind(styles);
function MenuItemCart({ data, onClick = () => {} }) {
    const dispatch = useDispatch();
    const authState = useSelector(selectorAuthState);
    const cartUser = authState?.user?.cart;

    const handleDelProduct = (e) => {
        e.preventDefault();
        const payload = { idUser: data.idUser, idProduct: data.id };

        dispatch(removeProductInCart.removeProductInCartRequest(payload));
    };
    return (
        <div>
            <Button to={data.to} className={cx('wrapper')} onClick={onClick}>
                <div className={cx('container')}>
                    <div>
                        <Image className={cx('image')} src={data.image} />
                    </div>
                    <div className={cx('content')}>
                        <h3 className={cx('name')}>{data.nameItem}</h3>
                        <h4 className={cx('price')}>
                            {`${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ * ${data.quality} `}
                        </h4>
                    </div>
                    <div className={cx('cancel')}>
                        <FontAwesomeIcon icon={faXmark} onClick={handleDelProduct} />
                    </div>
                </div>
            </Button>
        </div>
    );
}

export default MenuItemCart;
