import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .bannerImg{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

//展示文章容器
export const ArticleWrapper = styled.div`
    width: 623px;
    height: 135px;
    display: flex;
    padding: 20px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
    justify-content: space-between;
`

export const ArticleLeft = styled.div`
    width: 458px;
    height: 135px;
    display: flex;
    flex-direction:column;
    align-content: space-between;
    justify-content: space-between;
    h3{
        width: 100%;
        display: flex;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
        line-height: 1.5;
    }
    p{
        width: 100%;
        font-size: 13px;
        white-space: normal;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 8px;
        color: #999999;
        line-height: 24px;
    }
`

export const ArticleRight = styled.div`
    .pic{
        width: 150px;
        height: 100px;
    }
`

export const ArticleMeata = styled.div`
    display: flex;
    height: 20px;
    flex-wrap: no-wrap;
    align-items: center;
    text-align: center;
    .iconfont{
        font-size: 12px;
        margin-right: 4px;
    }
`

export const ArticleRead = styled.span`
    display: flex;
    align-items: center;
    width: 42px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 10px;
    color: #ea6f5a;
    box-sizing: border-box;
`
export const ArticleName = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 10px;
    color: #b4b4b4;
`

export const ArticleComment = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 10px;
    color: #b4b4b4; 
`

export const ArticleGood = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 10px;
    color: #b4b4b4; 
`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl });
    background-size: cover;
`;

export const Wrap = styled.div`
    display: flex;
    align-content: space-between;
`

export const WriterWrap = styled.div`
    display: flex;
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 278px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    align-items: center;
`;

export const Qrcode = styled.div`
    display: block;
    .qrcode{
        width: 60px;
        height: 60px;
        background-size: cover;
    }
`;

export const DownLoad = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .title{
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #A5A5A5;
    text-align: center;
    border-radius: 20px;
    margin: 20px 0;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 80px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
    display: block;
`
