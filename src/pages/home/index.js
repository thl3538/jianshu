import React, { Component } from 'react';
import {connect} from 'react-redux';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreator } from './store';
import { HomeWrapper,
         HomeLeft,
         HomeRight,
         BackTop
} from './style';

class Home extends Component{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        const {showScroll} = this.props
        return(
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="bannerImg" src="https://upload-images.jianshu.io/upload_images/5114145-6e1ac02020dafe3a?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="mai"></img>
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWrapper>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </div>  
        )
}

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent();
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.handleScrollTop)
    }

}

const mapState = (state) => ({
    showScroll: state.getIn(["home","showScroll"])
})

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreator.getHomeInfo();
        dispatch(action);
    },
    handleScrollTop(){
        if(document.documentElement.scrollTop > 300){
            dispatch(actionCreator.showScrollTop(true))
        }else{
            dispatch(actionCreator.hideScrollTop(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home);