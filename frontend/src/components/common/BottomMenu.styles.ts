import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: space-around;
  padding: 8px 24px 24px 24px;
  box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
  backdrop-filter: blur(12px);
  z-index: 1000;
  transition: transform 0.3s ease;
`;

export const MenuItem = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: 
    ${(props: { isActive: boolean }) => props.isActive ? '#000000' : '#666666'};
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  opacity: 
    ${(props: { isActive: boolean }) => props.isActive ? 1 : 0.7};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`; 