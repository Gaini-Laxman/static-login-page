import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Import platformBrowserDynamic
import { AppModule } from './app/app.config'; // Import your AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
