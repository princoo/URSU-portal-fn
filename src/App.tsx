import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ComponentLoader from './components/componentLoader/ComponentLoader';

const ViewAnnouncements = lazy(() => import('./pages/announcements/viewAll/ViewAnnouncements'));
const Home = lazy(() => import('./pages/home/Home'));
const Auth = lazy(() => import('./pages/auth/Auth'));
const About = lazy(() => import('./pages/aboutUs/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<ComponentLoader />}>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/access" element={<Auth />} />
                <Route path="/announcements" element={<ViewAnnouncements />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
