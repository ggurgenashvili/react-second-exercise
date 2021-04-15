import { useState } from 'react';
import PostPage from "./pages/posts";
import UserPage from "./pages/users";
import Navigation from './components/navigation';
import Theme from './components/theme';


function App() {
  const [page, setPage] = useState({
    UserPage: false,
    PostPage: true,
  });
  const [activePage, setActivePage] = useState('UserPage');

  const onPageChange = (pageKey) => {
    const updatePages = { ...page };
    let newActivePage = activePage;
    Object.keys(page).forEach((key) => {
      if (key === pageKey) {
        updatePages[pageKey] = true;
        newActivePage = pageKey;
      } else {
        updatePages[key] = false;
      }
    });

    setActivePage(newActivePage);
    setPage(updatePages);
  };

  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      <hr />
      <Theme type={activePage}>
        {page.UserPage && <UserPage />}
        {page.PostPage && <PostPage />}
      </Theme>
    </div>
  );
}

export default App;
