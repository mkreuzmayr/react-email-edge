import React from 'react';
import AppleReceiptEmail from '~/emails/apple-receipt';
import { renderAsync } from '~/lib/renderAsync';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const html = await renderAsync(React.createElement(AppleReceiptEmail));

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
