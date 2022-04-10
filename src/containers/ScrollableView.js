import React from 'react';
import styled from 'styled-components';

const ScrollableView = ({
  children,
  backgroundColor,
  contentContainerStyle,
  paddingHorizontal,
  onScrollBeginDrag,
  showsVerticalScrollIndicator,
  pagingEnabled,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      contentContainerStyle={contentContainerStyle}
      paddingHorizontal={paddingHorizontal}
      onScrollBeginDrag={onScrollBeginDrag}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      pagingEnabled={pagingEnabled}>
      {children}
    </Container>
  );
};

export default ScrollableView;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#fff'};
  padding-horizontal: ${props => props.paddingHorizontal || 0}px;
`;
