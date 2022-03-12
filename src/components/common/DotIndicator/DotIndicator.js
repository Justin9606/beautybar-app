import React from 'react';
import styled from 'styled-components';

export default function DotIndicator({
  unhighlightedDotWidth,
  unhighlightedDotHeight,
  highlightedDotWidth,
  highlightedDotHeight,
  unhighlightedDotColor,
  highlightedDotColor,
  list,
  currentIndex,
}) {
  return (
    <Wrapper>
      {list.map((item, index) => (
        <Dot
          key={index}
          height={
            index == currentIndex
              ? highlightedDotHeight
              : unhighlightedDotHeight
          }
          width={
            index == currentIndex ? highlightedDotWidth : unhighlightedDotWidth
          }
          backgroundColor={
            index == currentIndex ? highlightedDotColor : unhighlightedDotColor
          }
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Dot = styled.View`
  border-radius: 50px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-horizontal: 2.5px;
  background-color: ${props => props.backgroundColor};
`;
