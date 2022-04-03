# Stage 1 -- Install dependencies only when needed
FROM node:16.13-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2 -- Rebuild the source code only when needed
FROM node:16.13-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Stage 3 -- based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.20-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
