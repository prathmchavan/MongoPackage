Sure, here's how you can structure your README.md file for your MongoDB Connector npm package in proper markdown format:

```markdown
# MongoDB Connector

**MongoDB Connector** is a lightweight npm package designed to simplify the process of connecting to MongoDB databases in Node.js applications. It provides a straightforward function to establish a MongoDB connection using just the MongoDB URI.

## Installation

You can install the package via npm:

```bash
npm install mongodb-connector
```

## Usage

### Importing the Package

Import the `connectDB` function from `mongodb-connector` in your Node.js application:

```typescript
import { connectDB } from "@microproj/mongodb-connector";
```

### Connecting to MongoDB

Assuming you have your MongoDB URI stored in an environment variable (e.g., in a `.env` file):

```typescript
const uri = process.env.URI; // Make sure to set URI in your .env file
connectDB(uri);
```

This function call will establish a connection to your MongoDB database using the provided URI.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

