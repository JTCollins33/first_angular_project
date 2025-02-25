import { NgModule } from "@angular/core";
import { SubModulesPage1Component } from "./sub-modules-page1/sub-modules-page1.component";
import { SubModulesdirectivespageComponent } from "./sub-modules-directivespage/sub-modules-directivespage.component";
import { ModulesPageComponent } from "./modules-page.component";


@NgModule({
    declarations: [ModulesPageComponent, SubModulesPage1Component, SubModulesdirectivespageComponent],
    imports: [],
    providers: [],
    bootstrap: [],
    exports: [ModulesPageComponent]
})
export class ModulesPageModule {}