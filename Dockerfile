# Step 1: Build Stage
FROM node:latest AS builder

# Set working directory in the container
WORKDIR /E-education_WebSite

# Copy only the package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies (use npm ci for a more stable and clean install)
RUN npm ci

# Copy the rest of the project files
COPY . .

# Run npm audit fix to address vulnerabilities (use with caution)
RUN npm audit fix --force

# Build the project (production build)
RUN npm run build

# Step 2: NGINX Stage
FROM nginx:latest

# Copy the build output from the builder stage into NGINX's HTML directory
COPY --from=builder /E-education_WebSite/build /usr/share/nginx/html

# Expose the necessary ports
EXPOSE 80
EXPOSE 5173

# Set the default command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
