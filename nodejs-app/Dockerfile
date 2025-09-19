# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if present
COPY package.json ./

# Install dependencies (production only)
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "node", "server.js" ]
