const popup = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const paddingLock = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

if(popup.length > 0){ //проверка на существуемость ссылок
    for(let i = 0; i < popup.length; i++){
        const popupLink = popup[i];
        popupLink.addEventListener("click", function (e){
            /*при клике на ссылку в атрибуте href убираем хеш*/
            const popupName = popupLink.getAttribute("href").replace('#', '');
            /*получение элемента (то есть получаем сам объект), id которого хранится в popupName*/
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault(); //запрет на перезагрузку
        });
    }
}

const popupClose = document.querySelectorAll('.close-popup');
if(popupClose.length > 0){ //проверка на существуемость ссылок
    for(let i = 0; i < popupClose.length; i++){
        const closeElement = popupClose[i];
        closeElement.addEventListener("click", function (e){
            popupCloseFunc(closeElement.closest('.popup'));
            e.preventDefault(); //запрет на перезагрузку
        });
    }
}

function popupOpen(currentPopup){
    if(currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupCloseFunc(popupActive, false);
        } else{
            bodyScrollLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e){
            if(!e.target.closest('.popup__content')){
                popupCloseFunc(e.target.closest('.popup'));
            }
        });
    }
}

function bodyScrollLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth+'px';
    for(let i = 0; i < paddingLock.length; i++){
        const el = paddingLock[i];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function (){
        unlock = true;
    }, timeout);
}

function bodyUnlock(){
    setTimeout(function (){
        for(let i = 0; i < paddingLock.length; i++){
            const el = paddingLock[i];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

function popupCloseFunc(popupActive, doUnlock = true){
    if(unlock) {
        popupActive.classList.remove('open');
    }
    if(doUnlock){
        bodyUnlock();
    }
}


