//REFERENCIAS AL DOM

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');


tabs.forEach((cadaTab,i) => {
    tabs[i].addEventListener("click",()=>{
        tabs.forEach((cadaTab,i) => {
            tabs[i].classList.remove("active");
            tabContents[i].classList.remove("active");
        });
        tabs[i].classList.add("active");
        tabContents[i].classList.add("active");
    })
});