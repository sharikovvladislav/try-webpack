'use strict';

export default function (msg) {
  debugger;
  if (NODE_ENV === 'development') {
    console.log('debug wikommen');
  }
  console.log(`Hi, ${msg}`);
}