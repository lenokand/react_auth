import {CHAT_ROUTE_SUPPORT, CHAT_ROUTE, DOC_ROUTE, FORGOT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NOTIFICSTION_ROUTE, SEO_CONTACTS_ROUTE, SEO_DETAILS_ROUTE, SEO_INDEX_ROUTE, SEO_INSPECTION_ROUTE, SEO_MAIN_ROUTE, SEO_NEWS_ROUTE, SEO_Position_ROUTE, SEO_REPORT_ROUTE, SEO_ROUTE, SEO_SERVICES_ROUTE, SETTINGS_ROUTE } from "./utils/const";
// import Autorisation from "./component/Autorisation";
// import Dialog from "./components/Dialog";
// import Guid from "./components/Guid";
import SeoSubmenu from "./components/SeoSubmenu";
import MainPage from "./components/MainPage";
import Autorisation from "./components/Autorisation";
import DialogSupport from "./components/DialogSupport";

export const publicRouts = [
    {
        path: LOGIN_ROUTE,
        Component: Autorisation
        // Component:SeoSubmenu
       
    }
    ,
    {
        path: FORGOT_ROUTE,
        Component: Autorisation
        // Component:SeoSubmenu
       
    }
]

// export const supportRouts = [
//     {
//         path: CHAT_ROUTE_SUPPORT,
//         Component: DialogSupport

//     },
// ]
export const privateRouts = [
    // {
    //     path: CHAT_ROUTE_SUPPORT,
    //     Component: DialogSupport

    // },
    {
        path: CHAT_ROUTE,
        Component: MainPage

    },
    {   
        path: MAIN_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: DOC_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: NOTIFICSTION_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SETTINGS_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_MAIN_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_Position_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_INDEX_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_REPORT_ROUTE,
        Component: MainPage
    }
    
    ,
    {   
        path: SEO_SERVICES_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_INSPECTION_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_NEWS_ROUTE,
        Component: MainPage
    }
    
    ,
    {   
        path: SEO_DETAILS_ROUTE,
        Component: MainPage
    }
    ,
    {   
        path: SEO_CONTACTS_ROUTE,
        Component: MainPage
    }
    
]