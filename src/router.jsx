import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/RootLayout';
import { Home, About, Author, Book, Chapters, Characters } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'authors/:name',
        element: <Author />,
        children: [
          {
            path: ':book',
            element: <Book />,
            children: [
              {
                path: 'chapters',
                element: <Chapters />,
              },
              {
                path: 'characters',
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

// Home Page (/): Display a list of all authors.
// About Page (/about): Show an about page.
// Author Detail Page (/author/:name): Display a list of the books written by the author.
// Book Detail Page (/author/:name/:book): Display the book detail.
// Book Chapters Page (/author/:name/:book/chapters): Display a list of chapters of the book.
// Book Characters Page (/author/:name/:book/characters): Display a list of characters of the book.
