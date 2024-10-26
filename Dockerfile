# Use the official Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . ./app

# Install application dependencies
RUN npm install


# Expose the port the application runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start:dev"]
