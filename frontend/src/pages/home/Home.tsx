import React, { useEffect, useState } from 'react';
import BottomMenu from '../../components/common/BottomMenu';
import {
  containerStyle,
  headerStyle,
  contentStyle,
  searchWrapperStyle,
  searchInputStyle,
  searchIconStyle,
  storySectionStyle,
  storyCircleStyle
} from './Home.styles';

const defaultStories = [
  { id: 1, name: 'Story 1', img: 'https://via.placeholder.com/80' },
  { id: 2, name: 'Story 2', img: 'https://via.placeholder.com/80' },
  { id: 3, name: 'Story 3', img: 'https://via.placeholder.com/80' },
  { id: 4, name: 'Story 4', img: 'https://via.placeholder.com/80' },
  { id: 5, name: 'Story 5', img: 'https://via.placeholder.com/80' },
];

const Home: React.FC = () => {
  const [stories, setStories] = useState(() => {
    const saved = localStorage.getItem('stories');
    return saved ? JSON.parse(saved) : defaultStories;
  });

  useEffect(() => {
    const handler = () => {
      const saved = localStorage.getItem('stories');
      setStories(saved ? JSON.parse(saved) : defaultStories);
    };
    window.addEventListener('storiesUpdated', handler);
    return () => window.removeEventListener('storiesUpdated', handler);
  }, []);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={searchWrapperStyle}>
          <svg
            style={searchIconStyle}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 19L14.65 14.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Поиск..."
            style={searchInputStyle}
          />
        </div>
      </header>
      <div style={storySectionStyle}>
        {stories.map((story: {id: number, name: string, img: string}) => (
          <div key={story.id} style={storyCircleStyle}>
            <img src={story.img} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div style={contentStyle}>
        {/* Контент страницы */}
      </div>
      <BottomMenu />
    </div>
  );
};

export default Home; 