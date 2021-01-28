import React, {Component, Fragment} from 'react'
import MediaQuery from 'react-responsive'
import {Accordion, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import heartIcon from './../images/heart-icon.svg';
import babeIcon from './../images/babe-icon.svg';
import coffeeIcon from './../images/coffee-icon.svg';
import cosmeticsIcon from './../images/cosmetics-icon.svg'
import glassiesIcon from './../images/glassies-icon.svg'
import homeIcon from './../images/home-icon.svg'
import medtoolsIcon from './../images/medtools-icon.svg'
import salesIcon from './../images/sales-icon.svg'
import catalogHeader from './../images/catalog-header-icon.svg'
import locationMin from './../images/location-min.svg'
import profileImg from './../images/profile-img-min.svg'
import favorites from './../images/favorites-icon.svg'
import contactIcon from './../images/contact-icon.svg'
import appApple from './../images/app-apple.svg'
import appGoogle from './../images/app-google.svg'


// 'categories' object for example like a data from axios/fetch query

let categories = [
    {
        'id': 1,
        'name': "Аптечные товары",
        'subcategories' : ["БАДы и Витамины","Косметические средства с лечебным эффектом","Лечебное и диетическое питание","Медицинские изделия","Минеральные воды","Спортивное питание","Для здоровья"],
        'iconPath': heartIcon
    },
    {
        'id': 2,
        'name': "Косметика",
        'subcategories' : ["Подкатегория1","Подкатегория2"],
        'iconPath': cosmeticsIcon
    },
    {
        'id': 3,
        'name': "Здоровое питание",
        'subcategories' : ["Подкатегория1","Подкатегория2","подкатегория3"],
        'iconPath': coffeeIcon
    },
    {
        'id': 4,
        'name': "Для дома и семьи",
        'subcategories' : ["Подкатегория1","Подкатегория2"],
        'iconPath': homeIcon
    },
    {
        'id': 5,
        'name': "Мама и малыш",
        'subcategories' : ["Подкатегория1","Подкатегория2","подкатегория3"],
        'iconPath': babeIcon
    },
    {
        'id': 6,
        'name': "Оптика",
        'subcategories' : ["Подкатегория1","Подкатегория2"],
        'iconPath': glassiesIcon
    },
    {
        'id': 7,
        'name': "Медицинские приборы",
        'subcategories' : ["Подкатегория1","Подкатегория2","подкатегория3"],
        'iconPath': medtoolsIcon
    },
    {
        'id': 8,
        'name': "Скидки",
        'subcategories' : [],
        'iconPath': salesIcon
    }
]

// let subcategories = [["БАДы и Витамины","Косметические средства с лечебным эффектом","Лечебное и диетическое питание","Медицинские изделия","Минеральные воды","Спортивное питание","Для здоровья"]]

class Nav extends Component{
    state = {
        selectedCategory: undefined,
        subCategoryList: undefined,
    }

    handleFocus = (categoryName, subCategoryList) => {
        this.setState(
            {
                selectedCategory: categoryName,
                subCategoryList: subCategoryList
            }
        )
    }


    render() {
        let categoriesList;
        let subCategoryList;
        let categoriesListMobile;

        categoriesList = categories.map(
        (category) => {
            return(

                    <button className="category-list__btn" onMouseEnter={() => this.handleFocus(category.name, category.subcategories)}>
                        <img className="category-list__icon" src={category.iconPath}></img>
                        <h4 className="category-list__title">{category.name}</h4>
                    </button>

            )
        })


        categoriesListMobile = categories.map(
            (category) => {
                return(
                    <Card>
                            <Accordion.Toggle className='category-list__btn' as={Card.Header} eventKey={category.id}>
                                        <img className="category-list__icon" src={category.iconPath}></img>
                                        <h4 className="category-list__title">{category.name}</h4>
                            </Accordion.Toggle>


                            {category.subcategories.map(
                                (subCategory) => {
                                    return(<Accordion.Collapse  eventKey={category.id}>
                                        <div className="subcategory-list__item">
                                            <button className="subcategory-list__btn"><span className= "subcategory-list__title">{subCategory}</span></button>
                                        </div>
                                    </Accordion.Collapse>
                                    )}
                                    )}
                    </Card>
                )
            })


        subCategoryList = this.state.subCategoryList ?
            this.state.subCategoryList.map(
                (sub) => {
                    return(
                        <li className="subcategory-list__item">
                            <button className="subcategory-list__btn"><span className= "subcategory-list__title">{sub}</span></button>
                        </li>
                    )
                }
            ) : undefined


        return(
        <Fragment>
            <MediaQuery minWidth={640}>
                    <nav className="nav">
                        <div class="nav__switch-filter">
                            <button className="nav__switch-btn nav__switch-btn--active">категории</button>
                            <button className="nav__switch-btn">бренд</button>
                        </div>
                        <ul className="category-list">
                            {categoriesList}
                        </ul>
                        <ul className="subcategory-list">
                            {subCategoryList}
                        </ul>
                    </nav>
            </MediaQuery>
            <MediaQuery maxWidth={640}>
                    <nav class="mobile-nav">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle eventKey="catalog">
                                <div className="mobile-nav-header">
                                    <img className="mobile-nav-header__icon" src={catalogHeader}></img>
                                    <h4 className="mobile-nav-header__title">Каталог</h4>
                                    <button className="mobile-nav-header__cls-btn"></button>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="catalog">
                                <div>
                                    <div className="nav__switch-filter">
                                        <button className="nav__switch-btn nav__switch-btn--active">категории</button>
                                        <button className="nav__switch-btn">бренд</button>
                                    </div>
                                    <Accordion className={categoriesList} defaultActiveKey="0">
                                        {categoriesListMobile}
                                    </Accordion>
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                        <div className='personal-data-menu'>
                            <div className='personal-data-menu__item'>
                                <a className='personal-data-menu__link'><img className='personal-data-menu__img' src={profileImg}></img></a>
                                <div className="personal-data-menu__box">
                                    <a className = 'personal-data-menu__top'>Профиль</a>
                                    <a className = 'personal-data-menu__bot'>Жора</a>
                                </div>
                            </div>
                            <div className='personal-data-menu__item'>
                                <a className='personal-data-menu__link'><img className='personal-data-menu__img' src={favorites}></img></a>
                                <div className="personal-data-menu__box">
                                    <a className = 'personal-data-menu__top'>Избранное</a>
                                    <a className = 'personal-data-menu__bot'>15 товаров</a>
                                </div>
                            </div>
                            <div className='personal-data-menu__item'>
                                <a className='personal-data-menu__link'><img className='personal-data-menu__img' src={locationMin}></img></a>
                                <div className="personal-data-menu__box">
                                    <a className = 'personal-data-menu__top'>Южно-Сахалинск</a>
                                    <a className = 'personal-data-menu__bot'>15 аптек</a>
                                </div>
                            </div>
                        </div>
                        <div className="information">
                            <ul className="information__list">
                                <li className="information__list-item"><a
                                    className="information__list-link" href="">Акции</a></li
                                >
                                <li className="information__list-item"><a className="information__list-link"
                                                                          href="">Доставка</a></li
                                >
                                <li className="information__list-item"><a className="information__list-link"
                                                                          href="">Новости</a></li
                                >
                                <li className="information__list-item"><a className="information__list-link"
                                                                          href="">О компании</a></li>
                            </ul>
                        </div>
                        <div className='contact-num-min'>
                            <a className='contact-num-min__link'><img className='contact-num-min__img' src={contactIcon}></img></a>
                            <div className='contact-num-min__box'>
                                <a className = 'contact-num-min__top'>8 800 707 77 33</a>
                                <a className = 'contact-num-min__bot'>Позвонить бесплатно</a>
                            </div>
                        </div>
                        <div className='get-app'>
                            <button><img className='get-app__img' src={appApple}></img></button>
                            <button><img className='get-app__img' src={appGoogle}></img></button>
                        </div>
                    </nav>
                </MediaQuery>
        </Fragment>
        )
    }
}


export default Nav;