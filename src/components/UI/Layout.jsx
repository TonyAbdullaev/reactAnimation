import React from 'react';
import {Outlet, useLocation, useOutlet} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Layout = ({title, children}) => {
    const location = useLocation()
    const currentOutlet = useOutlet()

    return (
        <div className="layout__wrapper">
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {(state) => (
                        <div className="page">
                            <h2 className="layout_title">{title}</h2>
                            <Outlet />
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>

        </div>
    );
};

export default Layout;