# Typescript AWS Lambda Optimization with Lambda Layers and Serverless Framework

This repository serves as a simple example demonstrating how to reduce the size of deployed TypeScript AWS Lambdas using Lambda Layers in conjunction with the Serverless Framework and several of its plugins. By leveraging Lambda Layers, we can separate the project's npm production dependencies from the Lambda function code, resulting in smaller deployment packages and faster deployment times.

## Features

- **npm**: Managing project dependencies.
- **TypeScript**: Writing code in a statically typed language that compiles to JavaScript.
- **Serverless Framework**: Automating the deployment of AWS Lambda functions and other AWS resources.
- **serverless-offline**: Emulating AWS Lambda environment locally for faster development cycles.
- **serverless-webpack**: Building Lambda function code with Webpack, omitting the `node_modules` folder to reduce deployment package size.
- **serverless-layer-plugin-manager**: Simplifying the deployment of Lambda Layers with automated configuration.

## Pre-requisites

1. Install Node.js and npm.
2. Setup an AWS Account with the minimum permissions to deploy resources using AWS CloudFormation.
3. The code has only been tested on Linux. It might not work as expected on Windows because of the set npm scripts.

## Usage

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/sergioyepes21/sls-typescript-lambda-size-opt.git
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Deploy to AWS**: The following script creates the required node_modules temporal folder and deploys the infrastructure stack

    ```bash
    npm run deploy
    ```

4. **Invoke Lambda Function**:

    After deployment, you can invoke the Lambda function either locally or in the AWS environment using the Serverless Framework's commands.

5. **Local Development**:

    To emulate AWS Lambda locally for development purposes, use:

    ```bash
    npm run dev
    ```

## Configuration

- **serverless.yml**: Configuration file for the Serverless Framework, where you define your AWS Lambda functions, events, and other AWS resources.
- **webpack.config.ts**: Configuration file for Webpack, specifying how to bundle and optimize TypeScript code for deployment.

## Folder Structure

- **src/**: Contains TypeScript source code for Lambda functions.
- **webpack.config.js/**: Includes Webpack configurations.
- **layers/node-modules-lib/**: Temporal folder containing the dependencies installed via npm on deployment (ignored on git).
- **.serverless/**: Generated by Serverless Framework, contains build artifacts and configurations (ignored on git).

## Contributing

Contributions are welcome! If you have ideas for improvements, open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this code for your own projects.

## Acknowledgments

- Special thanks to the contributors of the Serverless Framework and its plugins for enabling efficient deployment workflows for AWS Lambda functions.
- Inspiration drawn from various articles and discussions on optimizing AWS Lambda deployments.

## Contact

For any inquiries or feedback, please contact [your-email@example.com](mailto:your-email@example.com).

---

Feel free to customize this README to fit your project's specific details and requirements. Happy coding! 🚀
