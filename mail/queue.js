
const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
const sqs = new SQSClient();

const mailQueue = async (subject, recipient, body) => {
    const params = {
        QueueUrl: process.env.MAIL_QUEUE_URL,
        MessageBody: JSON.stringify({
          subject: subject,
          recipient: recipient,
          body: body,
        }),
      };
      
      try {
        const data = await sqs.send(new SendMessageCommand(params));
        return data;
      } catch (err) {
        console.error(`Error sending message to ${seller} for ${title}: ${err}`);
      }
};

module.exports = {
    mailQueue,
};