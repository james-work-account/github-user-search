# GitHub User Searcher

Dockerised website with a GraphQL backend and Vue frontend.

_Note: Can now be run from Docker Hub without needing to clone the repo:_

_`docker run -p 4000:4000 jamesworkaccount/github-user-search:latest`_

## Running

You will need a GitHub Personal Access Token to access this app. Read about them [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

In production mode, view the app on `http://localhost:4000`.

In development mode, view the app on `http://localhost:8081`.

### Running Through Docker

As a prerequisite, install [Docker](./Install-Docker.md). You shouldn't need to install Node or anything else. You may need to install Docker Compose if that didn't come with your installation by default.

#### For Production

`docker-compose up`

#### For Development

`docker-compose -f dev.yml up`

### Running Through Terminal/CMD

As a prerequisite, install [Node](https://nodejs.org/en/). You may need to install Vue too (if you get any errors).

First, use `cd app` to change directory to the `/app` directory, where the bulk of the code is stored.

#### For Production

```bash
npm install
npm run app
```

#### For Development

Need two terminal windows:

1. `npm run serve` (Vue frontend)
2. `node index.js` (Express/GraphQL backend)
