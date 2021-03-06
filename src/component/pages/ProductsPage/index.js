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
            alert('s???n ph???n ???? c?? trong gi??? h??ng');
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
                                Th????ng hi???u : <span className={cx('colorPrimary')}>{introProduct?.trademark}</span>
                            </span>
                            <span className={cx('split')}></span>
                            <span>
                                T??nh tr???ng : <span className={cx('colorPrimary')}>{introProduct?.status}</span>
                            </span>
                        </div>
                        <div className={cx('price')}>
                            <h3>{introProduct?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h3>{' '}
                            <span className={cx('currency')}>??</span>
                        </div>
                        <div className={cx('intro')}>
                            <p>
                                Ho??n h???o ????? u???ng h??ng ng??y, Tr?? xanh c???a Satoen c?? m??u xanh ng???c b??ch r???c r??? v?? v??? ng???t
                                nh??? t??? nhi??n. ????? se nh??? t??? catechin c???a tr?? c??n b???ng ho??n h???o v??? ng???t t??? c??c axit amin
                                L-theanines
                            </p>
                        </div>
                        <div className={cx('ingredientProduction')}>
                            <b>Th??nh ph???n :</b> <span>Tr?? xanh Special, h????ng hoa Nh??i.</span>
                        </div>
                        <div className={cx('packaging')}>
                            <b>????ng g??i :</b> <span>T??i zip 1kg</span>
                        </div>
                        <div className={cx('expiry')}>
                            <b>H???n s??? d???ng :</b> <span>12 th??ng k??? t??? ng??y s???n xu???t</span>
                        </div>
                        <div className={cx('EanCode')}>
                            <b>EAN code :</b> <span>8938515476480</span>
                        </div>

                        <div className={cx('weight')}>
                            <h3>Tr???ng l?????ng</h3>
                            <Button
                                onClick={handleOder}
                                rounded
                                outline
                                className={cx('customBtn', oder === false ? 'active' : 'notActive')}
                                text>
                                mua l???
                            </Button>
                            <Button
                                onClick={handleOderCall}
                                rounded
                                outline
                                className={cx('customBtn', oder === true ? 'active' : 'notActive')}
                                text>
                                H??n 10kg
                            </Button>
                        </div>
                        {oder === false ? (
                            <div>
                                <div className={cx('amount')}>
                                    <h3>S??? l?????ng</h3>
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
                                        Th??m v??o gi??? h??ng
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Button className={cx('customCall')} rounded>
                                G???i 0394337519
                            </Button>
                        )}

                        <div>
                            <p>G???i ?????t mua: 0394337519 ????? nhanh ch??ng ?????t h??ng</p>
                        </div>
                    </Grid>
                </Grid>
                <div className={cx('breadcrumb_background2')}></div>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="M?? t??? s???n ph???m" />
                        <Tab label="Chi ti???t s???n ph???m" />
                        <Tab label="C??ng b??? an to??n th??c ph???m" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    M?? t??? s???n ph???m ??ang ???????c c???p nh???t
                </TabPanel>
                <TabPanel value={value} index={1}>
                    chi ti???t s???n ph???m ??ang ???????c c???p nh???t
                </TabPanel>
                <TabPanel value={value} index={2}>
                    c??ng b??? an to??n th??c ph???m ??ang ???????c c???p nh???t
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
