import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const NavigationLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 25px;

//   .navigation-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//   }
//   .navigation-link {
//     padding: 10px 15px;
//     cursor: pointer;
//   }
// }
