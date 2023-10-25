const thirdSlideFrontHousesShow = (props) => {
    setTimeout(() => {
        document.getElementById('thirdSlideFrontHouses').innerHTML = `
            <div id="thirdSlideFrontHousesWrapper" style="transition: scale ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), opacity ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7), translate ${props.duration}ms cubic-bezier(0.83, 0.07, 0.45, 0.7);  scale: 1.2; opacity: 0; translate: 0 -100vh">
            <picture>
            <source srcset="/img/thirdSlideFrontHousesSmall.png" media="(max-width: 800px)" />
            <img src="/img/thirdSlideFrontHouses.png" id="thirdSlideFrontHousesImg" alt="decor" style="width: 200vw; height: 100vh; object-fit: fill; animation: housesAnim ${props.timePerScreen}ms infinite linear"/>
            </picture></div>`
        setTimeout(() => {
            document.getElementById('thirdSlideFrontHousesWrapper').style.scale = 1;
            document.getElementById('thirdSlideFrontHousesWrapper').style.opacity = 1;
            document.getElementById('thirdSlideFrontHousesWrapper').style.translate = '0 0vh';
        }, 100);
    }, props.offset || 1);
}

export default thirdSlideFrontHousesShow
