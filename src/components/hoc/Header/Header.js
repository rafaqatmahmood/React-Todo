import React from 'react'
import Classes from './Header.module.css'

const Header = (props) => (
    <header className={Classes.Header}>
        <div className="row">
            {props.children}
        </div>
    </header>
)
export default Header