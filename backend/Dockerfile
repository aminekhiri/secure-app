# --- Étape 1 : Build TypeScript --- c'est ici que l'on compile le code TS en JS ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src
COPY db ./db
RUN npx tsc -p tsconfig.build.json --pretty false --noEmitOnError false && \
    echo "👍 Compilation TS terminée" && \
        ls -la dist


# --- Étape 2 : Exécution en production --- on crée une image légère parce que c'est plus rapide pour exécuter le code compilé ---
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev 
EXPOSE 4000
CMD ["node", "dist/src/server.js"]