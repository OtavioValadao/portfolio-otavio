import { AngularNodeAppEngine } from '@angular/ssr/node';
// @ts-ignore
import { createRequestHandler, getContext } from '@netlify/angular-runtime';

const engine = new AngularNodeAppEngine();

export const handler = createRequestHandler(engine, getContext());
