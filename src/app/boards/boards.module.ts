import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent } from 'src/app/boards/components/boards/boards.component';
import { AuthGuardService } from 'src/app/auth/services/auth.guard.service';
import { BoardsService } from 'src/app/shared/services/boards.service';
import { InLineFormModule } from 'src/app/modules/inlineform/in-line-form.module';
import { TopBarModule } from 'src/app/modules/top-bar/top-bar.module';

const routes: Routes = [
    {
        path: 'boards',
        component: BoardsComponent,
        canActivate: [AuthGuardService]
    }
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
        InLineFormModule,
        TopBarModule
    ],
    declarations: [BoardsComponent],
    providers: [BoardsService]
})
export class BoardsModule { }
