import '../scss/style.scss'
import firstSlideCharShow from './firstSlideCharShow';
import firstSlideBgShow from './firstSlideBgShow';
import firstSlideTextAnim from './firstSlideTextAnim';
import headerShow from './headerShow';
import secondSlideBgAnim from './secondSlideBgAnim';
import secondSlideTextHide from './secondSlideTextHide';
import secondSlideCharHide from './secondSlideCharHide';
import secondSlideFormShow from './secondSlideFormShow';
import thirdSlideBgHide from './thirdSlideBgHide';
import thirdSlideFormHide from './thirdSlideFormHide';
import thirdSlideBgShow from './thirdSlideBgShow';
import thirdSlideBgHousesShow from './thirdSlideBgHousesShow';
import thirdSlideFrontHousesShow from './thirdSlideFrontHousesShow';
import thirdSlideTextShow from './thirdSlideTextShow.js';
import thirdSlideLinksShow from './thirdSlideLinksShow.js';



firstSlideBgShow({ duration: 1600 })
firstSlideTextAnim({ duration: 1280, offset: 320 })
headerShow({ duration: 320, offset: 800 })
setTimeout(() => {
    document.getElementById('firstSlideCharImg').onclick = () => {
        secondSlideBgAnim({ duration: 1000 });
        secondSlideTextHide({ duration: 480 });
        secondSlideCharHide({ duration: 480 });
        setTimeout(() => {
            document.getElementById('formBtn').onclick = () => {
                thirdSlideBgHide({ duration: 1000 })
                thirdSlideFormHide({ duration: 1000 })
                thirdSlideBgShow({ duration: 1000 })
                thirdSlideBgHousesShow({ duration: 1000, timePerScreen: 60000 })
                thirdSlideFrontHousesShow({ duration: 1000, timePerScreen: 40000 })
                thirdSlideTextShow({ duration: 1000, text: 'When you are chosen by the blessed, you will find out about it.' })
                thirdSlideLinksShow({ duration: 1000 });


            }
        }, secondSlideFormShow({ duration: 840, offset: 160 }));
    };
}, firstSlideCharShow({ duration: 640, offset: 1000 }));
