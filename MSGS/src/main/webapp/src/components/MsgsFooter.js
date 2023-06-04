import React from 'react';

const MsgsFooter = () => {
    return (
        <footer className="mainFooter">
        <div>
            <a href="/"><i className="fa fa-instagram w3-hover-opacity footericoncss"></i></a>
            <a href="/"><i className="fa fa-facebook-official w3-hover-opacity footericoncss"></i></a>
            <a href="/"><i className="fa fa-youtube-square w3-hover-opacity footericoncss"></i></a>
            <a href="/" id="myroBlogcss">
            <img src="myro_image/naverblogicon.png" alt="img" loading="lazy" /></a>
        </div>
        <div className="bot_storelink">
            <a href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A1%9C-myro/id1496337358">
                <img src="myro_image/applestore.png" alt="앱스토어" loading="lazy"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.myro.myro">
                <img src="myro_image/playstore.png" alt="플레이스토어" loading="lazy"/></a>
        </div>
        <div style={{margin: '16px'}}>
            <a href="/userAgreements">
                <h7>이용약관</h7>
            </a>
            <h7>|</h7>
            <a href="/userPolicy">
                <h7>개인정보처리방침</h7>
            </a>
        </div>
        <h7>주식회사 엠와이알오</h7>
        <h7>사업자등록번호 649-88-01082</h7>
        <h7>서울시 강남구 역삼동 741-11 3F</h7>

        <h7>
            <a href="mailto:contact@myro.co.kr"> contact@myro.co.kr</a>
        </h7>
        <p><h7>© MYRO Co.,Ltd. All rights reserved.</h7></p>
    </footer>
    );
};

export default MsgsFooter;