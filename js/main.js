const btnDarkmMode = document.querySelector(".dark-mode-btn");


//1. проверка системных настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkmMode.classList.toggle('dark-mode-btn-active');
    document.body.classList.toggle('dark');
}

// 2.Проверка темной темы в localStorage
if(localStorage.getItem('darkMode') === "dark"){
    btnDarkmMode.classList.add('dark-mode-btn-active');
    document.body.classList.add('dark');
}else if(localStorage.getItem('darkMode') === "light"){
    btnDarkmMode.classList.remove('dark-mode-btn-active');
    document.body.classList.remove('dark');
}
//включение ночного режима по кнопке
btnDarkmMode.onclick = function (){
    btnDarkmMode.classList.toggle('dark-mode-btn-active');
    const isDark = document.body.classList.toggle('dark')
    if(isDark){
        localStorage.setItem('darkMode','dark')
    }else{
        localStorage.setItem('darkMode',"light")
    }
}


//если меняется системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorSheme = event.matches ? 'dark' : 'light';
    if(newColorSheme == "dark"){
        btnDarkmMode.classList.toggle('dark-mode-btn-active');
       document.body.classList.toggle('dark');
       localStorage.setItem('darkMode','dark')

    }else{
        btnDarkmMode.classList.remove('dark-mode-btn-active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode',"light")

    }
})

