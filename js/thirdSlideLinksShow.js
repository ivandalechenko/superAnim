const thirdSlideTextShow = (props) => {
    setTimeout(() => {
        document.getElementById('thirdSlideLinks').innerHTML = `<div id='thirdSlideLinksInner' style='transition: scale ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), opacity ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), translate ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7); scale: 1.2; opacity: 0; translate: 0 -100vh;'>
            <a href='#'>
                <img src='img/DS.svg' alt='decor' />
            </a>
            <a href='#'>
                <img src='img/X.svg' alt='decor' />
            </a>
        </div>`
        setTimeout(() => {
            document.getElementById('thirdSlideLinksInner').style.scale = 1;
            document.getElementById('thirdSlideLinksInner').style.opacity = 1;
            document.getElementById('thirdSlideLinksInner').style.translate = '0 0vh';
        }, 100);
    }, props.offset || 1);
}

export default thirdSlideTextShow
