import styled from 'styled-components';
import picLogo from '../../static/logo.png';

export const HeaderWrapper  = styled.div`
    position: relative;
    height: 58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    height: 58px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    background: url(${picLogo});
    background-size: cover;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    padding: 15px 15px;
    line-height: 29px;
    font-size: 17px;
    &.left{
        float: left;
        
    }
    &.right{
        float: right;
        font-size: 15px;
        color: #969696;
    }
    &.active{
       color: #ea6f5a; 
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter{
        transition: all .2s ease-in;
    }
    .slide-enter-active{
        width: 220px;
    }
    .slide-exit{
        transition: all .2s ease-in;
    }
    .slide-exit-active{
        width: 160px;
    }
    .zoom{
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        text-align: center;
        border-radius: 19px;
        &.change{
            background: #777;
            color: #fff;
        }
    }
`

export const Search = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    margin-top: 10px;
    border: none;
    outline: none;
    background: #eeeeee;
    border-radius: 19px;
    padding: 0 35px 0 20px;
    margin-left: 20px;
    color: #666;
    &.change{
        width: 220px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;  
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin{
        display: inline-block;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }    
`

export const SearchInfoList = styled.div`
   width: 100%; 
`

export const SwitchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const Additon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    outline: 0;
    border: 1px solid #ea6f5a;
    margin-top: 10px;
    font-size: 15px;
    background: #fff;
    color: #ea6f5a;
    &.active{
        background: #ea6f5a;
        color: #fff;
    }
    margin-left: 10px;
    margin-right: 20px;
`
