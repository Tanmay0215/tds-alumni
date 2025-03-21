import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, About, Community, Layout, Alumni, NotFound, Blogs, Eventspage, Resources } from './pages/index.js';
import { UpcomingEvents, PastEvents, PastWorkshops } from './components/Events/index.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/community" element={<Community />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/events" element={<Eventspage />}>
                    <Route path="" element={<UpcomingEvents />} />
                    <Route path="upcoming" element={<UpcomingEvents />} />
                    <Route path="past" element={<PastEvents />} />
                    <Route path="past-workshop" element={<PastWorkshops />} />
                </Route>
                <Route path="/resources" element={<Resources />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    )
);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
