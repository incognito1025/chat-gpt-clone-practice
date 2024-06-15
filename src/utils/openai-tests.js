// import OpenAI from "openai";
// import axios from "axios";

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
// });

// const response = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       "role": "user",
//       "content": [
//         {
//           "type": "text",
//           "text": "When is the sunset?"
//         }
//       ]
//     },
//     {
//       "role": "assistant",
//       "content": [
//         {
//           "type": "text",
//           "text": "I will need to know your current location in order to provide you with the exact time of the sunset. Could you please share your location with me?"
//         }
//       ]
//     },
//     {
//       "role": "user",
//       "content": [
//         {
//           "type": "text",
//           "text": "Brooklyn. NY"
//         }
//       ]
//     },
//     {
//       "role": "assistant",
//       "content": [
//         {
//           "type": "text",
//           "text": "In Brooklyn, NY, the sunset today is expected to occur around 4:44 PM local time."
//         }
//       ]
//     },
//     {
//       "role": "user",
//       "content": [
//         {
//           "type": "text",
//           "text": "Is it expected to rain?"
//         }
//       ]
//     },
//     {
//       "role": "assistant",
//       "content": [
//         {
//           "type": "text",
//           "text": "As of now, there is no rain forecasted for Brooklyn, NY today. The weather is expected to be mostly clear with partly cloudy skies."
//         }
//       ]
//     },
//     {
//       "role": "user",
//       "content": [
//         {
//           "type": "text",
//           "text": "Tell me about Jest.js"
//         }
//       ]
//     },
//     {
//       "role": "assistant",
//       "content": [
//         {
//           "type": "text",
//           "text": "Jest is a popular JavaScript testing framework developed by Facebook. It is designed to be simple to set up and use, while also providing powerful features for testing JavaScript code. Jest is commonly used for testing React applications, but it can be used to test any JavaScript codebase. \n\nSome key features of Jest include:\n\n1. **Easy Setup**: Jest comes with everything you need to write and run tests out of the box, requiring minimal setup.\n\n2. **Fast and Parallelized**: Jest runs tests in parallel, which can significantly speed up the testing process, especially in larger codebases.\n\n3. **Snapshot Testing**: Jest provides snapshot testing, allowing you to capture the current output of a component and compare it with future changes to ensure no unintended changes have occurred.\n\n4. **Mocking**: Jest provides utilities for mocking functions and modules, making it easy to isolate components for testing.\n\n5. **Code Coverage**: Jest includes built-in code coverage tools to help you monitor how much of your code is covered by tests.\n\nOverall, Jest is a comprehensive and user-friendly testing framework that is widely used in the JavaScript community."
//         }
//       ]
//     }
//   ],
//   temperature: 1,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });