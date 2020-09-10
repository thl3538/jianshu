import React, { PureComponent } from 'react';
import * as actionCreator from '../store/actionCreator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ArticleWrapper, 
        ArticleLeft,  
        ArticleRight,   
        ArticleMeata,
        ArticleRead,
        ArticleName,
        ArticleComment,
        ArticleGood,
        LoadMore
        } from '../style';

class List extends PureComponent{
    render(){
        const { list, loadMore, page } = this.props;
         return(
            <div>{
                list.map((item,index) => {
                    return(
                        <Link key={index}  style={{ textDecoration:'none', color: "#000"}}  to={'/detail/' + item.get('id')}>
                            <ArticleWrapper >
                                <ArticleLeft>
                                    <h3>{item.get("title")}</h3>
                                    <p>{item.get("desc")}</p>
                                    <ArticleMeata>
                                        <ArticleRead>
                                        <i className="iconfont">&#xe62b;</i>
                                            28.5
                                            </ArticleRead>
                                        <ArticleName>文露我分你享</ArticleName>
                                        <ArticleComment>
                                        <i className="iconfont">&#xe602;</i>
                                            72
                                            </ArticleComment>
                                        <ArticleGood>
                                        <i className="iconfont">&#xe6ad;</i>
                                            388
                                            </ArticleGood>
                                    </ArticleMeata>
                                </ArticleLeft>      
                            <ArticleRight>
                                <img className="pic" src={item.get("imgUrl")} alt="pic"></img>
                            </ArticleRight>
                            </ArticleWrapper>
                        </Link>
                    )
                })
                }
                <LoadMore onClick={() => loadMore(page)}>加载更多</LoadMore>
            </div> 
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(["home","articleList"]),
    page: state.getIn(["home","articlePage"])
})

const mapDispatch = (dispatch) => ({
    loadMore(page){
        dispatch(actionCreator.getMoreList())
    }
})

export default connect(mapState,mapDispatch)(List);