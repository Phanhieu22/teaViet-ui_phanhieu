import Button from '~/component/Button';
import classnames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './MenuItemLanguage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);
function MenuItemLanguage({ data, onClick = () => {} }) {
  return (
    <div>
      <Button to={data.to} className={cx('wrapper')} onClick={onClick}>
        <div className={cx('container')}>
          <div className={cx('icon')}>{data.icon}</div>
          <div className={cx('language')}>
            <h5>{data.title}</h5>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default MenuItemLanguage;
