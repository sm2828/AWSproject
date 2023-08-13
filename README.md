# AWSproject
Developed a cloud file-sharing app using AWS EC2, S3, Lambda, SES, and Express. Users upload files via web, stored in S3, with download links emailed through SES. Node.js server on EC2 manages uploads and integrates AWS services.

# Cloud-Based File Sharing Tool

A web-based application that enables users to upload files, store them in Amazon S3, and share download links via email using AWS Lambda and SES.

## Installation and Setup

1. Clone the repository.
2. Install Node.js and npm.
3. Install project dependencies: `npm install`.
4. Set up AWS resources (S3, DynamoDB/RDS, Lambda, SES).

## Usage

1. Run the Node.js server: `node server.js`.
2. Access the app in your browser: http://localhost:3000.

![Demo](demo.gif)

## Features

- Upload files to Amazon S3.
- Send download links to multiple email addresses.
- Store file information in DynamoDB/RDS.

## Technologies Used

- AWS: EC2, S3, Lambda, SES
- Node.js, Express

## Code Structure

- `server.js`: Express server setup and routes.
- `index.html`: Frontend HTML form for file uploads.

## Contact

For questions or feedback, contact me at [your-email@example.com](mailto:your-email@example.com).
