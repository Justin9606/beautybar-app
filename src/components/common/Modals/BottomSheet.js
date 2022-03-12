import React, {useCallback} from 'react';

//import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

//styled components
import styled from 'styled-components';

//svg
import XClose from '../../../assets/svg/etc/xclose.svg';

const Bottomsheet = ({
  bottomSheetModalRef,
  index,
  snapPoints,
  enablePanDownToClose,
  enableOverDrag,
  style,
  backgroundStyle,
  handleStyle,
  handleIndicatorStyle,
  headerContentText,
  children,
}) => {
  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(props => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={index}
      snapPoints={snapPoints}
      enablePanDownToClose={enablePanDownToClose}
      enableOverDrag={enableOverDrag}
      style={style}
      backgroundStyle={backgroundStyle}
      handleStyle={handleStyle}
      handleIndicatorStyle={handleIndicatorStyle}
      backdropComponent={renderBackdrop}>
      <BottomSheetHeaderWrap>
        <BottomSheetContentHeaderText>Languages</BottomSheetContentHeaderText>
        <HandleCloseButton onPress={handleClose}>
          <XClose />
        </HandleCloseButton>
      </BottomSheetHeaderWrap>

      {children}
    </BottomSheet>
  );
};

export default Bottomsheet;

const BottomSheetHeaderWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const BottomSheetContentHeaderText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  align-items: center;

  color: #323234;
`;

const HandleCloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 29px;
`;
