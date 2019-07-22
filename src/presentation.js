// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { WelcomeScreen, AgendaScreen, WhatIsScreen, ModulesScreen } from './slides';

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: '#FFF',
    secondary: '#ff7626',
    tertiary: '#333',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <WelcomeScreen />
        <AgendaScreen />
        <WhatIsScreen />
      </Deck>
    );
  }
}
