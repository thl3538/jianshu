import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList
})

const addMoreArticle = (moreList,nextPage) => ({
    type: constants.ADD_MORE_LIST,
    moreList: fromJS(moreList),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get("/api/homeList.json?page=" + page)
            .then(res => {
                const result = res.data.data;
                const action = addMoreArticle(result,page+1);
                dispatch(action);
            })
    }
}

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json")
            .then(res => {
                const result = res.data.data;
                const action = changeHomeData(result);
                dispatch(action);
            })
    }
}

export const showScrollTop = (flag) => ({
    type: constants.SHOW_SCROLL_TOP,
    flag
})

export const hideScrollTop = (flag) => ({
    type: constants.HIDE_SCROLL_TOP,
    flag
})