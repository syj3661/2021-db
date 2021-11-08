const number = document.getElementById("input");
const comNumber = 111;
const printForm = document.getElementById("js-guess");
const display = document.getElementById("js-result");
const handlePrint = (e) => {
    e.preventDefault();
    const n = number.value
    const cn = comNumber
    const diplaySpan = display.querySelector("span");
    diplaySpan.innerHTML = `You choose: ${n}, the machine choose: ${cn}.<br>
    <b>You lost!</b>`;
};
printForm.addEventListener("submit", handlePrint);