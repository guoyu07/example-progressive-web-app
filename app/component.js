import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Document from './components/document';

export default function component(element, props = { title: '' }) {
  return renderToStaticMarkup(<Document title={props.title} content={renderToString(element)} />);
}
