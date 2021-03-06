import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/component/layouts/DefaultLayout';
import NotFound404 from '~/component/pages/NotFound404';
import NavigateSetter from '../Navigation';
import { publicRoute } from './index.js';

const Router = () => (
    <BrowserRouter>
        <NavigateSetter />

        <Routes>
            {publicRoute.map((route, index) => {
                let Layout;
                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout == null) {
                    Layout = DefaultLayout;
                }
                let Page = route.component;
                return (
                    <Route
                        key={index}
                        index
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }></Route>
                );
            })}
            <Route
                path="*"
                element={
                    <DefaultLayout>
                        <NotFound404 />
                    </DefaultLayout>
                }
            />
        </Routes>
    </BrowserRouter>
);
export default Router;
