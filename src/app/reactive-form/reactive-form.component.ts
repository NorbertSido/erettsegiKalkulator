import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  erettsegiForm: FormGroup;
  percent = '';
  grade = '';

  constructor(){
    this.erettsegiForm = new FormGroup({
      textEdit: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(30)]),
      tableManagement: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(15)]),
      dataBaseManagement: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(30)]),
      algoritm: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(45)]),
      oralPoint: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(30)]),
    });
  }

  get textEdit(){
    return this.erettsegiForm.get('textEdit')
  };

  get tableManagement(){
    return this.erettsegiForm.get('tableManagement')
  };

  get dataBaseManagement(){
    return this.erettsegiForm.get('dataBaseManagement')
  };

  get algoritm(){
    return this.erettsegiForm.get('algoritm')
  };

  get oralPoint(){
    return this.erettsegiForm.get('oralPoint')
  };

  submitCalc(){
    let sum = 0;
    for(let x in this.erettsegiForm.controls){
      sum += this.erettsegiForm.controls[x].value
    };

    let percent = Math.ceil((sum / 150) * 100);
    this.percent = percent.toFixed(0) + '%';
    
    if(percent <= 24 ) this.grade = 'Elégtelen (1)'
    else if(percent <= 32) this.grade = 'Elégséges (2)'
    else if(percent <= 46) this.grade = 'Közepes (3)'
    else if(percent <= 59) this.grade = 'Jó (4)'
    else this.grade = 'Jeles (5)';
  }

  resetBtn(){
    this.erettsegiForm.reset();
    this.percent = '';
    this.grade = '';
  }
}
