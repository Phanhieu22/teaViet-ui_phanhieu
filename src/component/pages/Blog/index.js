import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../redux/auth/action';

function Blog(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser.getUserRequest());
    }, []);
    return (
        <>
            <h1>blog page</h1>
        </>
    );
}

export default Blog;
