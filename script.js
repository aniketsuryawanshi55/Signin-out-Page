let signupBtn = document.querySelector('.signupbtn');
let signinBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text')

signinBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password'
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

})

signupBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    text.innerHTML = 'Password Suggestions'
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';

})