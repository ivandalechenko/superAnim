const secondSlideBgAnim = (props) => {
    setTimeout(() => {
        document.getElementById('firstSlideBgImg').style.transition = `scale ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1)`;
        setTimeout(() => {
            document.getElementById('firstSlideBgImg').style.scale = 1.2;
        }, 100);
    }, props.offset || 1);
}

export default secondSlideBgAnim
