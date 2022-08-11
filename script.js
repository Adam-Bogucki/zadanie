var card = document.getElementsByClassName("card")[0];
var number = document.getElementById("cardNumber");
var cardName = document.getElementById("cardName");
var month = document.getElementById("ExpirationMonth");
var year = document.getElementById("ExpirationYear");
var CVV = document.getElementById("CVVcode");

var optDefault = document.createElement('option');
optDefault.value = "";
optDefault.innerHTML = "Month";
optDefault.defaultSelected = true;
month.appendChild(optDefault);
for (var i = 1; i <= 31; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    month.appendChild(opt);
}

var optDefault = document.createElement('option');
optDefault.value = "";
optDefault.innerHTML = "Year";
optDefault.defaultSelected = true;
year.appendChild(optDefault);
for (var i = 2000; i <= 2099; i++) {
    var opt = document.createElement('option');
    opt.value = i - 2000;
    opt.innerHTML = i;
    year.appendChild(opt);
}

card.addEventListener('click', () => {

    if (card.classList.contains("reverse")) {
        card.classList.remove("reverse");
    } else {
        card.classList.add("reverse");
    }
})

number.addEventListener('keyup', (event) => {
    if (isNaN(event.target.value)) {
        console.log("its not a number")
        return;
    } else {
        if (event.target.value.length > 16) {
            return;
        }
        card.getElementsByClassName("card-number")[0].innerHTML = event.target.value.toString().replace(/\d{4}(?=.)/g, '$&  ');;
    }
});

cardName.addEventListener('keyup', (event) => {
    card.getElementsByClassName('card-holder-value')[0].innerHTML = event.target.value;
})
CVV.addEventListener('keyup', (event) => {
    card.getElementsByClassName('CVV-value')[0].innerHTML = event.target.value;
})
month.addEventListener('change', (event) => {
    var value = card.getElementsByClassName("expiration-date-value")[0].innerHTML.split('/');

    if (event.target.value.length == 2) {
        card.getElementsByClassName("expiration-date-value")[0].innerHTML = event.target.value + "/" + value[1];
    } else {
        if (event.target.value == "") {
            card.getElementsByClassName("expiration-date-value")[0].innerHTML = value[0] + "/" + value[1];
        } else {
            card.getElementsByClassName("expiration-date-value")[0].innerHTML = "0" + event.target.value + " / " + value[1];
        }
    };
})
year.addEventListener('change', (event) => {
    var value = card.getElementsByClassName("expiration-date-value")[0].innerHTML.split('/');

    if (event.target.value.length == 2) {
        card.getElementsByClassName("expiration-date-value")[0].innerHTML = value[0] + "/" + event.target.value;
    } else {
        if (event.target.value == "") {
            card.getElementsByClassName("expiration-date-value")[0].innerHTML = value[0] + "/" + value[1];
        } else {
            card.getElementsByClassName("expiration-date-value")[0].innerHTML = value[0] + " / " + "0" + event.target.value;
        }
    };
})

var numberField = document.getElementsByClassName("card-number")[0];
var cardHolderField = document.getElementsByClassName("card-holder")[0];
var expDateField = document.getElementsByClassName("expiration-date")[0];

number.addEventListener('focus', () => {
    card.classList.remove("reverse");

    cardHolderField.classList.remove("focus");
    expDateField.classList.remove("focus");
    numberField.classList.add("focus");
})
cardName.addEventListener('focus', () => {
    card.classList.remove("reverse");

    cardHolderField.classList.add("focus");
    expDateField.classList.remove("focus");
    numberField.classList.remove("focus");
})
month.addEventListener('focus', () => {
    card.classList.remove("reverse");

    cardHolderField.classList.remove("focus");
    expDateField.classList.add("focus");
    numberField.classList.remove("focus");
})
year.addEventListener('focus', () => {
    card.classList.remove("reverse");

    cardHolderField.classList.remove("focus");
    expDateField.classList.add("focus");
    numberField.classList.remove("focus");
})
CVV.addEventListener('focus', () => {
    card.classList.add("reverse");

    cardHolderField.classList.remove("focus");
    expDateField.classList.remove("focus");
    numberField.classList.remove("focus");
})