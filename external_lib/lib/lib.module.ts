import { ModuleWithProviders, NgModule } from '@angular/core';
import { LibService } from './lib.service';


/**
 * Class LibModule
 */
@NgModule()
export class LibModule {
    /**
     * Use in LibModule
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: LibModule,
            providers: [ LibService ]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of LibModule.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: LibModule,
            providers: [ LibService ]
        };
    }
}

