import React from 'react';

const MsgaHeader = () => {
    return (

        <div id="headerArea">
<nav id="navcc">
    <div className="nav-wrapper navWidth">
        <a href="/" id="navlefttext">
            <b>MYRO</b>
            <h6 id="navlongtext2">&nbsp;MAKE YOUR ROUTE OPTIMIZED</h6>
            
            
        </a>

        <ul id="navtextbtn1" className="nav-button-container">
            <li id="navtextbtn1_1">
                <a href="/">여행지</a>
            </li>

            <li id="navtextbtn1_2">
                <a href="about.html">마이로</a>
            </li>

            <li id="navtextbtn1_3">
                <a href="guide.html" id="guidebutton">이용방법</a>
            </li>
            
            <li id="navtextbtn1_5" className="header-start-button" style={{display: 'none'}}>
                <a href="/" id="guidebutton">마이로 시작하기</a>
            </li>

            <li id="loginLogoutNav">
                <div className="nav-profile-btn-container">
                    <span id="loginLogout"><a href="login.html">로그인</a></span>
                </div>
            </li>

            <li className="header-sidebar-button" id="navtextbtn1_5">
                <a className="header-menu-flex" tabIndex="0" aria-expanded="false">
                    <i className="material-icons">menu</i>
                </a>
            </li>

            <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true" className="uk-offcanvas">
                <div className="uk-offcanvas-bar nav-sidebar">
                    <ul className="uk-nav uk-nav-default">
                        {/* <!-- 여긴 모바일 화면일 때 활성화 --> */}
                        <div id="loginLogoutMobile">
                            {/* <!-- 로그인 상태라면 여기 display --> */}
                            <div className="nav-sidebar-avatar-container">
                                <div className="nav-sidebar-avatar">
                                    <span id="userNickNameLogoByPhone">
                                    </span>
                                    {/* <!-- <img src="myro_image/avatar.png" alt="avatar" /> --> */}
                                </div>
                                <div className="user-text">
                                    <span id="userNickNameByPhone"></span>
                                </div>
                                <span id="loginLogoutByPhone">
                                    <button className="logout-btn">
                                        로그아웃
                                    </button>
                                </span>
                            </div>

                            {/* <!-- 로그아웃 상태라면 여기 display --> */}
                            {/* <!-- <div className="nav-sidebar-avatar-container">
                                <button className="login-btn" onclick="">로그인</button>
                            </div> --> */}
                        </div>
                        <li className="uk-active">
                            <a href="/about.html">마이로소개</a>
                        </li>

                        {/* <!-- <li className="uk-active"><a onclick="openYoutubeGideButton()" id="guidebuttonByPhone">이용방법</a></li> --> */}

                        <li className="uk-parent">
                            <a href="/">메인페이지</a>
                        </li>
                        <li className="uk-parent">
                            <a href="/mypage.html">마이페이지</a>
                        </li>
                    </ul>
                </div>
            </div>
        </ul>
    </div>
</nav>
</div>
     
    );
};

export default MsgaHeader;