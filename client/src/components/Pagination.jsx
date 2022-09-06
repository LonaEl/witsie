import React, {useEffect} from "react";
import {Pagination, PaginationItem} from '@material-ui/lab';

import useStyles from './styles'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//useSelector gets the number of pages

import { getPosts } from "../actions/posts";

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.posts)
    const classes = useStyles();
    const dispatch = useDispatch();

    //if there is a page, dispatch the getPost function from the actions
     
    useEffect(() => {
        if(page) {
        dispatch(getPosts(page));
        }
    }, [dispatch, page])

    //run the useEffect everytime the page changes

    return (
        <Pagination 
        classes={{ul: classes.ul}}
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
        />
    );
};

export default Paginate;