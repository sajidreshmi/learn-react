import React, { Fragment } from 'react'
import classes from './Hearder.module.css'
import meanlsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={meanlsImage}/>
            </div>
        </Fragment>
    )
}

export default Header;