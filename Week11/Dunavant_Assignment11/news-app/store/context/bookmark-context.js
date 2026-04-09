// Global state for bookmarks

import { createContext, useState } from 'react';

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarkIds] = useState([]);

  function addBookmark(id) {
    setBookmarkIds((currentIds) => [...currentIds, id]);
  }

  function removeBookmark(id) {
    setBookmarkIds((currentIds) =>
      currentIds.filter((bookmarkId) => bookmarkId !== id)
    );
  }

  const value = {
    ids: bookmarkIds,
    addBookmark,
    removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;