import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
    phone = '3273190';
    user = {
    name: 'Jone',
    surname: 'Doe'
    }
    boldText = '<b>I am a boldtext<b/>'

    login = '';
    password = ''
  constructor() { }

    get fullName() {
        return this.user.name + ' ' + this.user.surname;
    }

      updatePhone () {
        this.phone   = Math.round(Math.random() * 10000000) + '';
      }
      onInput(event:Event) {
        const target = event.target as HTMLInputElement;
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

    ngOnInit(): void {
        setTimeout( () => this.updatePhone(), 3000);
      }
    }


