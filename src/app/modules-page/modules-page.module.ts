import { NgModule } from "@angular/core";
import { SubModulesPage1Component } from "./sub-modules-page1/sub-modules-page1.component";
import { SubModulesPage2Component } from "./sub-modules-page2/sub-modules-page2.component";
import { ModulesPageComponent } from "./modules-page.component";


@NgModule({
    declarations: [ModulesPageComponent, SubModulesPage1Component, SubModulesPage2Component],
    imports: [],
    providers: [],
    bootstrap: [],
    exports: [ModulesPageComponent]
})
export class ModulesPageModule {}