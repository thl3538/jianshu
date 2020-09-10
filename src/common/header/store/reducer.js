import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIN: false,
    list: [],
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS :
          //immutable对象是结合以前的数据返回一个新的数据，并没有对数据进行修改
            return state.set('focused',true)
        case constants.SEARCH_BLUR :
            return state.set('focused', false)
        case constants.CHANGE_LIST :
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case constants.CHANGE_MOUSE_ENTER :
            return state.set('mouseIn',true)
        case constants.CHANGE_MOUSE_LEAVE :
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE : 
            return state.set('page',action.page)
        default : 
            return state
    }
}