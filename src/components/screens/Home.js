import React from 'react'
import { Link } from 'react-router-dom'
// import InputMask from 'react-input-mask'
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
// import Slider from "react-slick"
import '../../assets/css/home_style.css'
import Header  from '../screens/includes/Header';
import Footer  from '../screens/includes/Footer';
import Slider_How_Works  from './Slider_How_Works';
import SliderFeatures1  from './SliderFeatures1';
import SliderFeatures2  from './SliderFeatures2';
import SliderFeatures3  from './SliderFeatures3';
import instagram_boost_icon1 from  '../../assets/svg/instagram_boost_icon1.4cbac4b3267f01b81ac8c1c3227e8c11.svg';
import instagram_boost_icon2 from  '../../assets/svg/instagram_boost_icon2.a57b4a12912424c816a36246cc5d8f16.svg';
import instagram_boost_icon3 from  '../../assets/svg/instagram_boost_icon3.3ecbc174b1d1a47b23b9f467e044c310.svg';
import work_methods_icon1 from  '../../assets/svg/work_methods_icon1.274f5902d1942992e5f4db91f03e56f3.svg';
import work_methods_icon2 from  '../../assets/svg/work_methods_icon2.bb34d05222ab942819bcd94ac0cbc5e9.svg';
import faq_icon from  '../../assets/svg/faq_icon.0c2b8a530299953f33d97c13e7728581.svg';
import faq_icon2 from  '../../assets/svg/faq_icon2.3b0d976860060ef8b94b2b31eba05f55.svg';




const API_URL = 'https://kinect.tw1.ru/api/';

let sl_set = {};

let myMap;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_hidden_info: false,
            faqs: [
                {
                    id: 1,
                    open_key: false,
                    title: 'Why do I need it?',
                    hidden_info: 'Our project can help you to boost your posts with a fresh batch of authentic comments and bring you to Instagram trends. Lots of comments are undeniable proof of your popularity and that\'s exactly what we deliver. There is a golden rule of promotion: the more comments you have on Instagram - the more advertisers and new followers you attract.'
                },
                {
                    id: 2,
                    open_key: false,
                    title: 'Does this work with Wordpress?',
                    hidden_info: 'Our project can help you to boost your posts with a fresh batch of authentic comments and bring you to Instagram trends. Lots of comments are undeniable proof of your popularity and that\'s exactly what we deliver. There is a golden rule of promotion: the more comments you have on Instagram - the more advertisers and new followers you attract.'
                },
                {
                    id: 3,
                    open_key: false,
                    title: 'Does this work with Wordpress?',
                    hidden_info: 'Our project can help you to boost your posts with a fresh batch of authentic comments and bring you to Instagram trends. Lots of comments are undeniable proof of your popularity and that\'s exactly what we deliver. There is a golden rule of promotion: the more comments you have on Instagram - the more advertisers and new followers you attract.'
                },
                {
                    id: 4,
                    open_key: false,
                    title: ' What is your refund policy?',
                    hidden_info: 'Our project can help you to boost your posts with a fresh batch of authentic comments and bring you to Instagram trends. Lots of comments are undeniable proof of your popularity and that\'s exactly what we deliver. There is a golden rule of promotion: the more comments you have on Instagram - the more advertisers and new followers you attract.'
                },
            ],
            body_disable: false,

        }


    }


    componentDidMount() {

        // this.getLikesList();

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }


        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.handleScroll);
        // AsyncStorage.clear();
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

    // getLikesList = () => {
    //     try {
    //         fetch(`https://wannahype.com:8080/api/advertisement/like/list`, {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //
    //
    //         }).then((response) => {
    //             return response.json()
    //         }).then((response) => {
    //
    //             console.log(response, 'likes list')
    //
    //
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    //
    //
    //
    // }
    openFaqs = (id) => {
        let {faqs} = this.state;

        const objToFind = faqs.find(obj => obj.id === id);
        if (objToFind) {
            objToFind.open_key = !objToFind.open_key;
            console.log(faqs); // Проверяем изменения в массиве
            this.setState({
                faqs:faqs
            })
        }
    }







    handleLoad = () => {

    }

    disableBodyScroll = () => {
        document.body.style.overflow = "hidden";
    }
    enableBodyScroll = () => {
        document.body.style.overflow = "auto";
    }


    render() {

        return (
            <>
                <div className='main_wrapper'>
                    <Header disableBodyScroll={this.disableBodyScroll} enableBodyScroll={this.enableBodyScroll}/>
                    <main className='main'>
                        <section className='instagram_activity_boost'>
                            <div className='instagram_activity_boost_wrapper'>
                                <div className='instagram_activity_boost_title_btn_wrapper'>
                                    <h1 className='instagram_activity_boost_title'>Instagram activity boost</h1>
                                    {/*<button className='instagram_activity_boost_get_started_btn' onClick={() => {*/}
                                    {/*    this.setState({*/}
                                    {/*        show_select_account_popup: true*/}
                                    {/*    })*/}
                                    {/*    this.disableBodyScroll()*/}


                                    {/*}}>Get Started</button>*/}
                                    <Link to={'/select-account'} className='instagram_activity_boost_get_started_btn'>
                                        Get Started
                                    </Link>

                                </div>

                                <div className='instagram_activity_boost_info_items_wrapper'>
                                    <div className='instagram_activity_boost_info_item'>
                                        <div className='instagram_activity_boost_info_item_img'>
                                            <img src={instagram_boost_icon1}/>
                                        </div>
                                        <p className='instagram_activity_boost_info_item_title'>User-friendly interface</p>

                                        <div className='instagram_activity_boost_info_item_text_line_wrapper'>
                                            <p className='instagram_activity_boost_info_item_text'>Even a novice can use the service</p>
                                            <div className='instagram_activity_boost_info_item_text_line'></div>
                                        </div>


                                    </div>
                                    <div className='instagram_activity_boost_info_item'>
                                        <div className='instagram_activity_boost_info_item_img'>
                                            <img src={instagram_boost_icon2}/>
                                        </div>
                                        <p className='instagram_activity_boost_info_item_title'>Legit and Safe</p>
                                        <div className='instagram_activity_boost_info_item_text_line_wrapper'>
                                            <p className='instagram_activity_boost_info_item_text'>We do not use automated tools.
                                                Our Clients pay for their posts to be shown in our network.
                                            </p>
                                            <div className='instagram_activity_boost_info_item_text_line'></div>
                                        </div>

                                    </div>
                                    <div className='instagram_activity_boost_info_item'>
                                        <div className='instagram_activity_boost_info_item_img'>
                                            <img src={instagram_boost_icon3}/>
                                        </div>
                                        <p className='instagram_activity_boost_info_item_title'>High quality</p>
                                        <p className='instagram_activity_boost_info_item_text'>Accounts with avatars and publications</p>


                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='how_it_works' id='trial'>
                            <section className='how_it_works_wrapper'>
                                <h1 className='how_it_works_title'>How it works</h1>
                                <div className='how_it_works_items_wrapper'>
                                    <div className="how_it_works_item">
                                        <div className='how_it_works_item_img'>
                                            <img src={require('../../assets/img/how_it_works_img1.476262f379ba6aa4d1d9.png')}/>
                                        </div>
                                        <p className='how_it_works_item_info'>
                                            You choose the
                                            <span className='how_it_works_item_info2'>service you need</span>
                                        </p>
                                    </div>
                                    <div className="how_it_works_item">
                                        <div className='how_it_works_item_img'>
                                            <img src={require('../../assets/img/how_it_works_img2.c7a59860b439e608b951.png')}/>
                                        </div>
                                        <p className='how_it_works_item_info'>
                                            You choose the post for which you
                                            <span className='how_it_works_item_info2'>need the service</span>
                                        </p>
                                    </div>
                                    <div className="how_it_works_item">
                                        <div className='how_it_works_item_img'>
                                            <img src={require('../../assets/img/how_it_works_img3.1e5ac40349a9821995ab.png')}/>
                                        </div>
                                        <p className='how_it_works_item_info'>
                                            You pay for the order,
                                            <span className='how_it_works_item_info2'>and the work begins</span>
                                        </p>
                                    </div>
                                </div>

                                <div className='mobile_how_it_works_items_wrapper'>
                                    <Slider_How_Works/>
                                </div>
                                <div className='try_it_for_free_block'>
                                    <h2 className='try_it_for_free_title'>Try it for free</h2>
                                    <div className='try_it_for_free_info_box'>
                                        <p className='try_it_for_free_info'>
                                            Check the quality of the service.
                                        </p>
                                        <p className='try_it_for_free_info'>
                                            Get 5 comments and 10 subscribers for free.
                                        </p>
                                    </div>

                                    <button className='try_it_for_free_btn'>Get Started</button>
                                </div>
                            </section>
                        </section>

                        <section className='features'>
                            <div className='features_wrapper'>
                                <div className="features_wrapper_child" id='likes'>
                                    <h1 className='features_wrapper_child_title'>Likes</h1>
                                    <div className='features_wrapper_child_items_wrapper'>
                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Personal</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$19</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>
                                        <div className='features_wrapper_child_item_parent'>
                                            <div className="features_wrapper_child_item2">
                                                <p className='features_wrapper_child_item_title'>Professional</p>
                                                <div className='features_wrapper_child_item_price_info_box'>
                                                    <p className='features_wrapper_child_item_price_info'>$49</p>
                                                    <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                                </div>
                                                <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                                <div className='features_wrapper_child_item_line'></div>
                                                <div className='features_wrapper_child_item_details_box'>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Full Access to Landingfolio
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            100 GB Free Storage
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Unlimited Visitors
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            10 Agents                                                   </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Live Chat Support
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn2'>Order</Link>
                                            </div>
                                        </div>

                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Business</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$99</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents</p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>

                                    </div>
                                    <div className='mobile_features_wrapper_child_items_wrapper'>
                                        <SliderFeatures1/>
                                    </div>
                                </div>
                                <div className="features_wrapper_child" id='comments'>
                                    <h1 className='features_wrapper_child_title'>Comments</h1>
                                    <div className='features_wrapper_child_items_wrapper'>
                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Personal</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$19</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>
                                        <div className='features_wrapper_child_item_parent'>
                                            <div className="features_wrapper_child_item2">
                                                <p className='features_wrapper_child_item_title'>Professional</p>
                                                <div className='features_wrapper_child_item_price_info_box'>
                                                    <p className='features_wrapper_child_item_price_info'>$49</p>
                                                    <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                                </div>
                                                <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                                <div className='features_wrapper_child_item_line'></div>
                                                <div className='features_wrapper_child_item_details_box'>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Full Access to Landingfolio
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            100 GB Free Storage
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Unlimited Visitors
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            10 Agents                                                   </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Live Chat Support
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn2'>Order</Link>
                                            </div>
                                        </div>
                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Business</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$99</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents</p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>

                                    </div>
                                    <div className='mobile_features_wrapper_child_items_wrapper'>
                                        <SliderFeatures2/>
                                    </div>
                                </div>
                                <div className="features_wrapper_child" id='followers'>
                                    <h1 className='features_wrapper_child_title'>Followers</h1>
                                    <div className='features_wrapper_child_items_wrapper'>
                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Personal</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$19</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>
                                        <div className='features_wrapper_child_item_parent'>
                                            <div className="features_wrapper_child_item2">
                                                <p className='features_wrapper_child_item_title'>Professional</p>
                                                <div className='features_wrapper_child_item_price_info_box'>
                                                    <p className='features_wrapper_child_item_price_info'>$49</p>
                                                    <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                                </div>
                                                <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                                <div className='features_wrapper_child_item_line'></div>
                                                <div className='features_wrapper_child_item_details_box'>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Full Access to Landingfolio
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            100 GB Free Storage
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Unlimited Visitors
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            10 Agents                                                   </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                    <div className='features_wrapper_child_item_detail'>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon1}/>
                                                        </div>
                                                        <p className='features_wrapper_child_item_detail_info'>
                                                            Live Chat Support
                                                        </p>
                                                        <div className='features_wrapper_child_item_detail_icon'>
                                                            <img src={work_methods_icon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn2'>Order</Link>
                                            </div>
                                        </div>
                                        <div className="features_wrapper_child_item">
                                            <p className='features_wrapper_child_item_title'>Business</p>
                                            <div className='features_wrapper_child_item_price_info_box'>
                                                <p className='features_wrapper_child_item_price_info'>$99</p>
                                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                                            </div>
                                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                                            <div className='features_wrapper_child_item_line'></div>
                                            <div className='features_wrapper_child_item_details_box'>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Full Access to Landingfolio
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        100 GB Free Storage
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Unlimited Visitors
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        10 Agents</p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                                <div className='features_wrapper_child_item_detail'>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon1}/>
                                                    </div>
                                                    <p className='features_wrapper_child_item_detail_info'>
                                                        Live Chat Support
                                                    </p>
                                                    <div className='features_wrapper_child_item_detail_icon'>
                                                        <img src={work_methods_icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                                        </div>

                                    </div>
                                    <div className='mobile_features_wrapper_child_items_wrapper'>
                                        <SliderFeatures3/>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className='faq' id='faq'>
                            <div className='faq_wrapper'>
                                <h1 className='faq_title'>FAQ</h1>
                                <div className='faq_line'></div>
                                <div className='faq_items_wrapper'>
                                    {this.state.faqs.map((item, index) => {

                                        return (
                                            <div className='faq_item' key={index}>
                                                <div className='faq_item_title_icon_wrapper'>
                                                    <p className='faq_item_title'>{item.title}</p>
                                                    <button className='faq_item_btn'
                                                            onClick={() => {
                                                                // this.setState({
                                                                //     show_hidden_info: true
                                                                // })

                                                                this.openFaqs(item.id)
                                                            }}
                                                    >
                                                        {item.open_key ?
                                                            <img src={faq_icon}/>
                                                            :
                                                            <img src={faq_icon2}/>
                                                        }

                                                    </button>
                                                </div>
                                                {item.open_key &&

                                                <div className='faq_item_hidden_info_box'>
                                                    <p className='faq_item_hidden_info'>
                                                        {item.hidden_info}
                                                    </p>
                                                </div>
                                                }

                                            </div>



                                        );
                                    })}


                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer/>
                    {/*{this.state.show_select_account_popup &&*/}
                    {/*     <div className='show_select_account_popup'>*/}
                    {/*             <div className='show_select_account_popup_wrapper'>*/}
                    {/*                 <h1 className='show_select_account_popup_title'>Select account</h1>*/}
                    {/*                 <button className='show_select_account_popup_close_btn' onClick={() => {*/}
                    {/*                     this.setState({*/}
                    {/*                         show_select_account_popup: false*/}
                    {/*                     })*/}
                    {/*                     this.enableBodyScroll()*/}


                    {/*                 }}>*/}
                    {/*                     <img src={close_icon}/>*/}
                    {/*                 </button>*/}
                    {/*                 <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*                     <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>*/}
                    {/*                 </div>*/}
                    {/*                 <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>*/}
                    {/*                     <input type='number' placeholder='120' className='show_select_account_popup_input_field'/>*/}
                    {/*                     <div className='show_select_account_popup_input_field_icon'>*/}
                    {/*                         <img src={input_icon}/>*/}
                    {/*                     </div>*/}
                    {/*                 </div>*/}
                    {/*                 <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*                     <div className='show_select_account_popup_input_field_icon2'>*/}
                    {/*                         <img src={input_icon2}/>*/}
                    {/*                     </div>*/}
                    {/*                     <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>*/}

                    {/*                 </div>*/}
                    {/*                 <button className='show_select_account_popup_continue_btn' onClick={() => {*/}
                    {/*                     this.setState({*/}
                    {/*                         show_select_account_popup: false,*/}
                    {/*                         show_select_posts_popup: true,*/}
                    {/*                     })*/}
                    {/*                     this.disableBodyScroll()*/}


                    {/*                 }}>Continue</button>*/}
                    {/*             </div>*/}
                    {/*         </div>*/}
                    {/*}*/}
                    {/*{this.state.show_select_posts_popup &&*/}
                    {/*      <div className='show_select_account_popup'>*/}
                    {/*    <div className='show_select_account_popup_wrapper'>*/}
                    {/*        <h1 className='show_select_account_popup_title'>Select posts</h1>*/}
                    {/*        <button className='show_select_account_popup_close_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_posts_popup: false*/}
                    {/*            })*/}
                    {/*            this.enableBodyScroll()*/}


                    {/*        }}>*/}
                    {/*            <img src={close_icon}/>*/}
                    {/*        </button>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>*/}
                    {/*            <input type='number' placeholder='120' className='show_select_account_popup_input_field'/>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon'>*/}
                    {/*                <img src={input_icon}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon2'>*/}
                    {/*                <img src={input_icon2}/>*/}
                    {/*            </div>*/}
                    {/*            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>*/}

                    {/*        </div>*/}

                    {/*        <div className='select_posts_items_wrapper'>*/}
                    {/*            {this.state.select_posts.map((item, index) => {*/}

                    {/*                return (*/}
                    {/*                    <button className="select_posts_item" key={index} onClick={() =>*/}
                    {/*                         this.selectPost(item.id)*/}
                    {/*                    }*/}
                    {/*                    style={{ border: item.open_key ? '3px solid #485AFF' : '' }}*/}
                    {/*                    >*/}
                    {/*                        <img src={item.img} />*/}
                    {/*                    </button>*/}
                    {/*                );*/}
                    {/*            })}*/}

                    {/*        </div>*/}
                    {/*        <button className='show_select_account_popup_continue_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_posts_popup: false,*/}
                    {/*                show_select_theme_popup: true*/}
                    {/*            })*/}
                    {/*            this.disableBodyScroll()*/}


                    {/*        }}>Continue</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*}*/}
                    {/*{this.state.show_select_theme_popup &&*/}
                    {/*  <div className='show_select_account_popup'>*/}
                    {/*    <div className='show_select_account_popup_wrapper'>*/}
                    {/*        <h1 className='show_select_account_popup_title'>Select theme</h1>*/}
                    {/*        <button className='show_select_account_popup_close_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_theme_popup: false*/}
                    {/*            })*/}
                    {/*            this.enableBodyScroll()*/}


                    {/*        }}>*/}
                    {/*            <img src={close_icon}/>*/}
                    {/*        </button>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>*/}
                    {/*            <input type='number' placeholder='120' className='show_select_account_popup_input_field'/>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon'>*/}
                    {/*                <img src={input_icon}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon2'>*/}
                    {/*                <img src={input_icon2}/>*/}
                    {/*            </div>*/}
                    {/*            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>*/}

                    {/*        </div>*/}

                    {/*        <div className='select_img'>*/}
                    {/*            <img src={require('../assets/img/select_popup_img.png')}/>*/}
                    {/*        </div>*/}

                    {/*        <div className='select_posts_items_wrapper'>*/}
                    {/*            {this.state.select_themes.map((item, index) => {*/}

                    {/*                return (*/}
                    {/*                    <button className="select_themes_item" key={index} onClick={() =>*/}
                    {/*                        this.selectTheme(item.id)*/}
                    {/*                    }*/}
                    {/*                            style={{ background: item.open_key ? '#ffffff' : 'none', color: item.open_key ? '#3F3E3E' : '#ffffff' }}*/}
                    {/*                    >*/}
                    {/*                        {item.title}*/}
                    {/*                    </button>*/}
                    {/*                );*/}
                    {/*            })}*/}

                    {/*        </div>*/}
                    {/*        <button className='show_select_account_popup_continue_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_theme_popup: false,*/}
                    {/*                show_select_pay_popup: true*/}
                    {/*            })*/}
                    {/*            this.disableBodyScroll()*/}


                    {/*        }}>Continue</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*}*/}

                    {/*{this.state.show_select_pay_popup &&*/}
                    {/*     <div className='show_select_account_popup'>*/}
                    {/*    <div className='show_select_account_popup_wrapper'>*/}
                    {/*        <h1 className='show_select_account_popup_title'>Select theme</h1>*/}
                    {/*        <button className='show_select_account_popup_close_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_pay_popup: false*/}
                    {/*            })*/}
                    {/*            this.enableBodyScroll()*/}


                    {/*        }}>*/}
                    {/*            <img src={close_icon}/>*/}
                    {/*        </button>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>*/}
                    {/*            <input type='number' placeholder='120' className='show_select_account_popup_input_field'/>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon'>*/}
                    {/*                <img src={input_icon}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon2'>*/}
                    {/*                <img src={input_icon2}/>*/}
                    {/*            </div>*/}
                    {/*            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>*/}

                    {/*        </div>*/}

                    {/*        <div className='select_img'>*/}
                    {/*            <img src={require('../assets/img/select_popup_img.png')}/>*/}
                    {/*        </div>*/}

                    {/*        <div className='select_pay_items_wrapper'>*/}
                    {/*            {this.state.select_pay.map((item, index) => {*/}

                    {/*                return (*/}
                    {/*                    <button className="select_pay_item" key={index}>*/}
                    {/*                        {item.title}*/}
                    {/*                        <div className='select_pay_item_icons_wrapper'>*/}
                    {/*                            <div  className='select_pay_item_icon1'>*/}
                    {/*                                <img src={select_pay_icon2} />*/}
                    {/*                            </div>*/}
                    {/*                            <div className='select_pay_item_icon2'>*/}
                    {/*                                <img src={select_pay_icon1}/>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </button>*/}
                    {/*                );*/}
                    {/*            })}*/}

                    {/*        </div>*/}
                    {/*        <button className='show_select_account_popup_continue_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_pay_popup: false,*/}
                    {/*                show_select_pay_popup2: true*/}
                    {/*            })*/}
                    {/*            this.disableBodyScroll()*/}


                    {/*        }}>Continue</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*}*/}
                    {/*{this.state.show_select_pay_popup2 &&*/}
                    {/*<div className='show_select_account_popup'>*/}
                    {/*    <div className='show_select_account_popup_wrapper'>*/}
                    {/*        <h1 className='show_select_account_popup_title'>Select theme</h1>*/}
                    {/*        <button className='show_select_account_popup_close_btn' onClick={() => {*/}
                    {/*            this.setState({*/}
                    {/*                show_select_pay_popup2: false*/}
                    {/*            })*/}
                    {/*            this.enableBodyScroll()*/}


                    {/*        }}>*/}
                    {/*            <img src={close_icon}/>*/}
                    {/*        </button>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>*/}
                    {/*            <input type='number' placeholder='120' className='show_select_account_popup_input_field'/>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon'>*/}
                    {/*                <img src={input_icon}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='show_select_account_popup_input_field_wrapper'>*/}
                    {/*            <div className='show_select_account_popup_input_field_icon2'>*/}
                    {/*                <img src={input_icon2}/>*/}
                    {/*            </div>*/}
                    {/*            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>*/}

                    {/*        </div>*/}

                    {/*        <div className='select_img'>*/}
                    {/*            <img src={require('../assets/img/select_popup_img.png')}/>*/}
                    {/*        </div>*/}

                    {/*        <div className='select_pay_items_wrapper'>*/}
                    {/*            {this.state.select_pay.map((item, index) => {*/}

                    {/*                return (*/}
                    {/*                    <button className="select_pay_item" key={index}>*/}
                    {/*                        {item.title}*/}
                    {/*                        <div className='select_pay_item_icons_wrapper'>*/}
                    {/*                            <div  className='select_pay_item_icon1'>*/}
                    {/*                                <img src={select_pay_icon2} />*/}
                    {/*                            </div>*/}
                    {/*                            <div className='select_pay_item_icon2'>*/}
                    {/*                                <img src={select_pay_icon1}/>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </button>*/}
                    {/*                );*/}
                    {/*            })}*/}

                    {/*        </div>*/}
                    {/*        <div className='show_select_pay_popup_input_field_parent'>*/}
                    {/*            <input placeholder='Enter a promocode' className='show_select_pay_popup_input_field' name='enter_promocode'/>*/}
                    {/*        </div>*/}
                    {/*        <button className='show_select_account_popup_continue_btn'>Pay</button>*/}
                    {/*        <button className='show_select_pay_popup_continue_btn'>Pay with coinbase</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*}*/}
                </div>
            </>

        )
    }
}
