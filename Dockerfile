# Step 1: Build Stage
FROM node:latest AS builder
WORKDIR /E-education_WebSite
# Ensure package.json and package-lock.json are copied from the build context (current directory)
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .
RUN npm audit fix --force
RUN npm run build

# Step 2: NGINX Stage
FROM nginx:latest
COPY --from=builder /E-education_WebSite/build /usr/share/nginx/html
EXPOSE 80
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
