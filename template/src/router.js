import san from 'san'
import { router } from 'san-router'


router.add({ rule: '/', Component: () => import('C/hello.san'), target: '#content' });
router.add({ rule: '/demo1', Component: () => import('C/demo1.san'), target: '#content' });
router.add({ rule: '/demo2', Component: () => import('C/demo2.san'), target: '#content' });
router.add({ rule: '/error', Component: () => import('C/error.san'), target: '#content' });

router.listen(function (e) {
    if(!e.config) {
        location.hash = '#/error'


        // this.locator.redirect('/error');
        // useless
    }
});

export default router;