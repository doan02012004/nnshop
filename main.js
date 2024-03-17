const checkopen = document.querySelector('#checkopen');
const checkclose = document.querySelector('#checkclose');
const headernav= document.querySelector('.header-nav');
const radio1 = document.querySelector('#banking_one');
const desone =document.querySelector('.des-one');
const radio2 = document.querySelector('#banking_two');
const destwo =document.querySelector('.des-two');
const radio3 = document.querySelector('#banking_three');
const desthree =document.querySelector('.des-three');
const lbone = document.querySelector('.banking_one-lb');
const close = document.querySelector(".login-close");
const open = document.querySelector(".header-block-dropmenu_btn");
const sectionlogin =  document.querySelector(".login");
radio1.addEventListener('click',(e)=>{
   desone.style.display = "Block";
   destwo.style.display = "None";
   desthree.style.display = "None";
   
})
radio2.addEventListener('click',(e)=>{
    desone.style.display = "None";
    destwo.style.display = "Block";
    desthree.style.display = "None";
 })
 radio3.addEventListener('click',(e)=>{
    desone.style.display = "None";
    destwo.style.display = "None";
    desthree.style.display = "Block";
 })
checkopen.addEventListener('click',()=>{
    // headernav.style.display = 'Block';
    headernav.style.left = 0;
    headernav.style.opacity = 1;
})
checkclose.addEventListener('click',()=>{
    // headernav.style.display = 'Block';
    headernav.style.left = '100%';
    headernav.style.opacity = 0;
})

close.addEventListener("click",()=>{
    document.querySelector(".login").style.bottom = "100%";
    document.querySelector(".login").style.opacity = "0";
    document.querySelector(".login").style.height = "auto";

})
open.querySelector(".header-block-dropmenu_btn").addEventListener("click",()=>{
    document.querySelector(".login").style.bottom = "0"
    document.querySelector(".login").style.opacity = "1"
    document.querySelector(".login").style.height = "100vh";
})