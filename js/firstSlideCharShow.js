const firstSlideCharShow = (props) => {
    setTimeout(() => {
        document.getElementById('firstSlideChar').innerHTML = `<img src='/img/firstSlideChar.png' id="firstSlideCharImg" style="transition: opacity ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1), scale ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1); opacity: 0;scale: 1.1;" alt='decor' />`;
        setTimeout(() => {
            document.getElementById('firstSlideCharImg').style.opacity = 1;
            document.getElementById('firstSlideCharImg').style.scale = 1;
        }, 100);
    }, props.offset || 1);
    return parseInt(parseInt(props.offset || 1) + parseInt(props.duration || 1))
}

export default firstSlideCharShow
