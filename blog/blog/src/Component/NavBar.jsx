import React from 'react'
import './utils.css';
import PageTitle from './PageTitle.jsx';
export default function
    () {
    return (
        <>
            <div className='flexbox '>
                <div id="head-name" className='m-3'>Alok</div>
                <div id="head-nav">
                    <ul className="list-style-none flexbox floatright mr-5">
                        <li className='m-3'>Blog</li>
                        <li className='m-3'>Project</li>
                        <li className='m-3'>About</li>
                        <li className='m-3'>Newsletter</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <PageTitle title={"THE BLOG"}/>
            <hr/>
        </>
    )
}
