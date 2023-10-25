const thirdSlideBgHide = (props) => {
    setTimeout(() => {
        document.getElementById('firstSlideBgImg').style.transition = `scale ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), opacity ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), translate ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7)`;
        setTimeout(() => {
            document.getElementById('firstSlideBgImg').style.scale = 0.8;
            document.getElementById('firstSlideBgImg').style.opacity = 0;
            document.getElementById('firstSlideBgImg').style.translate = '0 100vh';
        }, 100);
        setTimeout(() => {
            document.getElementById('firstSlideBgImg').style.display = 'none';
        }, props.duration + 100);
    }, props.offset || 1);
}

export default thirdSlideBgHide
