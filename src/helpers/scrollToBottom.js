import {animateScroll} from 'react-scroll';

/* Scroll instantáneo */
export const scrollToBottom = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });
}

/* Scroll animado */
export const scrollToBottomAnimated = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    });
}