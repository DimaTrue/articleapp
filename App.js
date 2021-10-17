/* eslint-disable prettier/prettier */
import React from 'react';

import {ArticlesList, Swipe} from './src/screens';
import {StyledSafeAreaView} from './src/common-styled-components';
import {Colors} from './src/constants';

const App = () => {
  return (
    <StyledSafeAreaView flex={1} bgColor={Colors.lightGrey}>
      <Swipe />
    </StyledSafeAreaView>
  );
};

export default App;
