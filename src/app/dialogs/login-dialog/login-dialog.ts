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

    constructor(public dialogRef: MatDialogRef<LoginDialog>, private fb: FormBuilder, private userService: UserService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.loginForm = this.fb.group({
            name: new FormControl('', [this.isRegister ? Validators.required : Validators.nullValidator]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        });
    }

    login() {
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        if (this.loginForm.valid) {
            this.userService.login(email, password).then((res: any) => {
                if (res) {
                    this.dialogRef.close(true);
                } else {
                    this.wrongCredentials = true;
                }
            });
        }
    }

    register() {
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        let name = this.loginForm.value.name;
        if (this.loginForm.valid) {
            this.userService.register(name, email, password).then((res: any) => {
                if (res) {
                    this.dialogRef.close(true);
                }
            });
        }
    }
}