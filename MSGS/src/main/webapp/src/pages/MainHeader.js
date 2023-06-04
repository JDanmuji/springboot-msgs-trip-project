import React from 'react';
import MainMovie5 from '../images/myro_video/MainMovie5.mp4'

const MainHeader = () => {
    return (
           <header className="wide-spacing" id="home">
            <div className="main-top-container">
                <div className="uk-grid-match uk-grid" uk-grid="">
                    <div style={{margin: 0, padding: 0}} className="uk-width-2-5@m uk-first-column">
                        <div className="main-left-container">
                            <div>
                                <div className="maintitleTextdiv" style={{justifyContent: 'center'}} >
                                    <div>
                                        <h2 className="mainsubtitle">
                                            AI 여행 스케줄링 플래너
                                        </h2>
                                        
                                    </div>
                                </div>
                                
                                <h1 className="maintitlemyro">
                                    <b>MYRO</b>
                                </h1>
                                <div className="text-focus-in" id="startbutton">
                                    <a className="btn mainstartbutton">시작하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{margin: 0, padding: 0}} className="uk-width-3-5@m">
                        <div style={{
                                backgroundColor: 'rgb(129, 129, 145)',
                                height: '100vh'
                                }}>
                            <div>
                                <video muted="" autoPlay="" loop="" style={{height: '100vh', maxWidth: 'none'}} id="mainVideo">
                                    <source src={MainMovie5} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-grid-match main-bottom-container uk-grid" uk-grid="">
                <div style={{margin: '0px', padding: '0px', transform: 'translateX(-100px) translateY(100px) scale(0.5)', opacity: 0}} className="uk-width-2-5@m uk-first-column" uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                    <div style={{
                            backgroundColor: '#fafafa',
                            height: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <h6>
                            여행 일자, 숙소, 가고 싶은 장소만
                            <br/>

                            선택하면 일정이 자동으로 완성되는
                            <br/>
                            쉽고 간편한 여행 일정 플래너</h6>
                    </div>
                </div>
                <div style={{margin: 0, padding: 0}} className="uk-width-3-5@m">
                    <div>
                        <div className="row" style={{height: '300px'}}>
                            <div style={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    height: '100%',
                                }} className="col s12 m4">
                                <h4 style={{fontFamily: 'Montserrat'}}>
                                    <b>STEP 1</b>
                                </h4>
                                <div>여행지선택</div>
                            </div>
                            <div style={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    height: '100%'
                                }} className="col s12 m4">
                                <h4 style={{fontFamily: 'Montserrat'}}>
                                    <b>STEP 2</b>
                                </h4>
                                <div>장소선택</div>
                            </div>
                            <div style={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    height: '100%'
                                }} className="col s12 m4">
                                <h4 style={{fontFamily: 'Montserrat'}}>
                                    <b>STEP 3</b>
                                </h4>
                                <div>일정생성</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

            
            <div className="countcon">
                <div className="countbox">
                    <div className="countboxDiv">
                        <h6>이용자수</h6>
                        <h3><span className="counter" id="routeCnt">147,328</span></h3>
                    </div>
            
                    <div className="countboxDiv">
                        <h6>여행지</h6>
                        <h3><span className="counter" id="cityCnt">93</span></h3>
                    </div>
                </div>
            </div>

            <div className="mobileContainer">
                <p className="maintitlesummary">AI 여행 스케줄링 플래너 마이로</p>
                <h1 className="maintitlemyro"><b>MYRO</b></h1>
                <br/>
            </div>
        </header>
    );
};

export default MainHeader;