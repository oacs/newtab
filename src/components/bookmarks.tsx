import React from "react";

export const defaultBookmarks = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com",
    category: "Code",
  },
  {
    id: 2,
    name: "Reddit",
    url: "https://www.reddit.com/",
    category: "Social Media",
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/",
    category: "Entertainment",
  },
  {
    id: 4,
    name: "YouTube Music",
    url: "https://music.youtube.com/",
    category: "Entertainment",
  },
  {
    id: 5,
    name: "Gmail",
    url: "https://mail.google.com/",
    category: "Social Media",
  },
  {
    id: 6,
    name: "WhatsApp",
    url: "https://web.whatsapp.com/",
    category: "Social Media",
  },
  {
    id: 7,
    name: "Figma",
    url: "https://www.figma.com/",
    category: "Design",
  },
  {
    id: 8,
    name: "Notion",
    url: "https://www.notion.so/",
    category: "Productivity",
  },
  {
    id: 9,
    name: "Excalidraw",
    url: "https://excalidraw.com/",
    category: "Design",
  },
  {
    id: 10,
    name: "Twitch",
    url: "https://www.twitch.tv/",
    category: "Entertainment",
  },
  {
    id: 11,
    name: "OpenAI Chat",
    url: "https://chat.openai.com/",
    category: "Code",
  },
  {
    id: 12,
    name: "Bing Chat",
    url: "https://www.bing.com/",
    category: "Code",
  },
  {
    id: 13,
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    category: "Social Media",
  },
];
type Bookmark = {
  id: number;
  name: string;
  url: string;
  category: string;
};

type BookmarkProps = {
  bookmarks: Bookmark[];
};

const BookmarkList: React.FC<BookmarkProps> = ({ bookmarks }) => {
  // Create an object to store the bookmarks by category
  const bookmarksByCategory: { [category: string]: Bookmark[] } = {};

  bookmarks.forEach((bookmark) => {
    if (bookmark.category in bookmarksByCategory) {
      bookmarksByCategory[bookmark.category].push(bookmark);
    } else {
      bookmarksByCategory[bookmark.category] = [bookmark];
    }
  });

  // Convert the bookmarksByCategory object into an array of [category, bookmarks] pairs
  const categoriesWithBookmarks = Object.entries(bookmarksByCategory);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {categoriesWithBookmarks.map(([category, bookmarks]) => (
          <div key={category}>
            <h2 className="text-tokyonight-400">{category}</h2>
            <ul>
              {bookmarks.map((bookmark) => (
                <li key={bookmark.id}>
                  <span className="text-tokyonight-200">- </span>
                  <a href={bookmark.url} className="text-tokyonight-800">
                    {" ... " + bookmark.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkList;
