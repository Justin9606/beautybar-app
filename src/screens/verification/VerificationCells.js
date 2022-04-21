import React from 'react';

//validator
import {CodeField} from 'react-native-confirmation-code-field';

const VerificationCells = ({
  onChangeText,
  value,
  cellCount,
  ref,
  renderCells,
  codeFieldRoot,
}) => {
  return (
    <CodeField
      autoFocus={true}
      ref={ref}
      value={value}
      onChangeText={onChangeText}
      cellCount={cellCount}
      rootStyle={codeFieldRoot}
      keyboardType={'number-pad'}
      textContentType={'oneTimeCode'}
      renderCell={renderCells}
    />
  );
};

export default VerificationCells;
