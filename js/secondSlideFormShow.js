const secondSlideFormShow = (props) => {
    setTimeout(() => {
        document.getElementById('form_wrapper').innerHTML = `
        <div class="form" id="form" style="transition: scale ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1), opacity ${props.duration}ms cubic-bezier(0, 0.15, 0.25, 1); opacity: 0; scale: 0.6;">
            <div class='form_header'>
                Application in BlessList
            </div>
            <a href="#" class='form_link'>
                <img src='img/formX.svg' alt='decor' />
                Link Twitter
            </a>
            <a href="#" class='form_link'>
                <img src='img/formB.svg' alt='decor' />
                Follow us
            </a>
            <div class='form_first_label'>
                Your wallet address
            </div>
            <input type="text" class="form_first_input" placeholder="Enter text">
            <div class='form_delimeter'>
                <div class="form_delimeter_line"></div>
                <div class='form_delimeter_text'>
                    Will increase your chances
                </div>
                <div class="form_delimeter_line"></div>
            </div>

            <div class='form_second_label'>
                <div class='form_second_label_text'>
                    Your email
                </div>
                <div class='form_second_label_text'>
                    Optional
                </div>
            </div>
            <input type="text" class="form_first_input" placeholder="Enter text">
            <a href="#" class='form_link_last'>
                <div class='form_link_last_text'>
                    <img src='img/formDS.svg' alt='decor' />
                    Follow us on Discord
                </div>
                <div class='form_link_last_text_small'>
                    Optional
                </div>
            </a>
            <button class='form_btn' id="formBtn">
                <div class='form_btn_text'>
                    Completed everything
                </div>
            </button>
        </div>
        `;
        setTimeout(() => {
            document.getElementById('form').style.opacity = 1;
            document.getElementById('form').style.scale = 1;
        }, 100);
    }, props.offset || 1);
    return parseInt(parseInt(props.offset || 1) + parseInt(props.duration || 1))
}

export default secondSlideFormShow
