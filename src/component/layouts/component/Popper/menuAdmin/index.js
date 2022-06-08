import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import styles from './MenuAdmin.module.scss';
import { useDispatch } from 'react-redux';
import { editProduct } from '~/redux/product/actions';
import { deleteProduct } from '~/redux/collections/actions';

const cx = classnames.bind(styles);
const MenuAdmin = forwardRef(({ children, onChange, item }, ref) => {
    const dispatch = useDispatch();
    const handlePushDataToRedux = (e) => {
        console.log('click');

        dispatch(editProduct.pushDataProductToReducer(item));
    };
    const handleDel = () => {
        var answer = window.confirm(`bạn có chắc chắn muốn xoá sản phẩm ${item.nameProduct} không ?`);
        if (answer) {
            dispatch(deleteProduct.deleteProductRequest(item?._id));
            
        } else {
        }
    };
    return (
        <div ref={ref} className={cx('menu')}>
            <Tippy
                interactive
                offset={[12, 8]}
                placement="left"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('customWrapper')}>
                            <div
                                className={cx('menuItems')}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                <Button
                                    to={`/admin/edit/${item.slug}`}
                                    onClick={handlePushDataToRedux}
                                    className={cx('menu-item')}>
                                    Chỉnh sửa{' '}
                                </Button>{' '}
                                <Button onClick={handleDel} className={cx('menu-item')}>
                                    Xoá{' '}
                                </Button>{' '}
                                <Button className={cx('menu-item')}>Thêm chi tiết</Button>
                            </div>
                        </WrapperPopper>
                    </div>
                )}>
                {children}
            </Tippy>
        </div>
    );
});

export default MenuAdmin;
