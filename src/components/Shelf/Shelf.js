import React from 'react'
import Style from './Shelf.module.css';

export default function Shelf(props) {
    const {urls, alt_description} = props;

    return (
        <div className={Style.shelf}>
            <img srcSet={urls.full} src={urls.full} alt={alt_description} />
        </div>
    )
}
