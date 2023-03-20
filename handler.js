const AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const ses = new AWS.SES();

module.exports.sendMailToQueue = async (event, context) => {
  const params = {
    MessageBody: JSON.stringify(event.body),
    QueueUrl: process.env.EMAIL_QUEUE_URL
  };
  await sqs.sendMessage(params).promise();
  return {
    statusCode: 200,
    body: 'Email added to queue'
  };
};

module.exports.sendUserMail = async (event, context) => {
  const message = JSON.parse(event.Records[0].body);
  const params = {
    Destination: {
      ToAddresses: [message.to]
    },
    Message: {
      Subject: {
        Data: message.subject
      },
      Body: {
        Text: {
          Data: message.body
        }
      }
    },
    Source: process.env.USER_EMAIL_ADDRESS
  };
  await ses.sendEmail(params).promise();
  return {
    statusCode: 200,
    body: 'Email sent to user'
  };
};
