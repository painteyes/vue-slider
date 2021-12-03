Vue.config.devtools = true;

// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue (
    {
        el: '#root',
        data: {
            currentActiveSlide: 0,
            slides : [
                {
                    title: 'Svezia',
                    image: 'img/01.jpg' ,
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    title: 'Svizzera',
                    image: 'img/02.jpg' ,
                    text: 'Lorem ipsum.'
                },
                {
                    title: 'Gran Bretagna',
                    image: 'img/03.jpg' ,
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    title: 'Germania',
                    image: 'img/04.jpg' ,
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    title: 'Paradise',
                    image: 'img/05.jpg' ,
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ], 
        },
        methods: {

        }
    } 
     
);
