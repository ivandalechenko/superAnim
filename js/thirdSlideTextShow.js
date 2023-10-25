const thirdSlideTextShow = (props) => {
    setTimeout(() => {
        document.getElementById('thirdSlideTextWrapper').innerHTML = `<div id='thirdSlideText' style='transition: scale ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), opacity ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), translate ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7); scale: 1.2; opacity: 0; translate: 0 -100vh'>
            ${props.text}
        </div>`
        setTimeout(() => {
            document.getElementById('thirdSlideText').style.scale = 1;
            document.getElementById('thirdSlideText').style.opacity = 1;
            document.getElementById('thirdSlideText').style.translate = '0 0vh';
        }, 100);
    }, props.offset || 1);
}

export default thirdSlideTextShow
