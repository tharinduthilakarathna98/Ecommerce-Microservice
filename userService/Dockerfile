# Use the official Node.js image as the base image
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies 
RUN npm install && npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Run npm rebuild for bcrypt (force rebuilding the native module)
RUN npm rebuild bcrypt --build-from-source

# Expose port 3002
EXPOSE 3002

# Command to run your application
CMD npm run dev
