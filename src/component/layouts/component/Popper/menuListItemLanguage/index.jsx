import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import MenuItemLanguage from './ListItemLanguage';
import styles from './MenuItemLanguage.module.scss';
const cx = classnames.bind(styles);
const MenuListItemLanguage = forwardRef(({ children, items, onChange }, ref) => {
  let isParent = !!items.children;

  // logic change language
  const handlerChangeLanguage = (item) => {
    console.log(item);
  };
  const renderItems = () => {
    if (isParent === true) {
      return items.children.data.map((item) => (
        <MenuItemLanguage
          key={item.id}
          data={item}
          onClick={() => {
            handlerChangeLanguage(item);
          }}
        />
      ));
    }
  };

  return (
    <div ref={ref} className={cx('menu')}>
      <Tippy
        interactive
        offset={[12, 8]}
        placement="bottom-end"
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('customWrapper')}>
              <div className={cx('memuItems')}>{renderItems()}</div>
            </WrapperPopper>
          </div>
        )}>
        <Button icon>{children}</Button>
      </Tippy>
    </div>
  );
});

export default MenuListItemLanguage;
