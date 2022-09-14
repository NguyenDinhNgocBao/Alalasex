
//DANG NHAP
var sideBar = document.getElementById("mySideBar");
function h_open() {
    sideBar.style.display = "block";
}
function h_close() {
    sideBar.style.display = "none";
}


//Trang thai / Kieu dang
//cach 1
var chosen = document.querySelector('.my-Chose');
function c_open(){
    if(chosen.style.display == 'none'){
        chosen.style.display = 'block';
        document.getElementById("cc").classList.remove('fa-angle-up');
        document.getElementById("cc").classList.add('fa-angle-down');
        document.getElementById("cl-text").style.color = "#f15e2c";
    }else{
        chosen.style.display = 'none';
        document.getElementById("cc").classList.remove('fa-angle-down');
        document.getElementById("cc").classList.add('fa-angle-up');
        document.getElementById("cl-text").style.color = "#000";
    }
}

 
//cach 2
var c2 = document.querySelector("#c2");
var chosen2 = document.querySelector('.my-Chose2');
c2.addEventListener("click", function(){
    if(chosen2.style.display == 'none'){
        chosen2.style.display = 'block';
        document.getElementById("cl").classList.remove('fa-angle-up');
        document.getElementById("cl").classList.add('fa-angle-down');
        document.getElementById("cl-text2").style.color = "#f15e2c";
    }else{
        chosen2.style.display = 'none';
        document.getElementById("cl").classList.remove('fa-angle-down');
        document.getElementById("cl").classList.add('fa-angle-up');
        document.getElementById("cl-text2").style.color = "#000";
    }
});

//C 3
var c3 = document.querySelector("#c3");
var chosen3 = document.querySelector('.my-Chose3');
c3.addEventListener("click", function(){
    if(chosen3.style.display == 'none'){
        chosen3.style.display = 'block';
        document.getElementById("cc3").classList.remove('fa-angle-up');
        document.getElementById("cc3").classList.add('fa-angle-down');
        document.getElementById("cl-text3").style.color = "#f15e2c";
    }else{
        chosen3.style.display = 'none';
        document.getElementById("cc3").classList.remove('fa-angle-down');
        document.getElementById("cc3").classList.add('fa-angle-up');
        document.getElementById("cl-text3").style.color = "#000";
    }
});
//C 4
var c4 = document.querySelector("#c4");
var chosen4 = document.querySelector(".my-Chose4");
c4.addEventListener("click", function(){
    if(chosen4.style.display == 'none'){
        chosen4.style.display = 'block';
        document.getElementById("cc4").classList.remove('fa-angle-up');
        document.getElementById("cc4").classList.add('fa-angle-down');
        document.getElementById("cl-text4").style.color = "#f15e2c";
    }else{
        chosen4.style.display = 'none';
        document.getElementById("cc4").classList.remove('fa-angle-down');
        document.getElementById("cc4").classList.add('fa-angle-up');
        document.getElementById("cl-text4").style.color = "#000";
    }
})
//search đơn hàng
var none = document.getElementById("order");
// Cach 1
none.onclick = function(){
    setTimeout(function(){
        alert("Không có đơn hàng nào!")
    },1000);
}
// Cach 2
/*
none.addEventListener('click',function(){
    setTimeout(function(){
        alert("Không có đơn hàng nào!")
    },1000)
})
*/
// search vi tri
var loc = document.getElementById("location");
loc.onclick = function(){
    setTimeout(function(){
        alert("Cửa hàng hiện chỉ bán trực tuyến!")
    },1000);
}
var cart = document.getElementById("bag");
cart.onclick = function(){
    alert("Giỏ hàng trống!");
}
//SIZE
var size = document.getElementById("clickSize");
var inSize = document.getElementById("inputSize").value;


//Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type = "checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('click', switchTheme);


//Truot ve dau trang muot ma

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  scrollToTop();


  //ANIMATIONS
  let slideIndex = 0;
function showSlides(){
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    console.log(slideIndex)
    if(slideIndex > slides.length){slideIndex = 1}
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2500);
}

showSlides()