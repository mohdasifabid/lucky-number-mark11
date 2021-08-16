
const dob = document.querySelector("#dob");

const luckyNumber =  document.querySelector("#luckyNumber");

const btnCheck = document.querySelector("#btnCheck");



btnCheck.addEventListener("click", function() {
    const date = new Date(dob.value)

    const dateDigit = date.getDate();
    const monthDigit = date.getMonth();
    const yearDigit = date.getFullYear();

    const sumOfDate = dateDigit + monthDigit + yearDigit

    const luckyNumberValue = luckyNumber.value 

    if (sumOfDate % luckyNumberValue === 0) {
        output.textContent = luckyNumber.value + " is your lucky number 🤩"

    } else {
        output.textContent = "uff! your birthday is unlucky 😭"
    }
     
}); 






