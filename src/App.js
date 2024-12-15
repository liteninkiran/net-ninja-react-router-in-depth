import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Careers from './pages/careers/Careers';
import CareerDetails from './pages/careers/CareerDetails'
import CareersError from './pages/careers/CareersError';
import NotFound from './pages/NotFound';

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

// Loaders
import { careersLoader } from './pages/careers/Careers';
import { careerDetailsLoader } from './pages/careers/CareerDetails';
import { contactAction } from './pages/help/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* Home */}
      <Route index element={<Home />} />

      {/* About */}
      <Route path='about' element={<About />} />

      {/* Help */}
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      {/* Careers */}
      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      {/* Not Found */}
      <Route path='*' element={<NotFound />} />

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
