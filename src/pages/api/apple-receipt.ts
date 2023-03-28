import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { renderAsync } from '~/lib/renderAsync';
import AppleReceiptEmail from '~/emails/apple-receipt';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const html = await renderAsync(React.createElement(AppleReceiptEmail));

  res.status(200).send(html);
}
