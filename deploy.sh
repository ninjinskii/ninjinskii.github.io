#!/bin/sh
mv nuxt.config.js nuxt.config.dev.js
mv nuxt.config.prod.js nuxt.config.js

yarn run generate
yarn run deploy

mv nuxt.config.js nuxt.config.prod.js
mv nuxt.config.dev.js nuxt.config.js