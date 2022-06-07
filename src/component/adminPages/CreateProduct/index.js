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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch(actions.postAProduct.postAProductRequest(product));
    };
    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
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
            </Container>
        </div>
    );
}

export default CreateProduct;
