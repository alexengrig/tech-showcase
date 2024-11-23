FROM node:20-slim AS builder

ENV APP_DIR=/usr/src/tech-showcase

WORKDIR $APP_DIR

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build && npm prune --production

FROM node:20-alpine3.20

ENV APP_DIR=/usr/src/tech-showcase
ENV NODE_ENV=production

WORKDIR $APP_DIR

RUN addgroup -S tech-showcase \
    && adduser -S tech-showcase -G tech-showcase \
    && chown -R tech-showcase:tech-showcase $APP_DIR

COPY --from=builder $APP_DIR/build ./build
COPY --from=builder $APP_DIR/node_modules ./node_modules
COPY --from=builder $APP_DIR/package.json ./package.json

USER tech-showcase

EXPOSE 3000

CMD ["node", "build"]
