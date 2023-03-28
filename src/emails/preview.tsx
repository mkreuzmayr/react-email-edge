import * as React from 'react';

export function Preview({ name, text }: { name: string; text: string }) {
  return (
    <>
      <div id="__react-email-preview">
        This should be hidden from plain text
      </div>
      <h1>This should be rendered in plain text</h1>
      <p>Hello {name},</p>
      <p>{text}</p>
    </>
  );
}
