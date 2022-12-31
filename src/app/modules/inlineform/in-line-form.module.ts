import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { InLineFormComponent } from 'src/app/modules/inlineform/components/in-line-form.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [InLineFormComponent],
    exports: [InLineFormComponent]
})
export class InLineFormModule {}
