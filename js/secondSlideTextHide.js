const secondSlideTextHide = (props) => {
    setTimeout(() => {
        document.getElementById('firstSlideText').style.transition = `scale ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1), opacity ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1)`;
        setTimeout(() => {
            document.getElementById('firstSlideText').style.scale = 1.1;
            document.getElementById('firstSlideText').style.opacity = 0;
        }, 100);
        setTimeout(() => {
            document.getElementById('firstSlideText').style.display = 'none';
        }, props.duration + 100);
    }, props.offset || 1);
}

export default secondSlideTextHide
