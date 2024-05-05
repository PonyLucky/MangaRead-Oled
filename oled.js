document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting oled theme...');
    (new Oled()).apply();
});

class Oled {
    constructor() {
    }
    apply() {
        // body
        this.s(document.body, {
            color: '#fff',
            backgroundColor: '#000',
        })
        // Top bar
    }
    s() {
        let e = document.querySelectorAll(v);
        for (let i = 0; i < e.length; i++) {
            for (let k in o) e[i].style[k] = o[k];
        }
    }
}