// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {join, resolve} from 'path';

import {enableProdMode} from '@angular/core';

import * as fs from 'fs-extra';

// Add routes manually that you need rendered
const ROUTES = [
  '/',
  '/lazy'
];

const APP_NAME = 'repro-app';

// leave this as require(), imported via webpack
const {
  AppServerModule,
  renderModule
} = require(`./dist/${APP_NAME}-server/main`);

enableProdMode();


async function prerender() {
  // Get the app index
  const browserBuild = `dist/${APP_NAME}`;
  const index = await fs.readFile(join(browserBuild, 'index.html'), 'utf8');


  // Loop over each route
  for (const route of ROUTES) {
    const pageDir = join(browserBuild, route);
    await fs.ensureDir(pageDir);

    // Render with Universal
    const html = await renderModule(AppServerModule, {
      document: index,
      url: route,
    });

    await fs.writeFile(join(pageDir, 'index.html'), html);
  }

  console.log('Rendering Done.');
  process.exit();
}

prerender();
