// Import React
import React from 'react';
// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Code,
    CodePane,
    Image
} from 'spectacle';

const insideCode = (`module.export = { 
                        function myFunction() {} 
                        }`);

const moduleCodeToShow = (
    `function module(exports, require, module, __filename, __dirname) {
        ${insideCode}
    }`
);

export function ModulesScreen() {
    return (
        [
            <Slide transition={['fade']} bgColor="tertiary">
                <Heading size={6} textColor="primary">
                    Moduły
            </Heading>
                <CodePane theme={'light'} lang="javascript" source={moduleCodeToShow}>

                </CodePane>
            </Slide>,
            <Slide transition={['fade']} bgColor="tertiary">
                <Heading size={6} textColor="primary">
                    Moduły 2
            </Heading>
                <Code lang='javascript' theme='light'>
                    function doSomeWork() {}
                </Code>
            </Slide>]
    );
};