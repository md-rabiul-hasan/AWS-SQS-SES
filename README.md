# AWS-SQS & SNS

## Tools

-   AWS
-   Node-Js
-   Serverless Framework
-   Postman

## Installation

- npm install
- serverless deploy --verbose

### Request Format

```
{
    "subject": "hello 1",
    "recipient": "rabiul.fci@gmail.com",
    "body": "Hello World"
}
```
### Response Format

```
{
    "message": "Successfully Mail Sent.",
    "data": "dc251b7f-711d-4af6-bcb9-a1e0cb13021c"
}
```