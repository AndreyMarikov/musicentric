import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import OctaveMenu from './components/menus/OctaveMenu';
import ModeMenu from './components/menus/ModeMenu';
import NoteNotationMenu from './components/menus/NoteNotationMenu';
import NoteReadingMenu from './components/menus/NoteReadingMenu';
import BlackKeysMenu from './components/menus/BlackKeysMenu';
import NotFoundPage from './components/NotFoundPage';
import GreatOctave from './components/GreatOctave';
import SmallOctave from './components/SmallOctave';
import OneLineOctave from './components/OneLineOctave';
import TwoLineOctave from './components/TwoLineOctave';
import PricingPage from './components/PricingPage';

const router = createHashRouter([
  {
    path: '/',
    element: <OctaveMenu />,
  },
  {
    path: '/mode',
    element: <ModeMenu />,
  },
  {
    path: '/note-notation',
    element: <NoteNotationMenu />,
  },
  {
    path: '/mode/note-reading',
    element: <NoteReadingMenu />,
  },
  {
    path: '/mode/note-reading/black-keys',
    element: <BlackKeysMenu />,
  },
  {
    path: '/small-octave',
    element: <SmallOctave />,
  },
  {
    path: '/great-octave',
    element: <GreatOctave />,
  },
  {
    path: '/one-line-octave',
    element: <OneLineOctave />,
  },
  {
    path: '/two-line-octave',
    element: <TwoLineOctave />,
  },
  /*
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  */
  {
    path: '*',
    element: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
