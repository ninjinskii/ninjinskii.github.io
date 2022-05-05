# Bailly Louis's portfolio

## Run the project on your machine
Install Git LFS on your machine.

Then run:
```bash
  git lfs install
```

Make sure [traefik](https://github.com/ninjinskii/traefik) is running.

```bash
  docker-compose run --rm node yarn install
  docker-compose up -d
```

You can now acces the project at https://portfolio.njk.localhost