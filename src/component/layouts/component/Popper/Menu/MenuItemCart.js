import Button from '~/component/Button';
import classnames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './MenuItemCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);
function MenuItemCart({ data, onClick = () => {} }) {
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
              {data.price} * {data.quantity}
            </h4>
          </div>
          <div className={cx('cancel')}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </Button>
    </div>
  );
}

export default MenuItemCart;
