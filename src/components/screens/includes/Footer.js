import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/footer_style.css'
import logo from '../../../assets/svg/logo.18181ee4c4a79bf8b9f8df8a05370876.svg'
import social_link1 from '../../../assets/svg/social_link_icon1.0a39d1a07d66f2e085f56dad62f4944f.svg'
import social_link2 from '../../../assets/svg/social_link_icon2.1546daeaa9bcb2b688f78c02064f67d3.svg'
import social_link3 from '../../../assets/svg/social_link_icon3.1a3369123f8ceb0507154a47cdb3feee.svg'
import social_link4 from '../../../assets/svg/social_link_icon4.0ee9fcfb6702b5549a2b5b6f65fa2a6c.svg'




const API_URL = 'https://kinect.tw1.ru/api/';

let sl_set = {};

let myMap;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }



    componentDidMount() {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }


        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.handleScroll);


    }


    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentWillMount() {
        sl_set = {
            infinite: true,
            dots: false,
            arrows: false,
            fade: true,
            waitForAnimate: false,
            /*autoplaySpeed: 3000,
            autoplay: true,*/
            pauseOnHover: false,
            beforeChange: (oldIndex, newIndex) => {
                this.setState({
                    cur_pr: (newIndex + 1),
                    sliding: true
                })
            },
            afterChange: (newIndex) => {
                this.setState({
                    sliding: false
                })
            }
        }
    }

    handleScroll = (ev) => {
        let scrollTop = window.scrollY;

        if (scrollTop > 0) {
            this.setState({
                headerScroll: true
            })
        } else {
            this.setState({
                headerScroll: false
            })
        }

    }



    handleLoad = () => {

    }


    render() {
        return (
            <>
                <div className='footer'>
                    <div className='footer_wrapper'>
                        <div className='footer_logo'>
                            <Link to='/' className='footer_logo_link'>
                                <img src={logo}/>
                            </Link>
                        </div>
                        <div className='footer_social_links_main_wrapper'>
                            <div className='footer_links_wrapper'>
                                <div className='footer_links_item'>
                                    <p className='footer_links_item_title'>Company</p>
                                    <ul className='footer_links_ul_list'>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>
                                                Trial
                                            </Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Comments</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Followers</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Likes</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='footer_links_item'>
                                    <p className='footer_links_item_title'>Help</p>
                                    <ul className='footer_links_ul_list'>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>
                                                Customer Support
                                            </Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Delivery Details</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'> Terms & Conditions</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='footer_links_item'>
                                    <p className='footer_links_item_title'>Resources</p>
                                    <ul className='footer_links_ul_list'>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>
                                                Free eBooks
                                            </Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'> Development Tutorial</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'> How to - Blog</Link>
                                        </li>
                                        <li className='footer_links_ul_list_li'>
                                            <Link to={'./'} className='footer_links_ul_list_li_link'>Youtube Playlist</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='mobile_footer_social_links_wrapper'>
                                <a href='https://twitter.com' className='footer_social_link'>
                                    <img src={social_link1}/>
                                </a>
                                <a href='https://www.facebook.com/' className='footer_social_link'>
                                    <img src={social_link2}/>
                                </a>
                                <a href='https://www.instagram.com/' className='footer_social_link'>
                                    <img src={social_link3}/>
                                </a>
                                <a href='https://github.com/' className='footer_social_link'>
                                    <img src={social_link4}/>
                                </a>
                            </div>
                        </div>

                        <div className='footer_copyright_text_social_links_wrapper'>
                            <p className='footer_copyright_text'>© Copyright 2022, All Rights Reserved by ClarityUI</p>
                            <div className='footer_social_links_wrapper'>
                                <a href='https://twitter.com' className='footer_social_link'>
                                    <img src={social_link1}/>
                                </a>
                                <a href='https://www.facebook.com/' className='footer_social_link'>
                                    <img src={social_link2}/>
                                </a>
                                <a href='https://www.instagram.com/' className='footer_social_link'>
                                    <img src={social_link3}/>
                                </a>
                                <a href='https://github.com/' className='footer_social_link'>
                                    <img src={social_link4}/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }
}
