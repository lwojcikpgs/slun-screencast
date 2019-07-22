// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Text,
    Cite
} from 'spectacle';

export function WelcomeScreen() {
    return (
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Node.JS, Express
              </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                Wprowadzenie do Node JS
              </Text>
            <Cite>Łukasz Wójcik, PGS Software</Cite>
        </Slide>
    );
};