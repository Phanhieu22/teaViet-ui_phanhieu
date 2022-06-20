import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb_bg from '~/component/Breadcrumb_bg';
import Button from '~/component/Button';
import CardProductItem from '~/component/CardProductItem';
import ImageProduct from '~/component/ImageProduct';
import { addProductToCart } from '~/redux/auth/action';
import { selectorAuthState } from '~/redux/auth/selector';
import { selectorCollections } from '~/redux/collections/selector';
import { getOneProduct } from '~/redux/product/actions';
import { selectObjectEditing } from '~/redux/product/selector';
import formatProductPortfolio from '~/utils/formatProductPortfolio';
import styles from './product.module.scss';

const cx = classnames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const ProductsPage = () => {
    const [value, setValue] = useState(0);
    const [widthScreen, setWidthScreen] = useState(0);

    const [oder, setOder] = useState(false);
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();

    const { slug } = useParams();
    useEffect(() => {
        dispatch(getOneProduct.request(slug));
        window.scrollTo(0, 0);
        setAmount(1);
    }, [slug]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const introProduct = useSelector(selectObjectEditing);
    const authState = useSelector(selectorAuthState);
    const cartUser = authState?.user?.cart;
    const idUser = authState?.user?._id;

    const data = useSelector(selectorCollections);
    const handleOderCall = () => {
        setOder(true);
    };
    const handleOder = () => {
        setOder(false);
    };
    const checkOutEditingProduct = (newProductInCart) => {
        const item = cartUser.find((item) => item.id === newProductInCart.id);
        if (item) {
            return false;
        } else {
            return true;
        }
    };
    const handleAddToCart = () => {
        const newProductInCart = {
            thumbnail: introProduct.thumbnail,
            nameProduct: introProduct.nameProduct,
            price: introProduct.price,
            amount,
            slug: introProduct.slug,
            id: introProduct._id,
            idUser: idUser,
        };
        if (newProductInCart && checkOutEditingProduct(newProductInCart)) {
            const newCart = cartUser.push(newProductInCart);
            dispatch(addProductToCart.addProductToCartRequest({ idUser: idUser, cartUser }));
        } else {
            alert('sản phẩn đã có trong giỏ hàng');
        }
    };
    const navLink = `/collections/${introProduct.productPortfolio}`;
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb_bg
                title={formatProductPortfolio(introProduct.productPortfolio)}
                level2={formatProductPortfolio(introProduct.productPortfolio)}
                toLv2={navLink}
                level3={introProduct.nameProduct}
            />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <ImageProduct img={introProduct?.thumbnail} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('nameProduct')}>
                            <h2>{introProduct?.nameProduct}</h2>
                        </div>
                        <div className={cx('status')}>
                            <span>
                                Thương hiệu : <span className={cx('colorPrimary')}>{introProduct?.trademark}</span>
                            </span>
                            <span className={cx('split')}></span>
                            <span>
                                Tình trạng : <span className={cx('colorPrimary')}>{introProduct?.status}</span>
                            </span>
                        </div>
                        <div className={cx('price')}>
                            <h3>{introProduct?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h3>{' '}
                            <span className={cx('currency')}>đ</span>
                        </div>
                        <div className={cx('intro')}>
                            <p>
                                Hoàn hảo để uống hàng ngày, Trà xanh của Satoen có màu xanh ngọc bích rực rỡ và vị ngọt
                                nhẹ tự nhiên. Độ se nhẹ từ catechin của trà cân bằng hoàn hảo vị ngọt từ các axit amin
                                L-theanines
                            </p>
                        </div>
                        <div className={cx('ingredientProduction')}>
                            <b>Thành phần :</b> <span>Trà xanh Special, hương hoa Nhài.</span>
                        </div>
                        <div className={cx('packaging')}>
                            <b>Đóng gói :</b> <span>Túi zip 1kg</span>
                        </div>
                        <div className={cx('expiry')}>
                            <b>Hạn sử dụng :</b> <span>12 tháng kể từ ngày sản xuất</span>
                        </div>
                        <div className={cx('EanCode')}>
                            <b>EAN code :</b> <span>8938515476480</span>
                        </div>

                        <div className={cx('weight')}>
                            <h3>Trọng lượng</h3>
                            <Button
                                onClick={handleOder}
                                rounded
                                outline
                                className={cx('customBtn', oder === false ? 'active' : 'notActive')}
                                text>
                                mua lẻ
                            </Button>
                            <Button
                                onClick={handleOderCall}
                                rounded
                                outline
                                className={cx('customBtn', oder === true ? 'active' : 'notActive')}
                                text>
                                Hơn 10kg
                            </Button>
                        </div>
                        {oder === false ? (
                            <div>
                                <div className={cx('amount')}>
                                    <h3>Số lượng</h3>
                                    <Button
                                        onClick={() => {
                                            if (amount <= +1) {
                                                setAmount(amount);
                                            } else {
                                                setAmount(amount - 1);
                                            }
                                        }}
                                        className={cx('customBtn2')}
                                        count>
                                        -
                                    </Button>
                                    <Button className={cx('customBtn2')} count>
                                        {amount}
                                    </Button>
                                    <Button onClick={() => setAmount(amount + 1)} className={cx('customBtn2')} count>
                                        +
                                    </Button>
                                </div>
                                <div className={cx('buyButton')}>
                                    <Button rounded outline className={cx('customBtn')}>
                                        {' '}
                                        Mua ngay
                                    </Button>
                                    <Button onClick={handleAddToCart} rounded outline className={cx('customBtn')}>
                                        {' '}
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Button className={cx('customCall')} rounded>
                                Gọi 0394337519
                            </Button>
                        )}

                        <div>
                            <p>Gọi đặt mua: 0394337519 để nhanh chóng đặt hàng</p>
                        </div>
                    </Grid>
                </Grid>
                <div className={cx('breadcrumb_background2')}></div>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Mô tả sản phẩm" />
                        <Tab label="Chi tiết sản phẩm" />
                        <Tab label="Công bố an toàn thưc phẩm" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Mô tả sản phẩm đang được cập nhật
                </TabPanel>
                <TabPanel value={value} index={1}>
                    chi tiết sản phẩm đang được cập nhật
                </TabPanel>
                <TabPanel value={value} index={2}>
                    công bố an toàn thưc phẩm đang được cập nhật
                </TabPanel>

                <div className={cx('title')}>
                    <h2></h2>
                </div>
                <Grid className={cx('items')} spacing={3} container>
                    {data.map((item, index) => (
                        <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
                            <CardProductItem key={index} item={item} />{' '}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default ProductsPage;
