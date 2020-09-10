import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { actionCreators }  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    Search,
    Button,
    Additon,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SwitchInfoItem
    } from './style';

    class Header extends Component{
        getListArea(){
            const { focused, list, page, totalPage, changePage, changeMouseEnter, changeMouseLeave, mouseIn } = this.props;
            const newList = list.toJS();
            const pageList = [];
            
                if(newList.length){
                for(let i = (page - 1) * 5; i < page * 5; i++ ){
                    pageList.push(  
                        <SwitchInfoItem key={newList[i]}>{newList[i]}</SwitchInfoItem>
                    )    
                }
                }
            if(focused || mouseIn){
                return(
                    <SearchInfo 
                    onMouseEnter={ changeMouseEnter }
                    onMouseLeave = { changeMouseLeave } >
                        <SearchInfoTitle>热门搜索
                            <SearchInfoSwitch onClick={() => {changePage(page, totalPage, this.spinIcon)}}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                                换一批
                                </SearchInfoSwitch>
                        </SearchInfoTitle>
                            <SearchInfoList>
                                { pageList }
                            </SearchInfoList>
                    </SearchInfo>
                )
            }else{
                return null
            }
        }
        render(){
            const { focused, handleFocusChange, handleFocusOrgin} = this.props;
            return(   
                <HeaderWrapper>
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Nav>
                            <NavItem className="left active">首页</NavItem>
                            <NavItem className="left">下载App</NavItem>
                            <NavItem className="right">登录</NavItem>
                            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                            <SearchWrapper>
                                <CSSTransition
                                    timeout={200}
                                    classNames="slide"
                                    in={focused}
                                >
                                <Search onFocus={handleFocusChange}
                                    onBlur={handleFocusOrgin}
                                    className={focused ? "change" : ""}></Search>
                                 </CSSTransition>
                                <i className={focused ? "iconfont change zoom" : "iconfont zoom"}>&#xe617;</i>
                                {this.getListArea()}
                            </SearchWrapper>
                        </Nav>
                        <Additon>
                            <Button>注册</Button>
                            <Button className="active">
                            <i className="iconfont">&#xe6af;</i>
                                写文章</Button>
                        </Additon> 
                </HeaderWrapper>
            )
        }
    }

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleFocusChange(){
            dispatch(actionCreators.SEARCH_FOCUS());
            dispatch(actionCreators.getList())
        },
        handleFocusOrgin(){
            dispatch(actionCreators.SEARCH_BLUR());
        },
        changeMouseEnter(){
            dispatch(actionCreators.changeMouseEnter())
        },
        changeMouseLeave(){
            dispatch(actionCreators.changeMouseLeave())
        },
        changePage(page, totalPage, spin){
            let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(orginAngle){
                orginAngle = parseInt(orginAngle, 10)
            }else{
                orginAngle = 0;
            }
            spin.style.transform = 'rotate('+ (orginAngle + 360) +'deg)'
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);