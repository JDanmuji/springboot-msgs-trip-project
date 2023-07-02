import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: rgb(255, 191, 138);
  background: linear-gradient(90deg, rgba(252, 115, 0, 1) 0%, rgba(255, 191, 138, 1) 100%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;

  .ri-close-line,
  .ri-arrow-left-s-line {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

const ChatHeader = () => {
    return (
        <>
            <HeaderContainer>
                <i className="ri-arrow-left-s-line" />
                <i className="ri-close-line" />
            </HeaderContainer>
        </>
    );
};

export default ChatHeader;