import React from 'react'
import { Link } from 'react-router-dom'
// import InputMask from 'react-input-mask'
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
// import Slider from "react-slick"
import '../../assets/css/profile_style.css'
import Header  from '../screens/includes/Header';
import Footer  from '../screens/includes/Footer';
import faq_icon from "../../assets/svg/faq_icon.0c2b8a530299953f33d97c13e7728581.svg";
import faq_icon2 from "../../assets/svg/faq_icon2.3b0d976860060ef8b94b2b31eba05f55.svg";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";


const API_URL = 'https://kinect.tw1.ru/api/';

let sl_set = {};

let myMap;

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pay_history: [
                {
                    id: 1,
                    date: '24.01.23',
                    type: 'Buy',
                    amount: '+10',
                    smthng: '100',
                },
                {
                    id: 2,
                    date: '24.01.23',
                    type: 'Buy',
                    amount: '+10',
                    smthng: '100',
                },
                {
                    id: 3,
                    date: '24.01.23',
                    type: 'Buy',
                    amount: '+10',
                    smthng: '100',
                },
                {
                    id: 4,
                    date: '24.01.23',
                    type: 'Buy',
                    amount: '+10',
                    smthng: '100',
                },
                {
                    id: 5,
                    date: '24.01.23',
                    type: 'Buy',
                    amount: '+10',
                    smthng: '100',
                },
            ],
            customers: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large' }
            ],
            data_table_info: [
                {
                    id: 1,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img1.94e963cc57df0cf50c34.png'),
                    status: 'Done',
                },
                {
                    id: 2,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img2.f007ca84d872fe1d16f6.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'gooooo',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'jjjjjjjjj',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },
                {
                    id: 1,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img1.94e963cc57df0cf50c34.png'),
                    status: 'Done',
                },
                {
                    id: 2,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img2.f007ca84d872fe1d16f6.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'Likes',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'barev',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },
                {
                    id: 3,
                    date:'24.01.23',
                    type: 'booo',
                    quality: '50',
                    account: '@Kevin',
                    post: require('../../assets/img/data_table_img3.d7aa20b56d67f1df449b.png'),
                    status: 'Done',
                },


            ]
        }
    }

    imageBodyTemplate = (product) => {
        return <img src={product.post} alt={product.post} className="w-6rem shadow-2 border-round" style={{width: 53, height: 53, objectFit: 'cover', borderRadius: 13, overflow: 'hidden'}}/>;
    };
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
                    <Header style={{backgroundColor: 'red'}} disableBodyScroll={this.disableBodyScroll} enableBodyScroll={this.enableBodyScroll} />
                    <main className='main'>
                        <section className='profile'>
                            <div className='profile_wrapper'>
                                <div className='profile_change_password_email_pay_history_items_wrapper'>
                                    <div className='profile_change_password_email_item'>
                                        <div className='profile_change_password_email_item_input_field_btn_box'>
                                            <input type="email" name="email" className='profile_change_password_email_item_input_field' placeholder='mailto:abc@gmail.com' />
                                            <button className='profile_change_password_email_item_input_field_btn'>Change</button>
                                        </div>
                                        <div className='profile_change_password_email_item_input_field_parent'>
                                            <input type="text" name="username" className='profile_change_password_email_item_input_field' placeholder='@MrTwister' />
                                            <div className='hidden_div'></div>

                                        </div>
                                        <div className='profile_change_password_email_item_input_field_parent'>
                                            <input type="password" name="newPassword" className='profile_change_password_email_item_input_field' placeholder='Enter a new pass' />
                                            <div className='hidden_div'></div>
                                        </div>
                                        <div className='profile_change_password_email_item_input_field_btn_box'>
                                            <input type="password" name="confirmNewPassword" className='profile_change_password_email_item_input_field' placeholder='Confirm a new pass' />
                                            <button className='profile_change_password_email_item_input_field_btn'>Change</button>
                                        </div>

                                    </div>
                                    <div className='profile_change_password_pay_history_item'>
                                        <div className='profile_pay_history_item_title_pay_btn_box'>
                                            <p className='profile_pay_history_item_title'>150$</p>
                                            <button className='profile_pay_history_item_pay_btn'>Pay</button>
                                        </div>
                                        <div className='profile_pay_history_details_items_wrapper'>
                                            <div className='profile_pay_history_details_item_titles_wrapper'>
                                                <div className="profile_pay_history_details_item_title_parent">
                                                    <p className='profile_pay_history_details_item_title'>Date</p>
                                                </div>
                                                <div className="profile_pay_history_details_item_title_parent">
                                                    <p className='profile_pay_history_details_item_title'>Type</p>
                                                </div>
                                                <div className="profile_pay_history_details_item_title_parent">
                                                    <p className='profile_pay_history_details_item_title'>Amount</p>
                                                </div>
                                                <div className="profile_pay_history_details_item_title_parent">
                                                    <p className='profile_pay_history_details_item_title'>Smthng</p>
                                                </div>

                                            </div>
                                            {this.state.pay_history.map((item, index) => {

                                                return (
                                                    <div key={index} className='profile_pay_history_details_item'>
                                                        <div className="profile_pay_history_details_item_info_box">
                                                            <p className='profile_pay_history_details_item_info'>{item.date}</p>
                                                        </div>
                                                        <div className="profile_pay_history_details_item_info_box">
                                                            <p className='profile_pay_history_details_item_info'>{item.type}</p>
                                                        </div>
                                                        <div className="profile_pay_history_details_item_info_box">
                                                            <p className='profile_pay_history_details_item_info'>{item.amount}</p>
                                                        </div>
                                                        <div className="profile_pay_history_details_item_info_box">
                                                            <p className='profile_pay_history_details_item_info'>{item.smthng}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}

                                        </div>
                                    </div>
                                </div>
                                <DataTable scrollable={false} className='datatable_wrapper' value={this.state.data_table_info} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                    <Column field="date" header="Date"></Column>
                                    <Column field="type" header="Type"></Column>
                                    <Column field="quality" header="Quality"></Column>
                                    <Column field="account" header="Account"></Column>
                                    <Column header="Image" body={this.imageBodyTemplate}></Column>
                                    <Column field="status" header="Status"></Column>
                                </DataTable>
                                <button className='new_order_btn'>New order</button>
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </div>
            </>

        )
    }
}
