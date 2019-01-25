import React, { Component } from 'react';
import BasicLayout from './basiclayout/basiclayout';
import DiskLayout from './disklayout/disklayout';

class Layout extends Component {
    render() {
        return (
            <div>
                <BasicLayout />
            </div>
        );
    }
}

export default Layout;