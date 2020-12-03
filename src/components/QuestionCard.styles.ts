// Imports
// Styles Imports
import styled from 'styled-components';

// Styling of the Component
export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    user-select: none;
    font-size: 0.8rem;
    margin: 5px 0;
    background: ${() =>'linear-gradient(90deg, #a8a9f8, #546ec4, #a8a9f8);'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;