import Posts from "../Pages/Posts";
import About from "../Pages/About";
import PostIdPage from "../Pages/PostIdPage";
import NotFound from "../Pages/NF/NotFound";
import Login from "../Pages/Login";


export const privatRoutes = [
    {path: '/', component: <Posts/>},
    {path: '/posts', component: <Posts/>},
    {path: '/about', component: <About />},
    {path: '/posts/:id', component: <PostIdPage />},
];

export const publicRoutes = [
    {path: '/login', component: <Login />},
    {path: '*', component: <NotFound />},
];

