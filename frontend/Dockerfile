# --- Étape 1 : Build Angular --- c'est ici que l'on compile le code TS en JS ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --omit=dev

# --- Étape 2 : Serveur Nginx --- on crée une image légère pour servir les fichiers statiques ---
FROM nginx:1.29.2-alpine
WORKDIR /usr/share/nginx/html
# Copie du build Angular
COPY --from=build /app/dist/frontend /usr/share/nginx/html
# Copie du fichier de configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Création du répertoire pour les certificats (montés via volume)
RUN mkdir -p /etc/nginx/certs
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]