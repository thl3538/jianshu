import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
   articleList: [],
    rightImg: [
        {
            id: 1,
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
        },
        {
            id: 2,
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        },
        {
            id: 3,
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        },
        {
            id: 4,
            imgUrl: "https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop"
        },
        ],
        articlePage: 1,
        showScroll: false
})

const changeHomeData = (state,action) => {
    return state.merge({
        articleList: fromJS(action.articleList)
    })
}

const addMoreList = (state,action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.moreList),
        articlePage: action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
           return changeHomeData(state,action); 
        case constants.ADD_MORE_LIST:
            return addMoreList(state,action);
        case constants.SHOW_SCROLL_TOP:
            return state.set("showScroll",action.flag)
        case constants.HIDE_SCROLL_TOP:
            return state.set("showScroll",action.flag)
        default : 
            return state
    }
}