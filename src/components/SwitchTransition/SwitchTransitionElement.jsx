import React, {useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";

const SwitchTransitionElement = () => {
    const [mode, setMode] =useState('out-in');
    const [toggle, setToggle] =useState(false);
    // console.log("mode", mode)
    // console.log("toggle", toggle)
    function changeHandler (event) {
        setMode(event.target.value)
    }

    return (
        <>
            <div>
                <label htmlFor="out-in">out-in</label>
                <input
                    id="out-in"
                    value="out-in"
                    name="radio"
                    type="radio"
                    onChange={(e) => changeHandler(e)}
                />
                <label htmlFor="in-out">in-out</label>
                <input
                    id="in-out"
                    value="in-out"
                    name="radio"
                    type="radio"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <SwitchTransition mode={mode}>
                <CSSTransition
                    key={toggle}
                    timeout={500}
                    classNames="fade"
                >

                        <button className="showHideBtn" onClick={() => setToggle(prevState => !prevState)}>
                            {toggle ? "Hello World" : "Goodbye world"}
                        </button>

                </CSSTransition>
            </SwitchTransition>
            </div>
        </>
    );
};

export default SwitchTransitionElement;