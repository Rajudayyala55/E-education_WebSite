# Step 1: Build Stage
FROM node:latest AS builder

# Set working directory in the container
WORKDIR /E-education_WebSite

# Ensure package.json and package-lock.json are copied from the build context (current directory) 

COPY package*.json ./ 

RUN npm cache clean --force  

RUN npm install 

# Copy the rest of the project files 

COPY . . 

#RUN npm audit fix 

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
