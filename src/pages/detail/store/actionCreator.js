import axios from 'axios';
import * as constants from './constants';

const getDetail = (title,content) => ({
    type: constants.GET_DETAIL_DATA,
    title,
    content 
})

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get("/api/detail.json?id:" + id)
            .then(res => {
                const result = res.data.data;
                const action = getDetail(result.title,result.content);
                dispatch(action);
            })
    }
}