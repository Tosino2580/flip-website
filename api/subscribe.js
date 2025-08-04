import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = process.env.MAILCHIMP_DATA_CENTER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200 || response.status === 201) {
    return res.status(200).json({ message: 'Subscribed successfully' });
  } else {
    const result = await response.json();
    return res.status(response.status).json({ message: result.detail });
  }
}
