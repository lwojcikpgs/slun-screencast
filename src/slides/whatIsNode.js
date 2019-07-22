// Import React
import React from 'react';
import NodeLogo from '../logo.png';
// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Text,
    Image
} from 'spectacle';

export function WhatIsScreen() {
    return (
        <Slide transition={['zoom']} bgColor="tertiary">
            <Image src={NodeLogo} height={400} />
            <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
                Środowisko uruchomieniowe dla Java Script'u
              </Text>
        </Slide>
    );
};