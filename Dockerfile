FROM node:20-slim AS builder

ENV APP_DIR=/usr/src/tech-showcase

WORKDIR $APP_DIR

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build && npm prune --production

FROM node:20-alpine3.20

LABEL org.opencontainers.image.authors="Grig Alex <alexengrigdev@gmail.com>" \
      org.opencontainers.image.url="https://github.com/alexengrig/tech-showcase" \
      org.opencontainers.image.documentation="https://github.com/alexengrig/tech-showcase" \
      org.opencontainers.image.source="https://github.com/alexengrig/tech-showcase" \
      org.opencontainers.image.version="0.1.0-SNAPSHOT" \
      org.opencontainers.image.vendor="alexengrig" \
      org.opencontainers.image.licenses="Apache-2.0" \
      org.opencontainers.image.title="tech-showcase"

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
