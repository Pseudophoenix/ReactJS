import './utils.css';
import './NavBar.css'
import PageTitle from './PageTitle.jsx';
import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        }
        console.log("[NavBar]Constructor");

    }
    componentWillUnmount() {
        console.log("[NavBar]componentWillUnmount");
    }
    componentDidMount() {
        // this.setState({auth:true});
        console.log('[NavBar]ComponentDidMount');
    }

    render() {
        return (
            <>
                <div className='flexbox '>
                    <div id="head-name" className='m-3'>{this.props.title}</div>
                    <div id="head-nav">
                        <ul className="list-style-none flexbox floatright mr-5">
                            <li className='m-2'><a href="blog.html">Blog</a></li>
                            <li className='m-2'><a href="project.html">Project</a></li>
                            <li className='m-2'><a href="about.html">About</a></li>
                            <li className='m-2'><a href="newsletter.html">Newsletter</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <PageTitle title={"THE BLOG"} />
                <hr />
            </>
        )
    }
}
export default NavBar;