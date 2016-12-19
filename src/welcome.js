'use strict';

export default function (msg) {
  if (NODE_ENV === 'development') {
    console.log('debug wikommen');
  }
  console.log(`Hi, ${msg}`);
}