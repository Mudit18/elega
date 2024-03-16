export async function sendMail(body) {
    const response = await fetch('/api/mail/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await response.json();

    if (data.success) {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email:', data.error);
    }
}