


const bgFirstShow = () => {
    document.getElementById('bgFirstImg').classList.add('hidden_show');
}
const charShow = () => {
    document.getElementById('charImg').classList.add('hidden_show');
}
const charHide = () => {
    document.getElementById('charImg').classList.remove('hidden_show');
    setTimeout(() => {
        document.getElementById('charImg').classList.add('dnone');
    }, 1500);
}
const headerShow = () => {
    document.getElementById('header').classList.add('header_show');
}
const bgFirstLarge = () => {
    document.getElementById('bgFirst').classList.add('bgLarge');
}
const textFirstHide = () => {
    document.getElementById('textLine').classList.add('textHide');
    setTimeout(() => {
        document.getElementById('textLine').classList.add('dnone');
    }, 1500);
}

const formShow = () => {
    document.getElementById('form_wrapper').classList.add('zi4');
    document.getElementById('form').classList.add('form_show');
}

const hideFormAndBg = () => {
    document.getElementById('bgFirst').classList.add('zi4');
    document.getElementById('form_wrapper').classList.add('zi4');

}

const showLastSlide = () => {

    // document.getElementById('form').classList.add('formAndBgHider');
    // document.getElementById('form').classList.add('formHidden');

    // document.getElementById('bgFirstImg').classList.add('formAndBgHider');
    // document.getElementById('bgFirstImg').classList.add('formHidden');

    document.getElementById('starsFoneImg').classList.remove('lastElementHidden');
    document.getElementById('firstHousesImg').classList.remove('lastElementHidden');

}

// bgFirstShow()
// setTimeout(() => { firstTextAnim() }, 500);
// setTimeout(() => { charShow() }, 2000);
// setTimeout(() => { headerShow() }, 2000);
// document.getElementById('charImg').onclick = () => {
//     charHide();
// bgFirstLarge();
// textFirstHide();
// formShow();
// }

// document.getElementById('formBtn').onclick = () => { showLastSlide() }
showLastSlide()
