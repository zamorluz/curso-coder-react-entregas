
# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src .
RUN npm run build
RUn ls -la 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]