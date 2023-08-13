const AWS = require('aws-sdk');

const ses = new AWS.SES();

exports.handler = async (event) => {
  const { emailAddresses, fileUrl } = event;
  const subject = 'Your shared file is ready for download!';
  const body = `Hello,\n\nYou can download your shared file from the following link:\n\n${fileUrl}\n\nThank you for using the Cloud File Sharing Tool!`;

  const params = {
    Destination: {
      ToAddresses: emailAddresses,
    },
    Message: {
      Body: {
        Text: { Data: body },
      },
      Subject: { Data: subject },
    },
    Source: 'seanmorganneville@gmail.com', 
  };

  try {
    await ses.sendEmail(params).promise();
    return { statusCode: 200, body: 'Email sent successfully.' };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { statusCode: 500, body: 'Error sending email.' };
  }
};
