import React, { PureComponent } from 'react';
import { WriterWrap, Qrcode, DownLoad } from '../style';

class writter extends PureComponent{
    render(){
        return(
            <div>
                <WriterWrap>
                    <Qrcode>
                        <img className="qrcode" url="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""></img>
                    </Qrcode>
                    <DownLoad>
                        <p className="title">下载简书手机APP ></p>
                        <p className="description">随时随地发现和创造内容</p>
                    </DownLoad>
                </WriterWrap>
            </div>
            
        )
    }
}

export default writter;