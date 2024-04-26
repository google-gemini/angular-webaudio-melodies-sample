# Angular Web Audio melodies sample

Developer sample app written in Angular demonstrating melody generation using the Gemini API. The generated melodies are played in the browser using the Web Audio API.

## Pre-requisites

1. Node.js and npm
  * Download and install Go: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. Gemini API key
  * Launch Google AI Studio: https://aistudio.google.com/
  * Click “Get API Key”

## Getting started

Compile and run the app:

```shell
npm i
npm start
```

In the text box with placeholder "API key" enter your Gemini API key. Enter a prompt, for example, "Twinkle Twinkle Little Star" and click "Generate".

## API key privacy

Calling the Google AI Gemini API directly from the app frontend is recommended for prototyping only. We strongly recommend that you only call the Google AI Gemini API server-side to keep your API key safe. You risk potentially exposing your API key to malicious actors if you embed the API key directly in your web, mobile, or desktop app or fetch it remotely at runtime.

Find an example how to do this in the following [Gemini tutorials](https://ai.google.dev/gemini-api/docs/get-started).
