import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/RootLayout';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    index,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'about', element: <AboutPage /> },
      // { path: 'author/:name', element: <AuthorDetailPage /> },
      // { path: 'author/:name/:book', element: <BookDetailPage /> },
      // {
      //   path: 'author/:name/:book/characters',
      //   element: <BookCharactersPage />,
      // },
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
