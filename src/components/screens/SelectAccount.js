import React from 'react'
import { Link } from 'react-router-dom'
// import InputMask from 'react-input-mask'
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
// import Slider from "react-slick"
import '../../assets/css/select_style.css'
import Header  from '../screens/includes/Header';
import Footer  from '../screens/includes/Footer';
import input_icon from  '../../assets/svg/input_icon.fdf9ecb4fd0ce40ce8f8d873a7f32b6b.svg';
import input_icon2 from  '../../assets/svg/input_icon2.41309f50c367aeb761111dced158caff.svg';
import close_icon from "../../assets/svg/close.1dde956c7d01ed3104ed86048bc3618b.svg";
import select_pay_icon1 from "../../assets/svg/select_pay_icon2.66bdaa2758cf95dc9d4ba0812384280f.svg";
import select_pay_icon2 from "../../assets/svg/select_pay_icon1.3294b0aeef436bf5e45cb6b0d47a4259.svg";


const API_URL = 'https://kinect.tw1.ru/api/';

let sl_set = {};

let myMap;

export default class SelectAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_select_account_popup: true,
            show_select_posts_popup: false,
            show_select_theme_popup: false,
            show_select_pay_popup: false,
            show_select_pay_popup2: false,
            select_posts: [
                {
                    id: 1,
                    img: require('../../assets/img/select_post_img1.93d4c5a4d40df9d9c754.png'),
                    open_key: false
                },
                {
                    id: 2,
                    img: require('../../assets/img/select_post_img2.2628ec142dbbfcd0c485.png'),
                    open_key: false
                },
                {
                    id: 3,
                    img: require('../../assets/img/select_post_img3.5cf38ee21cf5bec00724.png'),
                    open_key: false
                },
                {
                    id: 4,
                    img: require('../../assets/img/select_post_img4.075c4e658ea7b2be1acd.png'),
                    open_key: false
                },
                {
                    id: 5,
                    img: require('../../assets/img/select_post_img5.0e26a1c5bd6045c7a88c.png'),
                    open_key: false
                },
                {
                    id: 6,
                    img: require('../../assets/img/select_post_img6.6901c01d64d4e583b02b.png'),
                    open_key: false
                },
                {
                    id: 7,
                    img: require('../../assets/img/select_post_img7.a0d59e7441150d499a92.png'),
                    open_key: false
                },
                {
                    id: 8,
                    img: require('../../assets/img/select_post_img8.f6ccc6bd6379e0c29494.png'),
                    open_key: false
                },
                {
                    id: 9,
                    img: require('../../assets/img/select_post_img9.20270f85a4a5388ca7e2.png'),
                    open_key: false
                },
            ],
            select_themes: [
                {
                    id: 1,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 2,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 3,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 4,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 5,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 6,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 7,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 8,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 9,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 10,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 11,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 12,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 13,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 14,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 15,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 16,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 17,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 18,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 19,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 20,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 21,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 22,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 23,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 24,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 25,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 26,
                    title: 'Theme',
                    open_key: false
                },
                {
                    id: 27,
                    title: 'Theme',
                    open_key: false
                },


            ],
            select_pay: [
                {
                    id: 1,
                    title: 'Text of comments',
                    open_key: false
                },
                {
                    id: 2,
                    title: 'Text of comments',
                    open_key: false
                },
                {
                    id: 3,
                    title: 'Text of comments',
                    open_key: false
                },
                {
                    id: 4,
                    title: 'Text of comments',
                    open_key: false
                },


            ],
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

    // openFaqs = (id) => {
    //     let {faqs} = this.state;
    //
    //     const objToFind = faqs.find(obj => obj.id === id);
    //     if (objToFind) {
    //         objToFind.open_key = !objToFind.open_key;
    //         console.log(faqs); // Проверяем изменения в массиве
    //         this.setState({
    //             faqs:faqs
    //         })
    //     }
    // }



    selectPost = (id) => {
        let {select_posts} = this.state;
        const objToFind = select_posts.find(obj => obj.id === id);
        if (objToFind) {
            objToFind.open_key = !objToFind.open_key;
            this.setState({
                select_posts:select_posts
            })
        }
    }
    selectTheme = (id) => {
        let {select_themes} = this.state;
        const objToFind = select_themes.find(obj => obj.id === id);
        if (objToFind) {
            objToFind.open_key = !objToFind.open_key;
            this.setState({
                select_themes:select_themes
            })
        }
    }



    handleLoad = () => {

    }




    render() {

        return (
            <>
                <div className='main_wrapper'>
                    <Header disableBodyScroll={this.disableBodyScroll} enableBodyScroll={this.enableBodyScroll} />
                    <main className='main'>
                        {this.state.show_select_account_popup &&
                        <div className='select_account'>
                            <h1 className='show_select_account_popup_title'>Select account</h1>
                            <div className='show_select_account_popup_wrapper2'>
                                <div className='show_select_account_popup_input_field_wrapper'>
                                    <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>
                                </div>
                                <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>
                                    <input type='number' className='show_select_account_popup_input_field'/>
                                    <div className='show_select_account_popup_input_field_icon'>
                                        <img src={input_icon}/>
                                    </div>
                                </div>
                                <div className='show_select_account_popup_input_field_wrapper'>
                                    <div className='show_select_account_popup_input_field_icon2'>
                                        <img src={input_icon2}/>
                                    </div>
                                    <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>

                                </div>
                                <button className='show_select_account_popup_continue_btn'  style={{maxWidth: 'unset'}} onClick={() => {
                                    this.setState({
                                        show_select_account_popup: false,
                                        show_select_posts_popup: true,
                                    })

                                }}>Continue</button>
                            </div>
                        </div>

                        }


                        {this.state.show_select_posts_popup &&
                        <div className='select_account'>
                            <h1 className='show_select_account_popup_title'>Select posts</h1>
                            <div className='show_select_account_popup_wrapper'>

                                <div className='select_posts_form_select_posts_items_wrapper'>
                                    <div className='select_posts_form_wrapper'>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>
                                            <input type='number'  className='show_select_account_popup_input_field'/>
                                            <div className='show_select_account_popup_input_field_icon'>
                                                <img src={input_icon}/>
                                            </div>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <div className='show_select_account_popup_input_field_icon2'>
                                                <img src={input_icon2}/>
                                            </div>
                                            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>

                                        </div>
                                    </div>
                                    <div className='select_posts_items_wrapper'>
                                        {this.state.select_posts.map((item, index) => {

                                            return (
                                                <button className="select_posts_item" key={index} onClick={() =>
                                                    this.selectPost(item.id)
                                                }
                                                        style={{ outline: item.open_key ? '3px solid #485AFF' : '' }}
                                                >
                                                    <img src={item.img} />
                                                </button>
                                            );
                                        })}

                                    </div>
                                </div>

                                <button className='show_select_account_popup_continue_btn' style={{marginBottom: 0}} onClick={() => {
                                    this.setState({
                                        show_select_posts_popup: false,
                                        show_select_theme_popup: true
                                    })



                                }}>Continue</button>
                            </div>
                        </div>
                        }
                        {this.state.show_select_theme_popup &&
                        <div className='select_account'>
                            <h1 className='show_select_account_popup_title'>Select theme</h1>
                            <div className='show_select_account_popup_wrapper'>

                                <div className='select_posts_form_select_posts_items_wrapper'>
                                    <div className='select_posts_form_wrapper'>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>
                                            <input type='number' className='show_select_account_popup_input_field'/>
                                            <div className='show_select_account_popup_input_field_icon'>
                                                <img src={input_icon}/>
                                            </div>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <div className='show_select_account_popup_input_field_icon2'>
                                                <img src={input_icon2}/>
                                            </div>
                                            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>

                                        </div>
                                    </div>
                                    <div className='select_img'>
                                        <img src={require('../../assets/img/select_popup_img.fc5c309562f5b656a46f.png')}/>
                                    </div>
                                </div>
                                <div className='select_posts_items_wrapper2'>
                                    {this.state.select_themes.map((item, index) => {

                                        return (
                                            <button className="select_themes_item" key={index} onClick={() =>
                                                this.selectTheme(item.id)
                                            }
                                                    style={{ background: item.open_key ? '#ffffff' : 'none', color: item.open_key ? '#3F3E3E' : '#ffffff' }}
                                            >
                                                {item.title}
                                            </button>
                                        );
                                    })}

                                </div>
                                <button className='show_select_account_popup_continue_btn' onClick={() => {
                                    this.setState({
                                        show_select_theme_popup: false,
                                        show_select_pay_popup: true
                                    })
                                }}>Continue</button>
                            </div>
                        </div>
                        }

                        {this.state.show_select_pay_popup &&
                        <div className='select_account'>
                            <h1 className='show_select_account_popup_title'>Select theme</h1>
                            <div className='show_select_account_popup_wrapper'>
                                <div className='select_posts_form_select_posts_items_wrapper'>
                                    <div className='select_posts_form_wrapper'>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>
                                            <input type='number' className='show_select_account_popup_input_field'/>
                                            <div className='show_select_account_popup_input_field_icon'>
                                                <img src={input_icon}/>
                                            </div>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <div className='show_select_account_popup_input_field_icon2'>
                                                <img src={input_icon2}/>
                                            </div>
                                            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>

                                        </div>
                                    </div>
                                    <div className='select_img'>
                                        <img src={require('../../assets/img/select_popup_img.fc5c309562f5b656a46f.png')}/>
                                    </div>
                                </div>

                                <div className='select_pay_items_wrapper'>
                                    {this.state.select_pay.map((item, index) => {

                                        return (
                                            <button className="select_pay_item" key={index}>
                                                {item.title}
                                                <div className='select_pay_item_icons_wrapper'>
                                                    <div  className='select_pay_item_icon1'>
                                                        <img src={select_pay_icon2} />
                                                    </div>
                                                    <div className='select_pay_item_icon2'>
                                                        <img src={select_pay_icon1}/>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}

                                </div>
                                <button className='show_select_account_popup_continue_btn' onClick={() => {
                                    this.setState({
                                        show_select_pay_popup: false,
                                        show_select_pay_popup2: true
                                    })
                                }}>Continue</button>
                            </div>
                        </div>
                        }
                        {this.state.show_select_pay_popup2 &&
                        <div className='select_account'>
                            <h1 className='show_select_account_popup_title'>Select theme</h1>
                            <div className='show_select_account_popup_wrapper'>
                                <div className='select_posts_form_select_posts_items_wrapper'>
                                    <div className='select_posts_form_wrapper'>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <textarea className='show_select_account_popup_textarea_field' placeholder='Comments'></textarea>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper' style={{justifyContent: 'space-between'}}>
                                            <input type='number'  className='show_select_account_popup_input_field'/>
                                            <div className='show_select_account_popup_input_field_icon'>
                                                <img src={input_icon}/>
                                            </div>
                                        </div>
                                        <div className='show_select_account_popup_input_field_wrapper'>
                                            <div className='show_select_account_popup_input_field_icon2'>
                                                <img src={input_icon2}/>
                                            </div>
                                            <input type='text' placeholder='Enter your instagram' className='show_select_account_popup_input_field'/>

                                        </div>
                                    </div>
                                    <div className='select_img'>
                                        <img src={require('../../assets/img/select_popup_img.fc5c309562f5b656a46f.png')}/>
                                    </div>
                                </div>

                                <div className='select_pay_items_wrapper'>
                                    {this.state.select_pay.map((item, index) => {

                                        return (
                                            <button className="select_pay_item" key={index}>
                                                {item.title}
                                                <div className='select_pay_item_icons_wrapper'>
                                                    <div  className='select_pay_item_icon1'>
                                                        <img src={select_pay_icon2} />
                                                    </div>
                                                    <div className='select_pay_item_icon2'>
                                                        <img src={select_pay_icon1}/>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}

                                </div>
                                <div className='show_select_pay_popup_input_field_parent'>
                                    <input placeholder='Enter a promocode' className='show_select_pay_popup_input_field' name='enter_promocode'/>
                                </div>
                                <button className='show_select_account_popup_continue_btn'>Pay</button>
                                <button className='show_select_pay_popup_continue_btn'>Pay with coinbase</button>
                            </div>
                        </div>
                        }
                    </main>
                    <Footer/>
                </div>
            </>

        )
    }
}
