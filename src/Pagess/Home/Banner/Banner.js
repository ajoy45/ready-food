import React from 'react';
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <h1>Best Food waiting for your belly</h1>
            <div className='form-container'>
                <input className={styles.form_container_input} type="text" name="" id="" placeholder='search food' />
                <button className={styles.form_container_button} type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Banner;