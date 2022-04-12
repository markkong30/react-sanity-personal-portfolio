import React from 'react';
import SocialMedia from '../components/SocialMedia';
import Navigation from '../components/Navigation';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}
            style={window.innerWidth > 2000 ? { marginTop: 100 } : { marginTop: 70 }}
        >
            <SocialMedia />
            <div className="app__wrapper ">
                <Component />
                {/* <div className="copyright">
                    <p className="p-text">@2022 Mark</p>
                    <p className="p-text">All rights reserved</p>
                </div> */}
            </div>
            <Navigation active={idName} />
        </div>
    );
};

export default AppWrap;