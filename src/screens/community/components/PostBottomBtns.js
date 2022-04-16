import React from 'react';

//styled components
import styled from 'styled-components';
//svg
import LikeSvg from '../../../assets/svg/community/like.svg';
import CommentSvg from '../../../assets/svg/community/comment.svg';
import ThreeDots from '../../../assets/svg/community/three_dots.svg';

const PostBottomBtns = ({
  onPress,
  itsLike,
  itsComment,
  itsthreeDots,
  count,
}) => {
  return (
    <TouchableBtn onPress={onPress}>
      {itsLike === 'itsLike' && <LikeSvg width={20} height={20} />}
      {itsComment === 'itsComment' && <CommentSvg width={20} height={20} />}
      <LikeAndCommentCount>{count}</LikeAndCommentCount>
      {itsthreeDots === 'itsthreeDots' && (
        <ThreeDotsWrap>
          <ThreeDots />
        </ThreeDotsWrap>
      )}
    </TouchableBtn>
  );
};

export default PostBottomBtns;

const TouchableBtn = styled.Pressable`
  flex-direction: row;
  padding: 5px 5px 5px 0px;
  align-items: center;
  justify-content: center;
`;

const LikeAndCommentCount = styled.Text`
  margin-left: 9.27px;
`;

const ThreeDotsWrap = styled.View`
  top: -30px;
  right: 0px;
  position: absolute;
`;
