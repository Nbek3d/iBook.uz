let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginform=document.querySelector('.login-form-container')
document.querySelector('#login-btn').onclick=()=>{
    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick=()=>{
    loginform.classList.remove('active');
}

window.onscroll=()=>{
    if(window.scrollY>80){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');   
    }
}

window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');   
    }
}

