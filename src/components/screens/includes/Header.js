import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll';
// import axios from 'axios';
// import InputMask from 'react-input-mask'
// import { isMobile, isIOS, isAndroid, isTablet } from 'react-device-detect'
// import Slider from "react-slick"
import '../../../assets/css/header_style.css'
import logo from '../../../assets/svg/logo.18181ee4c4a79bf8b9f8df8a05370876.svg'
import hamburger_icon from '../../../assets/svg/hamburger_icon.9b492ca763ce405966b578ca958685f1.svg'
import close_icon from '../../../assets/svg/close.1dde956c7d01ed3104ed86048bc3618b.svg'
import Profile from "./../Profile";
// import browserHistory from "react-router";


const API_URL = 'https://kinect.tw1.ru/api/';

let sl_set = {};

let myMap;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_mobile_menu: false,
            logged_user: false,
            checked: false,
            show_login_popup: false,
            show_sign_up_popup: false,
            login: '',
            login_error: false,
            login_error_text: '',

            email: '',
            email_error: false,
            email_error_text: '',

            instagram: '',
            instagram_error: false,
            instagram_error_text: '',

            password: '',
            password_error: false,
            password_error_text: '',

        }


    }



    handleChange = () => {
        this.setState({
            checked: !this.state.checked,
        })
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

    showMobileMenu = () => {
        this.setState({
            show_mobile_menu: true
        })
    }

    // register = async () => {
    //
    //
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //
    //     var raw = JSON.stringify({
    //         "username": "Artyom4",
    //         "email": "hakobjanyan.200796@gmail.com",
    //         "password": "123456",
    //         "instagram": "@ani_artem96"
    //     });
    //
    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };
    //
    //     fetch("http://wannahype.com:8080/api/user", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    //
    // }

    //
    //  register = async () => {
    //
         // let form = new FormData();
    //
    //      form.append("email", email);
    //      form.append("username", login);
    //      form.append("instagram", instagram);
    //      form.append("password", password);
    //      try {
    //
    //          let config = {
    //              method: 'POST',
    //              url: `http://wannahype.com:8080/api/user`,
    //              headers: {
    //                  Accept: "application/json",
    //                  "Content-Type": "multipart/form-data",
    //              },
    //              data: form,
    //          };
    //
    //          axios(config).then(async (response) => {
    //              response = response.data;
    //
    //              console.log(response, 'register')
    //
    //          })
    //      } catch (e) {
    //          console.log(e)
    //      }
    //
    //
    //
    //       try {
    //              fetch(`http://wannahype.com:8080/api/user`, {
    //                  method: 'POST',
    //                  headers: {
    //                      'Accept': 'application/json',
    //                      'Content-Type': 'application/json',
    //                  },
    //                 body: JSON.stringify({
    //                      email: email,
    //                     password: password,
    //                      instagram: instagram,
    //                      username: login,
    //                  })
    //
    //              }).then((response) => {
    //                  return response.json()
    //              }).then((response) => {
    //
    //
    //                console.log(response, 'register')
    //
    //             })
    //      } catch (e) {
    //              console.log(e)
    //          }
    // }

     validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        return emailRegex.test(email);
    };


    register = async  () => {

        let myHeaders = new Headers();
        let {email, login, instagram, password} = this.state;
        myHeaders.append("Content-Type", "application/json");
        const isValidEmail = this.validateEmail(email);


        if (email.length == 0  || isValidEmail === false || login.length == 0 || instagram.length == 0 || password.length == 0 || password.length > 0 && password.length < 6) {
            if (email.length == 0) {
                    this.setState({
                        email_error: true,
                        email_error_text: 'The field is required'
                    })
                }  else if (isValidEmail === false) {
                    this.setState({
                        email_error: true,
                        email_error_text: 'The email is not valid'
                    })
            }  else  {
                this.setState({
                    email_error: false,
                    email_error_text: ''
                })
            }





            if (login.length == 0) {
                this.setState({
                    login_error: true,
                    login_error_text: 'The field is required'
                })
            } else {
                this.setState({
                    login_error: false,
                    login_error_text: ''
                })
            }

            if (instagram.length == 0) {
                this.setState({
                    instagram_error: true,
                    instagram_error_text: 'The field is required'
                })
            } else {
                this.setState({
                    instagram_error: false,
                    instagram_error_text: ''
                })
            }

            if (password.length == 0) {
                this.setState({
                    password_error: true,
                    password_error_text: 'The field is required'
                })
            } else if (password.length > 0 && password.length < 6) {
                this.setState({
                    password_error: true,
                    password_error_text: 'The password must be at least 6 characters'
                })
            } else {
                this.setState({
                    password_error: false,
                    password_error_text: ''
                })
            }

        } else {
            this.setState({
                password_error: false,
                password_error_text: '',
                email_error: false,
                email_error_text: '',
                instagram_error: false,
                instagram_error_text: '',
                login_error: false,
                login_error_text: '',
            })
            let raw = JSON.stringify({
                email: email,
                username: login,
                instagram: instagram,
                password: password,
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            let response = await fetch("http://wannahype.com:8080/api/user", requestOptions);
            console.log(response, 'rgggggg')
            console.log(response.status, 'statussss')
            if (response.status == 403) {
                this.setState({
                  login_error: true,
                  login_error_text: 'This username isn\'t available'
                })
            } else {
                this.setState({
                    login_error: false,
                    login_error_text: ''
                })
            }

            if (response.status == 200) {
                this.setState({
                    show_login_popup: false,

                })
                window.location = '/profile'


            }

        }


    }
    login = async  () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbnVsaWs3MCIsImlhdCI6MTY4NDY4MzYyNCwiZXhwIjoxNjg0Njg0ODI0fQ.BH9C-oIJ9yH4pVyy4lk8oYHYvyZ5Ed-iy1HYNzo9hlU");
        let {login, password} = this.state;

        if (login.length == 0 || password.length == 0 || password.length > 0 && password.length < 6) {

            if (login.length == 0) {
                this.setState({
                    login_error: true,
                    login_error_text: 'The field is required'
                })
            } else {
                this.setState({
                    login_error: false,
                    login_error_text: ''
                })
            }


            if (password.length == 0) {
                this.setState({
                    password_error: true,
                    password_error_text: 'The field is required'
                })
            } else if (password.length > 0 && password.length < 6) {
                this.setState({
                    password_error: true,
                    password_error_text: 'The password must be at least 6 characters'
                })
            } else {
                this.setState({
                    password_error: false,
                    password_error_text: ''
                })
            }
        } else {
            this.setState({
                password_error: false,
                password_error_text: '',
                login_error: false,
                login_error_text: ''
            })

            let raw = JSON.stringify({
                username: login,
                password: password,
            });


            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            let response = await fetch("http://wannahype.com:8080/api/authenticate", requestOptions);
            console.log(response, 'rgggggg')
            console.log(response.status, 'statussss')

            if (response.status == 401) {
                this.setState({
                    login_error: true,
                    login_error_text: 'This username isn\'t exist'
                })
            } else {
                this.setState({
                    login_error: false,
                    login_error_text: ''
                })
                if (response.status == 200) {
                    this.setState({
                        show_login_popup: false,
                    })

                    this.props.enableBodyScroll()
                    window.location = '/profile'


                }
            }


        }




        }




    render() {
        return (
            <>
                <div className='header'>
                    <div className='header_wrapper'>
                        <div className='header_logo'>
                            <Link to='/'  className='header_logo_link'>
                                <img src={logo}/>
                            </Link>
                        </div>
                        <div className='header_links_wrapper'>
                            <LinkScroll to="trial" smooth={true} className='header_link'>
                                Trial
                            </LinkScroll>
                            <LinkScroll to="comments" smooth={true} className='header_link'>
                                Comments
                            </LinkScroll>
                            <LinkScroll to="followers" smooth={true} className='header_link'>
                                Followers
                            </LinkScroll>
                            <LinkScroll   to="likes" smooth={true} className='header_link'>
                                Likes
                            </LinkScroll>
                            <LinkScroll  to="faq" smooth={true} className='header_link'>
                                FAQ
                            </LinkScroll>
                        </div>
                        <button className='login_btn' onClick={() => {
                            this.setState({
                                show_login_popup: true
                            })
                            this.props.disableBodyScroll()
                        }
                        }>Log in</button>

                        <button className='hamburger_menu_btn' onClick={() =>
                        {
                            this.showMobileMenu()
                            this.props.disableBodyScroll()
                        }
                        }>
                            <img src={hamburger_icon}/>
                        </button>

                        {this.state.show_mobile_menu &&
                        <div className='header_mobile_wrapper'>
                            <div className='header_mobile_wrapper_child'>
                                <button className='header_mobile_wrapper_close_btn' onClick={() => {
                                    this.setState({
                                        show_mobile_menu: false
                                    })
                                    this.props.enableBodyScroll()
                                }}>
                                    <img src={close_icon}/>

                                </button>

                                {this.state.logged_user ?
                                    <div className='logged_user_img_info_box'>
                                        <div className='logged_user_avatar'>
                                            <img src={require('../../../assets/img/avatar.8cd3bd00006ad5206e9f.png')}/>
                                            <div className='online_user'>
                                            </div>
                                        </div>
                                        <div className='logged_user_info_box'>
                                            <p className='logged_user_info_box_name'>Logged as Kevin</p>
                                            <p className='logged_user_info_box_info'>Instagram_666</p>
                                        </div>
                                    </div>
                                    :
                                    <div className='mobile_login_btn_parent'>
                                        <button className='mobile_login_btn' onClick={() => {
                                            this.setState({
                                                show_mobile_menu: false,
                                                show_login_popup: true
                                            })
                                            this.props.disableBodyScroll()
                                        }
                                        }>Log in</button>
                                    </div>
                                }


                                <div className='mobile_header_links_wrapper'>
                                    <LinkScroll to="trial" smooth={true}  className='header_link' onClick={() =>
                                    {
                                        {this.setState({
                                            show_mobile_menu: false
                                        })}
                                        this.props.enableBodyScroll()
                                    }
                                    }>
                                        Trial
                                    </LinkScroll>

                                    <LinkScroll to="comments" smooth={true} className='header_link' onClick={() =>
                                    {
                                        {this.setState({
                                            show_mobile_menu: false
                                        })}
                                        this.props.enableBodyScroll()
                                    }
                                    }>
                                        Comments
                                    </LinkScroll>
                                    <LinkScroll to="followers" smooth={true} className='header_link' onClick={() =>
                                    {
                                        {this.setState({
                                            show_mobile_menu: false
                                        })}
                                        this.props.enableBodyScroll()
                                    }
                                    }>
                                        Followers
                                    </LinkScroll>
                                    <LinkScroll   to="likes" smooth={true} className='header_link' onClick={() =>
                                    {
                                        {this.setState({
                                            show_mobile_menu: false
                                        })}
                                        this.props.enableBodyScroll()
                                    }
                                    }>
                                        Likes
                                    </LinkScroll>
                                    <LinkScroll  to="faq" smooth={true} className='header_link' onClick={() =>
                                    {
                                        {this.setState({
                                            show_mobile_menu: false
                                        })}
                                        this.props.enableBodyScroll()
                                    }
                                    }>
                                        FAQ
                                    </LinkScroll>
                                </div>
                                <div className='header_mobile_line'></div>

                            </div>

                        </div>
                        }

                    </div>

                    {this.state.show_login_popup &&
                    <div className='login_popup'>
                        <div className='login_popup_wrapper'>

                            <h1 className='login_popup_title'>Login</h1>
                            <button className='login_popup_close_btn' onClick={() => {
                                this.setState({
                                    show_login_popup: false
                                })
                                this.props.enableBodyScroll()


                            }}>
                                <img src={close_icon}/>
                            </button>
                            <div className="login_popup_input_field_title_wrapper">
                                <p className='login_popup_input_title'>Login</p>
                                <input type="text" name="login" value={this.state.login}
                                       onChange={(e) => this.setState({
                                           login: e.target.value
                                       })}

                                       className='login_popup_input_field' />
                                {this.state.login_error &&
                                <p className='error_text'>{this.state.login_error_text}</p>
                                }
                            </div>
                            <div className="login_popup_input_field_title_wrapper">
                                <p className='login_popup_input_title'>Password</p>
                                <input type="password" name="password" value={this.state.password}  onChange={(e) => this.setState({
                                    password: e.target.value
                                })} className='login_popup_input_field' />
                                {this.state.password_error &&
                                <p className='error_text'>{this.state.password_error_text}</p>
                                }

                            </div>
                            <div className='checkbox_forget_password_btns_wrapper'>
                                <label className='checkbox_label'>
                                    <input
                                        type="checkbox"
                                        checked={this.state.checked}
                                        onChange={this.handleChange}
                                        className='checkbox_input_field'
                                    />
                                    <span className='checkMark'>

                                        </span>
                                    <span className='checkbox_input_label_title'>Remember me</span>
                                </label>
                                <button className='forget_password_btn'>Forgot password?</button>
                            </div>
                            <div className='login_sign_up_btns_wrapper'>

                                <button  className='login_popup_btn' onClick={() =>  this.login()}>Login</button>
                                <button className='sign_up_popup_btn' onClick={() => {
                                    this.setState({
                                        show_login_popup: false,
                                        show_sign_up_popup: true
                                    })
                                    this.props.disableBodyScroll()
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    }

                    {this.state.show_sign_up_popup &&
                    <div className='login_popup' id='sign_up_popup'>
                        <div className='login_popup_wrapper'>

                            <h1 className='login_popup_title'>Sign Up</h1>
                            <button className='login_popup_close_btn' onClick={() => {
                                this.setState({
                                    show_sign_up_popup: false
                                })
                                this.props.enableBodyScroll()


                            }}>
                                <img src={close_icon}/>
                            </button>
                            <div className="login_popup_input_field_title_wrapper">
                                <p className='login_popup_input_title'>Login</p>
                                <input type="text" name="login" value={this.state.login}
                                       onChange={(e) => this.setState({
                                           login: e.target.value
                                       })}

                                       className='login_popup_input_field' />
                                {this.state.login_error &&
                                    <p className='error_text'>{this.state.login_error_text}</p>
                                }
                            </div>
                            <div className="login_popup_input_field_title_wrapper">
                                <p className='login_popup_input_title'>Email</p>
                                <input type="email" name="email" value={this.state.email}  onChange={(e) => this.setState({
                                    email: e.target.value
                                })} className='login_popup_input_field' />

                                {this.state.email_error &&
                                     <p className='error_text'>{this.state.email_error_text}</p>
                                }
                            </div>
                            <div className="login_popup_input_field_title_wrapper">
                                <div className='login_popup_input_field_title_checkbox_wrapper'>
                                    <p className='login_popup_input_title' style={{marginBottom: 0, marginRight: 14}}>Instagram</p>
                                    <label className='checkbox_label'>
                                        <input
                                            type="checkbox"
                                            checked={this.state.checked}
                                            onChange={this.handleChange}
                                            className='checkbox_input_field'
                                        />
                                        <span className='checkMark'>

                                        </span>
                                        <span className='checkbox_input_label_title'>not required</span>
                                    </label>
                                </div>

                                <input type="email" name="instagram" value={this.state.instagram}   onChange={(e) => this.setState({
                                    instagram: e.target.value
                                })} className='login_popup_input_field' />
                                {this.state.instagram_error &&
                                     <p className='error_text'>{this.state.instagram_error_text}</p>
                                }

                            </div>
                            <div className="login_popup_input_field_title_wrapper">
                                <p className='login_popup_input_title'>Password</p>
                                <input type="password" name="password" value={this.state.password}  onChange={(e) => this.setState({
                                    password: e.target.value
                                })} className='login_popup_input_field' />
                                {this.state.password_error &&
                                    <p className='error_text'>{this.state.password_error_text}</p>
                                }

                            </div>
                            <button className='main_sign_up_popup_btn' onClick={() => this.register()}>Sign Up</button>
                        </div>
                    </div>
                    }
                </div>
            </>

        )
    }
}
