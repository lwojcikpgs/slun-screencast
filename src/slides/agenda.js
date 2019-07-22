// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Text,
} from 'spectacle';

export function AgendaScreen() {
    const headerSize = 4;
    const pointSize = 6;
    return (
        <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={headerSize} textColor="primary" caps>
                Agenda
            </Heading>
            {
                [
                    'Czym jest Node Js',
                    'Wielowątkowość',
                    'Moduły',
                    'Instalacja',
                    'Hello world',
                    'Express Js',
                    'Middleware',
                    'Routing',
                    'Konfiguracja',
                    'Mongo DB'
                ].map(text => (
                    <Heading size={pointSize} textColor="secondary">
                        {text}
                    </Heading>))
            }
        </Slide>
    );
};