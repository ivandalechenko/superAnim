const thirdSlideBgShow = (props) => {
    setTimeout(() => {
        document.getElementById('thirdSlideBg').innerHTML = `
            <img src="/img/thirdSlideBg.png" id="thirdSlideBgImg" alt="decor" style="transition: scale ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), opacity ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), translate ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7);  scale: 1.2; opacity: 0; translate: 0px -100vh; height: 100vh; width: 100vw; object-fit: fill;"/>`
        setTimeout(() => {
            document.getElementById('thirdSlideBgImg').style.scale = 1;
            document.getElementById('thirdSlideBgImg').style.opacity = 1;
            document.getElementById('thirdSlideBgImg').style.translate = '0 0vh';
        }, 100);
    }, props.offset || 1);
}

export default thirdSlideBgShow
