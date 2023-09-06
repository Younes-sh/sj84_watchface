import Landing from '../pages/Landing';
import Collection from '../pages/Collection';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
// Nested Pages for Register & Login
import RegisterLogin from '../pages/RegisterLogin';
import Register from '../pages/NestedPage/nestedLoginRegister/Register';
import Login from '../pages/NestedPage/nestedLoginRegister/Login';
// Nested Page for Gallery
import Samsung from '../pages/NestedPage/nestedGallery/Samsung';
import Apple from '../pages/NestedPage/nestedGallery/Apple';
import All from '../pages/NestedPage/nestedGallery/All';
// ViewParamsViewItem is for watching one item with params !
import ViewItem from '../pages/PageParams/ViewItem';
import Squar from '../pages/NestedPage/nestedGallery/Sqaur';

const routes = [
    {
        path:'/' , element:<Landing />
    },
    {
        path:'/collection' , element:<Collection />
    },
    {
        path:'/contact' , element:<Contact />
    },
    {
        path:'/gallery' , element:<Gallery /> , children : [
            // nested page
            { path:'all' , element:<All />},
            { path:'apple' , element:<Apple />},
            { path:'samsung' , element:<Samsung />},
            { path:'squar' , element:<Squar />},
        ]
    },
    {
        path:'/viewitem/:itemID' , element:<ViewItem />
    },
    {
        path:'/registerlogin' , element:<RegisterLogin /> , children : [
            { path:'register' , element:<Register />},
            { path:'login' , element:<Login /> }
        ]
    }
]


export default routes;