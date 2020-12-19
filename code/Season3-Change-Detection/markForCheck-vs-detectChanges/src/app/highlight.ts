export function hightlight(el, className = 'checked') {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    setTimeout(() => {
        a.classList.remove(className);
    }, 500);
}