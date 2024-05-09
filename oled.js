class Oled {
    constructor() {
    }

    apply() {
        this.s('body', {
            color: '#fff',
            backgroundColor: '#000',
        });
        this.s('.site-header .c-sub-header-nav', {
            backgroundColor: '#000',
            borderBottom: 'none',
        });
        this.s('.body-wrap, .summary_content', { backgroundColor: '#000' });
        this.s('.sub-nav_list li a, .breadcrumb li a, .c-user_item span, .wpd-comment-text', { color: '#ddd' });
        this.s('.font-title a, a, h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5', { color: '#d5d5d5' });
        this.s('.popular-slider .slider__container .slider__item .item__wrap', {
            backgroundColor: '#242424',
            borderRadius: '10px',
        });
        this.s('.chapter-item .chapter', { backgroundColor: '#426b8f' });
        this.s('.chapter-item .chapter a, .score', { color: '#fff' });
        this.s('.navigation-ajax .load-ajax, .action-icon ul li a', { backgroundColor: '#598fbf' });
        this.s('.profile-manga.summary-layout-1', { backgroundImage: '' });
        this.s('.content-readmore, .chapter-readmore', { color: '#598fbf' });
        this.s('.manga-search-field', {
            color: '#000',
            backgroundColor: '#fff',
        });
        this.s('.ui-autocomplete', { color: '#000 !important' });
    }

    s(v, o) {
        let e = document.querySelectorAll(v);
        for (let i = 0; i < e.length; i++) {
            for (let k in o) e[i].style[k] = o[k];
        }
    }
}

console.log('Setting oled theme...');
(new Oled()).apply();
