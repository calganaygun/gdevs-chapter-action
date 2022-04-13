# Google Developers Chapter List Action [STOPPED]

This project fetches [community.dev](https://gdg.community.dev/). Updates [Algolia](https://www.algolia.com/) search indices, automatically creates JSON files of chapter lists.

🚀 Runs every midnight (UTC+3) by [this](.github/workflows/main.yml) action.
## Installation

Install dependencies with npm

```bash
npm install
```
## Usage

```sh
export ALGOLIA_ADMIN_KEY=""
export ALGOLIA_APP_ID=""
node index.js
```
## Authors

- [@calganaygun](https://www.github.com/calganaygun)
