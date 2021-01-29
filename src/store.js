
//icons imported only for fast presentation

import heartIcon from './images/heart-icon.svg';
import babeIcon from './images/babe-icon.svg';
import coffeeIcon from './images/coffee-icon.svg';
import cosmeticsIcon from './images/cosmetics-icon.svg'
import glassiesIcon from './images/glassies-icon.svg'
import homeIcon from './images/home-icon.svg'
import medtoolsIcon from './images/medtools-icon.svg'
import salesIcon from './images/sales-icon.svg'

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

export default categories