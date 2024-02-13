[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Tonybsilva-dev/Draupnir">
    <img src="https://i.imgur.com/4f4HGxn.png" alt="Logo">
  </a>

  <h3 align="center">Draupnir DS</h3>

  <p align="center">
    My personal design system.
    <br />
    <a href="#!"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://draupnir.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Tonybsilva-dev/Draupnir/issues">Report Bug / Feature</a>
    ·
    <a href="#!">Status Application</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

A simple and automated way to send orders directly to the kitchen, saving time in the process of passing information on orders, reducing the flow of movement in the kitchen, making waiters more available and faster for the public.

<!-- GETTING STARTED -->
## Getting Started

  ```sh
  npm i draupnir-ds@latest
  ```

### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

* tailwindcss

  ```sh
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  ```

### Installation

To get correct styles in your application using tailwindcss, you will need to follow the following steps:

1 - on layout.tsx root import 

  ```sh
import 'draupnir-ds/src/app/globals.css'
  ```

2- Next you will need to add the content settings to tailwind.config.{ts,js}

  ```sh
    "./node_modules/draupnir-ds/src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ```
3 - add a section on tailwind.config.{ts,js}

```sh
  presets: [
    require("draupnir-ds/tailwind.config.ts")
  ]
```

### Example configuration tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/draupnir-ds/src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {},
  plugins: [],
  presets: [
    require("draupnir-ds/tailwind.config.ts")
  ]
};
export default config;
```

<!-- USAGE EXAMPLES -->
## Usage
<!--

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

-->
_For more examples, please refer to the [Documentation](#!)_


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Tonybsilva-dev/Draupnir/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->
### Author

---
 <table>
  <tr>
    <td align="center"><a href="https://github.com/Tonybsilva-dev"><img src="https://avatars.githubusercontent.com/u/54373473?v=4" width="100px;" alt=""/><br /><sub><b>Antonio Silva</b></sub></a><br /><a href="https://github.com/Tonybsilva-dev/Draupnir/commits?author=Tonybsilva-dev" title="Documentation">📖</a> <a href="https://github.com/Tonybsilva-dev/Draupnir/pulls?q=is%3Apr+reviewed-by%3ATonybsilva-dev" title="Reviewed Pull Requests">👀</a></td>
 </tr>
</table>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Tonybsilva-dev/Draupnir.svg?style=for-the-badge
[contributors-url]: https://github.com/Tonybsilva-dev/Draupnir/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Tonybsilva-dev/Draupnir.svg?style=for-the-badge
[forks-url]: https://github.com/Tonybsilva-dev/Draupnir/network/members
[stars-shield]: https://img.shields.io/github/stars/Tonybsilva-dev/Draupnir.svg?style=for-the-badge
[stars-url]: https://github.com/Tonybsilva-dev/Draupnir/stargazers
[issues-shield]: https://img.shields.io/github/issues/Tonybsilva-dev/Draupnir.svg?style=for-the-badge
[issues-url]: https://github.com/Tonybsilva-dev/Draupnir/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tony-silva/
