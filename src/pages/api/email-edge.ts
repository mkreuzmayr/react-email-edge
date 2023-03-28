import React from 'react';
import { Preview } from '~/emails/preview';
import { renderAsync } from '~/lib/renderAsync';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const html = await renderAsync(
    React.createElement(Preview, {
      name: 'John Doe',
      text: 'This is a test email.',
    }),
    {
      plainText: true,
    }
  );

  return new Response(html);
}
