# AI Recipe Suggestion App

A simple React-based application that suggests recipes based on user-provided ingredients. The app uses a free Hugging Face AI model to generate recipe ideas.

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Links](#links)
- [Features](#features)
- [Built-with](#built-with)
- [How it Works](#how-it-works)
- [My Process](#my-process) 
- [Thoughts](#thoughts)

### Overview

This project is a basic implementation of AI integration into a React app. It demonstrates how AI models can enhance user experiences, even in small-scale projects.

### Screenshots

![alt text](<public/live site ss2.png>)

### Links

- [Live Demo](https://recipe-markdown.vercel.app/)

### Features

- Input a list of ingredients.
- Get AI-suggested recipes instantly.
- Easy-to-use interface for quick experimentation.

### Built with

- ReactJs
- Hugging Face Inference API(using a free model)

### How it Works

1. User enters ingredients.
2. The app sends the ingredients to a Hugging Face model.
3. The AI generates a recipe suggestion based on the input.

### My Process

1. **Setup**:
   - Created a React app using Vite.
   - Installed Hugging Face Inference API for integrating AI capabilities.

2. **Development**:
   - Implemented AI model integration to process and render responses.
   - Designed and built a user-friendly interface with functional components.

3. **Challenges & Decisions**:
   - Initially used React 19 beta for its enhanced form-handling capabilities, particularly the action prop in forms, which simplifies operations like preventing default submissions, resetting forms, and accessing input data via formData.
   - However, due to compatibility issues with react-markdown, a key library for rendering AI responses, I decided to prioritize compatibility and functionality.

### API Limitations


  - This app uses a free Hugging Face Inference API model. 
  - Please note that responses might be suboptimal, especially during high traffic or when the rate limit exceeds.
  - In such cases, the API may not respond, and the user might experience delays.


### Thoughts


