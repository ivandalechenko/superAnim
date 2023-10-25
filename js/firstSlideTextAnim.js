const firstSlideTextAnim = (props) => {
    setTimeout(() => {
        // Берём буквочки
        const oldLetters = document.getElementById('firstSlideText').innerHTML.split('');
        // Берём строчечку
        const textLine = document.getElementById('firstSlideText');
        // Убираем повторы
        let letters = [];
        for (let i = 0; i < oldLetters.length; i++) {
            if (oldLetters[i] != ' ') {
                letters.push(oldLetters[i])
            } else if (i > 0) {
                if (oldLetters[i - 1] != ' ') {
                    letters.push(oldLetters[i])
                }
            }
        }
        const lettersCount = letters.length
        let lettersHTML = '';
        // Засовываем в строчечку символы разбитые
        for (let i = 0; i < letters.length; i++) {
            if (i == 0) {
                lettersHTML += `<div class='dib'>`
            }
            lettersHTML += `<span class='textLine_letter'>${letters[i]}</span>`
            if (letters[i] == ' ') {
                lettersHTML += `</div><div class='dib'>`
            }
            if (i == letters.length - 1) {
                lettersHTML += `</div>`
            }
        }

        textLine.innerHTML = lettersHTML;
        // Каждой букве даём анимацию
        document.getElementById('firstSlideText').style.opacity = 1;
        letters = document.getElementsByClassName('textLine_letter');
        for (let i = 0; i < letters.length; i++) {
            setTimeout(() => {
                letters[i].classList.add('textLine_letter_show');
            }, (i * Math.round(props.duration / lettersCount)));
        }
    }, props.offset || 1);
}

export default firstSlideTextAnim;
