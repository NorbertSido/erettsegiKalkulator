/*----- Routes import ----- */
import { Routes } from "@angular/router";

/* ----- Component imports ----- */
import { TemplateFormComponent } from "./template-form/template-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

/* ----- Routes path ----- */
export const appRoutes: Routes = [
    { path: 'TemplateForm', component: TemplateFormComponent },
    { path: 'ReactiveForm', component: ReactiveFormComponent },
]