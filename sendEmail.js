const fetch = require('node-fetch'); // For making HTTP requests
const sendGridApiKey = 'YOUR_SENDGRID_API_KEY';

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    const msg = {
        to: 'recipient@example.com',
        from: 'sender@example.com',
        subject: `New contact form submission from ${data.name}`,
        text: data.message,
    };

    try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sendGridApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg),
        });

        if (response.ok) {
            return {
                statusCode: 200,
                body: 'Email sent successfully.',
            };
        } else {
            return {
                statusCode: response.status,
                body: 'Failed to send the email.',
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
};
