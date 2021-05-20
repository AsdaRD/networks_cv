import '../index/index.scss';

document.addEventListener("DOMContentLoaded", function(event) { 
  AOS.init();
});

const header = document.querySelector('.header__container');
const team_header = document.querySelector('.team__header');
const projects_header = document.querySelector('.projects__header');
const about_us_header = document.querySelector('.about_us__header');
const banners = document.querySelectorAll('.banner');

const parallax_banner = document.querySelector('.parallax-window');
const slogan = document.querySelector('.slogan');
const banner_down_img = document.querySelector('.banner__img')
const header_logo = document.querySelector('.header__logo');
const header_caption = document.querySelector('.header__caption');
const header_nav_links = document.querySelectorAll('.header__nav-link');
const header_contacts_container = document.querySelector('.header__contacts-container');
const header_border = document.querySelector('.header__border');
const header_lang = document.querySelector('.header__lang');
const header_lang_links = document.querySelectorAll('.header__lang-link');
const arrow_down = document.querySelector('.arrow_point_to_down');
const burger = document.querySelector('.header__sidebar__img');
const header_sidebar_links = document.querySelectorAll('.header__sidebar-link');

const logo_primary = require('../../assets/images/icon_primary.svg');
const logo_white = require('../../assets/images/icon_white.svg');
const arrow_down_primary = require('../../assets/images/arrow-point-to-down.svg');
const arrow_down_blue = require('../../assets/images/arrow-point-to-down-soft-blue.svg');
const burger_black = require('../../assets/images/menu.svg');
const burger_white = require('../../assets/images/menu_white.svg');

const primary_color = '#005BBB';
const black_color = '#0D0D0D';
const white_color = '#ffff';
const blue_color = '#D1E1F3';


const menu_link = document.querySelectorAll('.header__sidebar-link');
const menu_btn = document.querySelector('.header__sidebar-btn');
const btn_img = document.querySelector('.header__sidebar__img');
const modal_bar = document.querySelector('.header__sidebar');

const nav_team_links = document.querySelectorAll('.nav-link-team');
const nav_projects_links = document.querySelectorAll('.nav-link-projects');
const nav_about_us_links = document.querySelectorAll('.nav-link-about_us');

banner_down_img.addEventListener('click', () => {
  window.scrollTo({top: parallax_banner.offsetHeight, left: 0, behavior: 'smooth'})
})

menu_btn.addEventListener('click', () => {
  if(!modal_bar.classList.contains('header__sidebar__active')) {
    btn_img.classList.add('header__sidebar__img-active');
    modal_bar.classList.add('header__sidebar__active');
    slogan.classList.add('slogan__inactive');
    if(window.scrollY == 0) {
      header.style.backgroundColor = '#323539cc';
    }
    for(const link of menu_link) {
      link.classList.add('header__sidebar-link__active')
    }
  } else {
      btn_img.classList.remove('header__sidebar__img-active');
      modal_bar.classList.remove('header__sidebar__active');
      slogan.classList.remove('slogan__inactive');
      if(window.scrollY == 0) {
        header.style.backgroundColor = 'transparent';
      }
      for(const link of menu_link) {
        link.classList.remove('header__sidebar-link__active')
      } 
    }
});


window.addEventListener('scroll', () => {
  let position_y = window.scrollY;
  if(position_y !== 0) {
    window.requestAnimationFrame(() => {
      header.style.backgroundColor = white_color;
      header_logo.src = logo_primary;
      header_caption.style.color = primary_color;
      for(const header_nav_link of header_nav_links) {
        header_nav_link.style.color = black_color;
      }
      header_contacts_container.style.color = black_color;
      header_border.style.backgroundColor = primary_color;
      header_lang.style.color = black_color;
      for(const header_lang_link of header_lang_links) {
        header_lang_link.classList.add('header__lang-link__primary');
      }
      arrow_down.src = arrow_down_primary;
      burger.src = burger_black;
      for (const header_sidebar_link of header_sidebar_links) {
        header_sidebar_link.style.color = black_color;
      }
    })
  } else {
    window.requestAnimationFrame(() => {
      if(!modal_bar.classList.contains('header__sidebar__active')) {
        header.style.backgroundColor = 'transparent';
      } else {
        header.style.backgroundColor = '#323539cc';
      }
      header_logo.src = logo_white;
      header_caption.style.color = white_color;
      for(const header_nav_link of header_nav_links) {
        header_nav_link.style.color = white_color;
      }
      header_contacts_container.style.color = white_color;
      header_border.style.backgroundColor = blue_color;
      header_lang.style.color = white_color;
      for(const header_lang_link of header_lang_links) {
        header_lang_link.classList.remove('header__lang-link__primary');
      }
      arrow_down.src = arrow_down_blue;
      burger.src = burger_white;
      for (const header_sidebar_link of header_sidebar_links) {
        header_sidebar_link.style.color = white_color;
      }
    })
  }
});



for(const nav_team of nav_team_links) {
  nav_team.addEventListener('click', () => {
    window.scrollTo({top: team_header.offsetTop - header.offsetHeight, left: 0, behavior: 'smooth'})
  })
}
 
for(const nav_projects of nav_projects_links) {
  nav_projects.addEventListener('click', () => {
    window.scrollTo({top: projects_header.offsetTop - header.offsetHeight, left: 0, behavior: 'smooth'})
  })
}

for(const nav_about_us of nav_about_us_links) {
  nav_about_us.addEventListener('click', () => {
    window.scrollTo({top: about_us_header.offsetTop - header.offsetHeight, left: 0, behavior: 'smooth'})
  })
}

for(const banner of banners) {
  banner.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  })
}

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();