import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";

const CssTransitionElement = () => {
    const [loaderVisible, setLoaderVisible] =useState(false);
    return (
        <div>
            <button className="showHideBtn" onClick={() => setLoaderVisible(prevState => !prevState)}>
                {loaderVisible ? "hide" : "show"}
            </button>
            <div className="wrap">
                <CSSTransition
                    classNames={{
                        enterActive: 'circle-show',
                        enterDone: 'circle-rotate',
                        exitActive: 'circle-hide',
                    }}
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className="circle"></div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default CssTransitionElement;