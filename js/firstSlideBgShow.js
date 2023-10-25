const firstSlideBgShow = (props) => {
    document.getElementById('firstSlideBg').innerHTML = `<img src = '/img/firstSlideBg.png' id = "firstSlideBgImg" style="transition: opacity ${props.duration * 5 - 100}ms cubic-bezier(0, 0.15, 0.25, 1), scale ${props.duration - 100}ms cubic-bezier(0, 0.15, 0.25, 1);opacity: 0;scale: 1.05;" alt = 'decor' />`
    setTimeout(() => {
        document.getElementById('firstSlideBgImg').style.opacity = 1;
        document.getElementById('firstSlideBgImg').style.scale = 1;
    }, 100);


}

export default firstSlideBgShow
