import React from 'react';

import {StyleSheet, Text} from 'react-native';

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
