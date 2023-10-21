import './style.scss'
const lines = document.getElementsByClassName('textLine');
for (let i = 0; i < lines.length; i++) {
    const letters = lines[i].innerHTML.split('');;
    lines[i].innerHTML = '';
    for (let j = 0; j < letters.length; j++) {
        lines[i].innerHTML += `<span class='textLine_letter'>${letters[j]}</span>`
    }
}



const firstTextAnim = () => {
    const lines = document.getElementsByClassName('textLine');
    let lettersOffset = 0
    for (let i = 0; i < lines.length; i++) {
        const letters = lines[i].getElementsByClassName('textLine_letter');
        for (let j = 0; j < letters.length; j++) {
            setTimeout(() => {
                letters[j].classList.add('textLine_letter_show');
            }, (j * 20 + lettersOffset * 20));
        }
        lettersOffset += letters.length
    }
}
firstTextAnim()
