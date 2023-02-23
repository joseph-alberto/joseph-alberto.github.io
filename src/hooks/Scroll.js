
const useScroll = () => {
    const pageScroll = (direction) => {
        window.scrollTo({
            top: window.scrollY + (direction ? window.innerHeight : -window.innerHeight),
            left: 0,
            behavior: 'smooth'
        })
    }

    const scroll = (offset) => {
        window.scrollTo({
            top: offset,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    return {
        pageScroll: pageScroll,
        scroll: scroll
    }
}

export { useScroll }