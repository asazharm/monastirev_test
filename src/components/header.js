import React, {Fragment, Component, useLayoutEffect, useState} from 'react';
import Sticky from 'react-stickynode';
import MediaQuery from 'react-responsive'

import Nav from  './navigation'
import './../styles/style.scss';
import logoImg from './../images/logo.svg';
import userImg from './../images/user-image.svg';



class Header extends Component{
    state = {
        catalogOpened: false,
    }


    handleClick = () => {
        this.setState({
                catalogOpened: !this.state.catalogOpened
            }
        )
    }

    handleCloseClick = (value) => {
        this.setState({
            catalogOpened: value
        })
    }

    render() {


        return(
    <Fragment>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <MediaQuery minWidth={640}>
                        <div className="header__top-panel">
                            <div className="logo">
                                <a className="logo__link" href="">
                                    <img src={logoImg} alt="" className="logo__img"></img>
                                </a>
                            </div>
                            <div className="location">
                                <button className="location__btn"><span>Владивосток</span></button>
                            </div>
                            <div className="information">
                                <ul className="information__list">
                                    <li className="information__list-item"><a
                                        className="information__list-link information__list-link--active" href="">Адреса
                                        аптек</a></li
                                    >
                                    <li className="information__list-item"><a className="information__list-link"
                                                                              href="">Доставка</a></li
                                    >
                                    <li className="information__list-item"><a className="information__list-link"
                                                                              href="">О нас</a></li
                                    >
                                    <li className="information__list-item"><a className="information__list-link"
                                                                              href="">Акции</a></li>
                                </ul>
                            </div>
                            <div className="visual-version">
                                <button className="visual-version__btn"><span>Версия для слабовидящих</span></button>
                            </div>
                            <div className="contact-num">
                                <span>8 800 707 77 33</span>
                            </div>
                        </div>

                        <Sticky enabled={true} top={0}>
                        <div className="header__bot-panel">
                            <div class="catalog-button">
                                <button class="catalog-button__btn" onMouseDown={this.handleClick}>
                                    <span>Каталог товаров</span>
                                </button>
                            </div>
                            <div class="search">
                                <input class="search__input" type="text" placeholder="Средство,  действующее вещество, проблема"></input>
                                <button class="search__btn"></button>
                            </div>
                            <div class="profile">
                                <a><img class="profile__image"src={userImg} alt="profile-image"></img></a>
                                <div class="profile__name-link">
                                    <a href="" class="profile__name">Жора</a>
                                    <a href="" class="profile__link">Ваш профиль</a>
                                </div>
                            </div>
                            <div class="favorites">
                                <button class="favorites__btn"></button>
                            </div>
                            <div class="shop-cart">
                                <button class="shop-cart__btn"></button>
                            </div>
                        </div>
                        </Sticky>
                        </MediaQuery>
                        <MediaQuery maxWidth={640}>
                            {/*<Sticky enabled={true} top={0}>*/}
                                <div class="catalog-button">
                                    <button class="catalog-button__btn" onMouseDown={this.handleClick}>
                                        <span>Каталог товаров</span>
                                    </button>
                                </div>
                                <div className="search">
                                    <button className="search__btn"></button>
                                </div>
                                <div className="logo">
                                    <a className="logo__link" href="">
                                        <img src={logoImg} alt="" className="logo__img"></img>
                                    </a>
                                </div>
                                <div class="shop-cart">
                                    <button class="shop-cart__btn"></button>
                                </div>
                            {/*</Sticky>*/}
                        </MediaQuery>

                    </div>

                </div>

            </header>

        <div className='container'>
            <Nav categories = {this.props.categories}
                 navState = {this.state.catalogOpened}
                closeNav = {this.handleCloseClick}></Nav>
        </div>

</Fragment>
        )
    }
}

export default Header;