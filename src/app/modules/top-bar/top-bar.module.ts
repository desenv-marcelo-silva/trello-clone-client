import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TopBarComponent } from 'src/app/modules/top-bar/components/top-bar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule {}
