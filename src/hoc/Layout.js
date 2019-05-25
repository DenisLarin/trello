import React, {Component} from 'react';
import Wrapper from "./Wrapper";

import style from './layout.module.scss'

class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <div className={style.layout}>
                    {this.props.children ? this.props.children : <></>}
                </div>
            </Wrapper>
        );
    }
}
export default Layout;