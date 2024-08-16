import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { RequestService } from "src/app/services/request.service";

@Component({
    selector: 'login-dialog',
    templateUrl: 'login-dialog.html',
    styleUrls: ['login-dialog.less'],
})
export class LoginDialog {
    loginForm!: FormGroup;
    isRegister: boolean = false;

    constructor(public dialogRef: MatDialogRef<LoginDialog>, private fb: FormBuilder, private requestService: RequestService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.loginForm = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        });
    }

    login() {
        let params = {
            url: 'login',
            req: {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            }

        };
        if (this.loginForm.valid) {
            this.requestService.postRequest(params).then((res: any) => {
                this.requestService.token = res.token;
                localStorage.setItem('token', res.token);
                this.dialogRef.close(true);
            })
        }
    }
}