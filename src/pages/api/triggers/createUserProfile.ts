import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.body.event.data.new;
    const body = {
      id,
      userName: id,
    };
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.nhost.run/api/rest/create_user_profile`,
      {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    await response.json();

    return res.status(200).json({
      status: 'SUCCESS',
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Something went wrong',
    });
  }
}
