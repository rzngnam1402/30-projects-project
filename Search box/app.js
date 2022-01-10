var btnSearch = document.querySelector(".search-box__btn");

btnSearch.addEventListener('click', function(){
    console.log(this);
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})