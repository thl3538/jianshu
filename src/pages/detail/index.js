import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { DetailWrapper, Content } from './style';

class Detail extends Component{
    render(){
        console.log(this.props)
        const { title, content } = this.props 
        return(
            <DetailWrapper>
                <h1>{title}</h1>
                <Content dangerouslySetInnerHTML = {{__html: content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id);
    }
}

const mapDispatch = (dispatch) => ({
    getDetailData(id){
        const action = actionCreator.getDetailData(id);
        dispatch(action);
    }
})

const mapState = (state) => ({
    title: state.getIn(["detail","title"]),
    content: state.getIn(["detail","content"])
})

export default connect(mapState,mapDispatch)(Detail);