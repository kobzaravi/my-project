import { __decorate } from "tslib";
import { Component } from "@angular/core";
let BindingComponent = class BindingComponent {
    constructor() {
        this.phone = '3273190';
        this.user = {
            name: 'Jone',
            surname: 'Doe'
        };
        this.boldText = '<b>I am a boldtext<b/>';
        this.login = '';
        this.password = '';
    }
    get fullName() {
        return this.user.name + ' ' + this.user.surname;
    }
    updatePhone() {
        this.phone = Math.round(Math.random() * 10000000) + '';
    }
    onInput(event) {
        const target = event.target;
        this.phone = target.value;
    }
    onSubmit() {
        if (this.login && this.password) {
            // TODO submit
            alert(`You are authorized as ${this.login} with password ${this.password}`);
            this.login = this.password = '';
            return;
        }
        alert('login and password are required fields!!!');
    }
    ngOnInit() {
        setTimeout(() => this.updatePhone(), 3000);
    }
};
BindingComponent = __decorate([
    Component({
        selector: 'app-binding',
        templateUrl: './binding.component.html',
        styleUrls: ['./binding.component.scss']
    })
], BindingComponent);
export { BindingComponent };
//# sourceMappingURL=binding.component.js.map