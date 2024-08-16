import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { LoginDialog } from './login-dialog/login-dialog';
import { SharedModule } from '../shared.module';

const dialogs = [
    LoginDialog,
    // TestDialog
]

@NgModule({
    imports: [
        ComponentsModule,
        SharedModule
    ],
    declarations: [
        dialogs,
    ],
    exports: [
        dialogs
    ]
})

export class DialogsModule { }
