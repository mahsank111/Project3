import { Component } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})

export class PersonalDetailsComponent {
  formData = {
    name: null,
    email: null
  };

  submitForm(form: any){

    if (form.valid) {
      console.log('Form submitted:', form.value);
    }
  }
}
function changeV1(val: any, any: any) {
  throw new Error('Function not implemented.');
}

