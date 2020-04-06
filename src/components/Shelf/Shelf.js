import React from 'react'
import Style from './Shelf.module.css';

export default function Shelf(props) {
    const {urls, alt_description} = props;

    return (
        <div className={Style.shelf}>
            <img  src={urls.full} srcSet={`${urls.full} 100w , ${urls.small} 70w , ${urls.thumb} 100w`}  alt={alt_description} />
        </div>
    )
}
