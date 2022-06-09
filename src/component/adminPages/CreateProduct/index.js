import { Container, Grid } from '@mui/material';
import classnames from 'classnames/bind';
import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import Button from '~/component/Button';

import InputField2 from '~/component/InputField2';
import styles from './CreateProduct.module.scss';

import { useDispatch } from 'react-redux';
import * as actions from '~/redux/collections/actions';
const cx = classnames.bind(styles);

function CreateProduct() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        nameProduct: '',
        trademark: '',
        productPortfolio: '',
        status: '',
        price: 0,
        thumbnail: '',
    });
    const [detailProduct, setDetailProduct] = useState({
        nameProduct: '',
        ingredients: '',
        packaging: '',
        expiryDate: '',
        eadCode: '',
        descriptionProduct: '',
        productDetailer: '',
        foodSafe: '',
        imageProduct: [],
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch(actions.postAProduct.postAProductRequest(product));
    };
    const handleSubmitDetail = (e) => {
        e.preventDefault();

        console.log(detailProduct);
    };
    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };
    const handleChangeDetailProduct = (event) => {
        setDetailProduct({ ...detailProduct, [event.target.name]: event.target.value });
    };
    return (
        <div className={cx('wrapper')}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Tên sản phẩm</h5>
                                <InputField2
                                    valueInput={product.nameProduct}
                                    handelChangeInput={handleChange}
                                    name="nameProduct"
                                    placeholder="Tên sản phẩm"
                                    width={500}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Thương hiệu</h5>
                                <InputField2
                                    valueInput={product.tradeMark}
                                    handelChangeInput={handleChange}
                                    name="trademark"
                                    placeholder={'thương hiệu'}
                                    width={500}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>loại sản phẩm</h5>
                                <InputField2
                                    valueInput={product.productPortfolio}
                                    handelChangeInput={handleChange}
                                    name="productPortfolio"
                                    placeholder="Vd : Trà xanh matcha"
                                    width={320}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>Trạng Thái </h5>
                                <InputField2
                                    valueInput={product.status}
                                    handelChangeInput={handleChange}
                                    name="status"
                                    placeholder="Trạng Thái"
                                    width={320}
                                />
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>Giá bán</h5>
                                <InputField2
                                    valueInput={product.price}
                                    handelChangeInput={handleChange}
                                    name="price"
                                    type="number"
                                    placeholder="Giá bán"
                                    width={320}
                                />
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>choose file thumbnail</h5>
                                <FileBase64
                                    accept="image/*"
                                    multiple={false}
                                    type="file"
                                    value={product.thumbnail}
                                    onDone={({ base64 }) => setProduct({ ...product, thumbnail: base64 })}
                                />
                            </div>
                        </Grid>{' '}
                        <Button className={cx('customBtn')} type="submit">
                            tạo mới
                        </Button>
                    </Grid>{' '}
                </form>

                <div className={cx('title')}>
                    <h2></h2>
                </div>
                <form onSubmit={handleSubmitDetail}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Tên sản phẩm</h5>
                                <InputField2
                                    valueInput={detailProduct.nameProduct}
                                    handelChangeInput={handleChangeDetailProduct}
                                    name="nameProduct"
                                    placeholder="Tên sản phẩm"
                                    width={500}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Thành phần</h5>
                                <InputField2
                                    valueInput={detailProduct.ingredients}
                                    handelChangeInput={handleChangeDetailProduct}
                                    name="ingredients"
                                    placeholder={'Thành phần'}
                                    width={500}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>Đóng gói</h5>
                                <InputField2
                                    valueInput={detailProduct.packaging}
                                    handelChangeInput={handleChangeDetailProduct}
                                    name="packaging"
                                    placeholder="cách thức đóng gói"
                                    width={320}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>Hạn sử dụng</h5>
                                <InputField2
                                    valueInput={detailProduct.expiryDate}
                                    handelChangeInput={handleChangeDetailProduct}
                                    name="expiryDate"
                                    placeholder="Hạn sử dụng"
                                    width={320}
                                />
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={4}>
                            <div className={cx('inputField')}>
                                <h5>EAD code</h5>
                                <InputField2
                                    valueInput={detailProduct.eadCode}
                                    handelChangeInput={handleChangeDetailProduct}
                                    name="eadCode"
                                    placeholder="EAD code"
                                    width={320}
                                />
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Giới thiệu sản phẩm</h5>
                                <textarea
                                    name="descriptionProduct"
                                    onChange={handleChangeDetailProduct}
                                    rows="7"
                                    value={detailProduct.descriptionProduct}
                                    cols="60">
                                    {detailProduct.descriptionProduct}
                                </textarea>
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Chi tiết sản phẩm</h5>
                                <textarea
                                    name="productDetailer"
                                    onChange={handleChangeDetailProduct}
                                    value={detailProduct.productDetailer}
                                    rows="7"
                                    cols="60">
                                    {detailProduct.productDetailer}
                                </textarea>
                            </div>
                        </Grid>{' '}
                        <Grid item xs={12} md={6}>
                            <div className={cx('inputField')}>
                                <h5>Công bố an toàn vệ sinh thực phẩm</h5>
                                <textarea
                                    value={detailProduct.foodSafe}
                                    name="foodSafe"
                                    onChange={handleChangeDetailProduct}
                                    rows="7"
                                    cols="60">
                                    {detailProduct.foodSafe}
                                </textarea>
                            </div>
                        </Grid>{' '}
                        <Button className={cx('customBtnDetail')} type="submit">
                            tạo mới
                        </Button>
                    </Grid>{' '}
                </form>
            </Container>
        </div>
    );
}

export default CreateProduct;
