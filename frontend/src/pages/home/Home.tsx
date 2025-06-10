import React from 'react';
import BottomMenu from '../../components/common/BottomMenu';
import {
  containerStyle,
  headerStyle,
  contentStyle,
  searchWrapperStyle,
  searchInputStyle,
  searchIconStyle
} from './Home.styles';

const stories = [
  { id: 1, name: 'Story 1', img: 'https://via.placeholder.com/48' },
  { id: 2, name: 'Story 2', img: 'https://via.placeholder.com/48' },
  { id: 3, name: 'Story 3', img: 'https://via.placeholder.com/48' },
  { id: 4, name: 'Story 4', img: 'https://via.placeholder.com/48' },
  { id: 5, name: 'Story 5', img: 'https://via.placeholder.com/48' },
];

const storySectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 12px 0 12px',
  overflowX: 'auto',
  background: '#fff',
};

const storyCircleStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '2px solid #000',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f7f7f7',
};

const Home: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={storySectionStyle}>
        {stories.map(story => (
          <div key={story.id} style={storyCircleStyle}>
            <img src={story.img} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
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

      <div style={contentStyle}>
        {/* Контент страницы */}
      </div>

      <BottomMenu />
    </div>
  );
};

export default Home; 