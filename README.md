<div align="center">

  <a href="https://excusify.vercel.app/">
    <img src="https://raw.githubusercontent.com/bilalmlkdev/excusify/main/src/assets/favicon.svg" alt="excusify Logo" width="100%" height="120">
  </a>

# Excusify

 Excuse generator for developers, teams, and anyone who needs a quick, professional-sounding reason.<br>Choose from six situations, four tones, and generate the perfect excuse in seconds, right in your browser.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-black?style=for-the-badge)](https://excusify.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/bilalmlkdev/excusify?style=for-the-badge&logo=github&color=yellow)](https://github.com/bilalmlkdev/excusify.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

<p align="center">
  <i>Created by <a href="https://bilalmlkdev.vercel.app" target="_blank">Bilal Malik</a></i><br>
  <i>Follow on Github <a href="https://github.com/bilalmlkdev" target="_blank">bilalmlkdev</a></i>
</p>

[![excusify Dashboard](https://raw.githubusercontent.com/bilalmlkdev/excusify/main/src/assets/preview.png)](https://excusify.vercel.app/)


# What is Excusify?

**Excusify** is an open-source excuse generator built for developers, teams, and anyone who's ever needed a quick, believable reason to explain a missed deadline, bug, or deployment failure.

It combines a curated collection of situations and tones into a clean, responsive interface that lets you generate, save, and share excuses with just a few clicks.

Unlike generic excuse generators, **Excusify** is tailored specifically for the engineering world. Choose from six realistic situations such as **Bug Still Exists**, **Deploy Failed**, or **Production Went Down**, then combine them with one of four writing styles ranging from professional to complete corporate nonsense.

Everything runs entirely inside your browser.

- No external APIs
- No server-side processing
- No tracking
- Fully client-side
- Favorites and history stored locally using `localStorage`

Your data never leaves your device.


# Features

Excusify combines a polished interface, curated excuse library, sharing tools, and privacy-first architecture into one lightweight application.

| Category | Features |
|-----------|----------|
| **Situations** | Bug Still Exists • Missed Deadline • Production Went Down • Deploy Failed • Missed Standup • PR Not Reviewed |
| **Tones** | Professional • Chaotic • Desperate • Corporate BS |
| **Excuse Generator** | Random generation • Avoid repeated excuses • Spacebar shortcut |
| **Favorites** | Save up to 20 excuses • Remove individually • Clear all |
| **History** | Stores last 10 generated excuses • Copy previous excuses • Clear history |
| **Rating** | Mark excuses as *Believable* or *Too Obvious* |
| **Sharing** | Copy Text • Slack Format • PNG Export • Twitter • LinkedIn • WhatsApp • Slack |
| **Keyboard Shortcuts** | Space • S • T • C • F • ? |
| **Excuse of the Day** | Daily deterministic excuse based on the current date |
| **Theme** | Light & Dark Mode with persistent preference |
| **Settings** | Auto Copy • Sound Effects • Update URL • Show/Hide Hints • Counter • Excuse of the Day • Clear Local Data |
| **Privacy** | 100% Client-side • No Tracking • No Analytics • No APIs |


# Architecture

Excusify is built around a simple idea: every generated excuse should be **consistent**, **shareable**, and completely **independent from the user interface**.

The application uses a centralized excuse generator that selects a random excuse from the chosen **situation** and **tone** combination. The React interface simply captures user selections, passes them to the generator, and displays the result.

All generated excuses, favorites, settings, and history are stored locally using **localStorage**, allowing data to persist between browser sessions without relying on external services.

Everything runs entirely inside the browser.

- No backend
- No APIs
- No databases
- No authentication
- No tracking

This keeps the application lightweight, fast, and privacy-friendly.


# Adding a New Excuse

Expanding Excusify only requires two simple steps.

## Step 1 - Add the Excuses

Open:

```text
src/data/excuses.js
```

Add a new situation along with its available tones.

```js
"new situation": {
  professional: [
    "Excuse 1",
    "Excuse 2"
  ],
  chaotic: [
    "Excuse A",
    "Excuse B"
  ],
  desperate: [],
  corporate: []
}
```



## Step 2 - Register the Situation (Optional)

If you'd like the new situation to appear in the situation picker, open:

```text
src/data/situations.js
```

Add a new entry:

```js
{
  id: 7,
  label: "New Situation",
  icon: YourIcon
}
```

Once added, the new excuses automatically become available throughout the application without requiring any additional configuration.

# Project Structure

```text
excusify
├-- public
├-- src
│   ├-- components
│   │   ├-- layout
│   │   ├-- modals
│   │   ├-- pickers
│   │   ├-- sections
│   │   └-- ui
│   ├-- data
│   ├-- hooks
│   ├-- lib
│   ├-- utils
│   ├-- App.jsx
│   ├-- main.jsx
│   └-- index.css
├-- package.json
└-- vite.config.js
```
# Performance

Excusify is optimized for a fast, lightweight experience.

- **Memoized Components** reduce unnecessary re-renders.
- **Local Persistence** stores favorites, history, and settings using `localStorage`.
- **Zero Network Requests** because everything runs client-side.
- **Optimized Rendering** keeps interactions smooth across modern browsers.

# Contributing

Contributions of every size are welcome.

Whether you're fixing a typo, improving accessibility, optimizing performance, adding new excuse categories, or introducing an entirely new feature, every contribution helps make **Excusify** better.

Before opening a pull request, take a moment to understand how the project is organized. Most additions only require changes inside the data files thanks to the application's modular architecture.

## Adding a New Excuse

### 1. Add the Excuses

Open:

```text
src/data/excuses.js
```

Add your new situation and its tone variations.

### 2. Register the Situation (Optional)

Open:

```text
src/data/situations.js
```

Add a new picker entry with a unique `id` and icon.

Once completed, the new excuses automatically become available throughout the application without any additional configuration.


# License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2026 Bilal Malik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



---

