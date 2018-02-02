import 'babel-polyfill';
import '@/assets/css/reset.css';
import 'san-mui/lib/index.css';
import Headcom from 'C/head/index.san'
import Menucom from 'C/menu/index.san'
import router from './router'

let App = document.getElementById('app'),
    head_dom = document.createElement('div'),
    menu_dom = document.createElement('div'),
    content_dom = document.createElement('div');

head_dom.id = 'head';
menu_dom.id = 'menu';
content_dom.id = 'content';

App.appendChild(head_dom);
App.appendChild(menu_dom);
App.appendChild(content_dom);

(new Headcom()).attach(head_dom);
(new Menucom()).attach(menu_dom);


router.start()


// /* webpack hot reload */
// if (module.hot) {
//     module.hot.accept();
// }
