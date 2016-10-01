import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AuthComponent } from '../shared/auth/auth.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, AuthComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
