import React from 'react';
import h from './Header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <header className={h.header}>
                header
            </header>
        )
    }
}

export default Header