import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Keycloak from 'keycloak-js';
import { environment } from '../../../environments/environment';

if (environment.production) {
  enableProdMode();
}

KeycloakService.init()
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(e => window.location.reload());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
