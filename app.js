
AWS.config.update({
    region: 'us-east-2',
    credentials: new AWS.Credentials('', ''),
  });
  
  // Create an S3 instance.
  const s3 = new AWS.S3();
  
  // Function to handle file upload.
  function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const emailsInput = document.getElementById('emails');
    const file = fileInput.files[0];
    const emailAddresses = emailsInput.value.split(',');
  
    if (!file || !emailAddresses) {
      alert('Please select a file and enter valid email addresses.');
      return;
    }
  
    if (emailAddresses.length > 5) {
      alert('You can only enter up to 5 email addresses.');
      return;
    }
  
    // Upload the file to S3.
    const params = {
      Bucket: 'cloud-file-sharing-tool-bucket',
      Key: file.name,
      Body: file,
    };
  
    s3.upload(params, function(err, data) {
      if (err) {
        console.error('Error uploading the file: ', err);
        displayStatus('Error uploading the file. Please try again.');
      } else {
        const fileUrl = data.Location;
  
        // Send the email addresses and file URL to the backend server to store the information in DynamoDB.
        sendFileInfoToServer(emailAddresses, fileUrl);
  
        // Display success message.
        displayStatus('File uploaded successfully. Email with download link will be sent to the provided addresses.');
      }
    });
  }
  
  // Function to display status messages on the webpage.
  function displayStatus(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
  }
  
  // Add event listener to the form submit button.
  document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleFileUpload();
  });
  
