import React, {useEffect, useState} from 'react';
import { Transition } from 'react-transition-group';

const TransitionElement = () => {
    const [loaderVisible, setLoaderVisible] =useState(false);
    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000)
        setTimeout(() => setLoaderVisible(false), 5000)
    }, [])
    return (
        <div>
            <button className="showHideBtn" onClick={() => setLoaderVisible(prevState => !prevState)}>
                {loaderVisible ? "hide" : "show"}
            </button>
            <div className="wrap">
                <Transition
                    in={loaderVisible}
                    timeout={500}
                    unmountOnExit
                    mountOnEnter
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}
                >
                    {
                        state => (
                            <div className={`circle ${state}`} />
                        )
                    }
                </Transition>
            </div>
        </div>
    );
};

export default TransitionElement;