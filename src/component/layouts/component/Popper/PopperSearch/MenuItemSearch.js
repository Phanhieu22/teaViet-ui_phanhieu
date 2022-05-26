import Button from '~/component/Button';
import classnames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './PopperSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);
function MenuItemSearch({ data, onClick = () => {} }) {
    const Search = data.component;
    return <>{data.component}</>;
}

export default MenuItemSearch;
