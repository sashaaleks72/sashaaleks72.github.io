function validation(){
    let name = document.getElementById("form__name");
    let phone_number = document.getElementById("form__number");
    let mail = document.getElementById("form__email");
    let checkbox = document.getElementById("check-box");

    if(name.value == "" || name.value == " "){
        alert("Введите ваше имя!");
        name.style.border = "2px solid red";

    }
    else{
        name.style.border = "2px solid #2BE9FF";
    }

    let check_num = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
    let check_mail =  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

    if(!check_num.test(phone_number.value)){
        alert("Номер телефона был введён неверно!");
        phone_number.style.border = "2px solid red";
    }
    else{
        phone_number.style.border = "2px solid #2BE9FF";
    }

    if(!check_mail.test(mail.value)){
        alert("Почта введена неверно!");
        mail.style.border = "2px solid red";
    }
    else{
        mail.style.border = "2px solid #2BE9FF";
    }

    if(!checkbox.checked){
        alert("Подтвердите, что вы соглашаетесь отправить ваши данные!");
    }
}
