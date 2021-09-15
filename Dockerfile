FROM node:16.8.0-buster-slim as development

ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
ENV HOST 0.0.0.0

RUN set -ex \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    python3 \
    make \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
EXPOSE 3000

CMD ["npm", "run", "dev"]
