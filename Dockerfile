# Make node base image
FROM node:18-slim

# Specify working directory
WORKDIR /usr/app

# Copy package json file and yarn lock file
COPY ./package.json ./
COPY ./package-lock.json ./

# Run npm install
RUN npm ci && npm cache clean --force

# Copy the rest of the files in this folder into the image
COPY ./ ./

# Open port 3000
EXPOSE 3000

# The execute command
CMD [ "npm", "run", "dev" ]
# CMD \[ -d "node_modules" \] && npm run dev || npm ci && npm run dev