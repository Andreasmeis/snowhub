import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { RequestService } from "src/app/services/requestService/request.service";
import { UserService } from "src/app/services/userService/user.service";

@Component({
    selector: 'login-dialog',
    templateUrl: 'login-dialog.html',
    styleUrls: ['login-dialog.less'],
})
export class LoginDialog {
    loginForm!: FormGroup;
    isRegister: boolean = false;
    wrongCredentials: boolean = false;

    constructor(public dialogRef: MatDialogRef<LoginDialog>, private fb: FormBuilder, private requestService: RequestService, private userService: UserService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.loginForm = this.fb.group({
            name: new FormControl('', [this.isRegister ? Validators.required : Validators.nullValidator]),
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
            }, (error: any) => {
                console.error('An error occurred:', error);
                this.wrongCredentials = true;
            });
        }
    }

    register() {
        let params = {
            url: 'register',
            req: {
                name: this.loginForm.value.name,
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            }

        };
        if (this.loginForm.valid) {
            this.requestService.postRequest(params).then(() => {
                this.isRegister = false;
            })
        }
    }
}