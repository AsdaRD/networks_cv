import '../index/index.scss';
document.addEventListener("DOMContentLoaded", function(event) { 
    AOS.init();
  });
const menu_link = document.querySelectorAll('.header__sidebar-link');
const menu_btn = document.querySelector('.header__sidebar-btn');
const btn_img = document.querySelector('.header__sidebar__img');
const modal_bar = document.querySelector('.header__sidebar');
menu_btn.addEventListener('click', () => {
  if(!modal_bar.classList.contains('header__sidebar__active')) {
    btn_img.classList.add('header__sidebar__img-active');
    modal_bar.classList.add('header__sidebar__active');
    for(const link of menu_link) {
      link.classList.add('header__sidebar-link__active')
    }
  } else {
      btn_img.classList.remove('header__sidebar__img-active');
      modal_bar.classList.remove('header__sidebar__active');
      for(const link of menu_link) {
        link.classList.remove('header__sidebar-link__active')
      } 
    }
});


const header = document.querySelector('.header__container');
const team_header = document.querySelector('.team__header');
const projects_header = document.querySelector('.projects__header');
const banners = document.querySelectorAll('.banner');

const nav_team_links = document.querySelectorAll('.nav-link-team');
const nav_projects_links = document.querySelectorAll('.nav-link-projects');
const nav_about_us_links = document.querySelectorAll('.nav-link-about_us');

for(const nav_team of nav_team_links) {
  nav_team.addEventListener('click', () => {
    window.scrollTo(0, team_header.offsetTop - header.offsetHeight)
  })
}
 
for(const nav_projects of nav_projects_links) {
  nav_projects.addEventListener('click', () => {
    window.scrollTo(0, projects_header.offsetTop - header.offsetHeight)
  })
}

for(const nav_about_us of nav_about_us_links) {
  nav_about_us.addEventListener('click', () => {
  })
}

for(const banner of banners) {
  banner.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })
}