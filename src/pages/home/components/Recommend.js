import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent{
    render(){
        const { rightImg } = this.props;
        return(
            <div>{
                rightImg.map(item => {
                    return(
                        <RecommendWrapper key={item.get("id")}>
                            <RecommendItem imgUrl={item.get("imgUrl")}></RecommendItem>
                        </RecommendWrapper>  
                    )
                }) 
                }
            </div>
        )    
    }
}

const mapState = (state) => ({
    rightImg: state.getIn(["home","rightImg"])
})

export default connect(mapState)(Recommend);