const { mailQueue } = require("./mail/queue");

const handler = async (event) => {
  const response = { statusCode: 200 };
  const { recipient, subject, body } = JSON.parse(event.body);
    try {
      const mailResponse = await mailQueue(subject, recipient, body);
      response.body = JSON.stringify({
        message: "Successfully Mail Sent.",
        data: mailResponse.MessageId,
      });
    } catch (e) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        errorMsg: e.message
      });
    }
    return response;
};

module.exports = {
  handler,
};