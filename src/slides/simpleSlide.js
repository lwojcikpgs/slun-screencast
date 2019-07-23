// Import React
import React from 'react';
// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Text
} from 'spectacle';

export function SimpleSlideScreen({title, message}) {
    return (
        <Slide transition={['zoom']} bgColor="tertiary">
            <Heading size={6} textColor="secondary">
                    {title}
            </Heading>
            <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
                {message}
              </Text>
        </Slide>
    );
};