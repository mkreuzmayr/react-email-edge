import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { Preview } from '~/emails/preview';
import { renderAsync } from '~/lib/renderAsync';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const text = await renderAsync(
    React.createElement(Preview, {
      name: 'John Doe',
      text: 'This is a test email.',
    }), {
      plainText: true,
    }
  );

  res.status(200).send(text);
}
