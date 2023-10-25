const headerShow = (props) => {
    setTimeout(() => {
        document.getElementById('header_wrapper').innerHTML = `
        <div id='header' class="abstractElement" style="transition: opacity ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1), scale ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1); opacity: 0;scale: 1.1;">
        <img src='img/logoLarge.svg' class="logoLarge" alt='decor' class="logo" />
        <img src='img/logoSmall.svg' class="logoSmall" alt='decor' class="logo" />
        
        <div class="links">
        <a href='#'>
        <img src='img/DS.svg' alt='decor' />
        </a>
        <a href='#'>
        <img src='img/X.svg' alt='decor' />
        </a>
        </div>
        </div>
        `
        setTimeout(() => {
            document.getElementById('header').style.opacity = 1;
            document.getElementById('header').style.scale = 1;
        }, 100);
    }, props.offset);

}

export default headerShow
