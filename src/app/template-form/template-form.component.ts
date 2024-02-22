import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  percent: string = "";
  grade: string = "" ;

  submitCalc(form: any){
    let sum = 0;
    for(let x in form.controls){
      sum += form.controls[x].value
    };
    
    let percent = Math.ceil((sum / 150) * 100);
    this.percent = percent.toFixed(0) + '%';
    
    if(percent >= 60) this.grade = 'Jeles (5)'
    else if(percent >= 47) this.grade = 'Jó (4)'
    else if(percent >= 33) this.grade = 'Közepes (3)'
    else if(percent >= 25) this.grade = 'Elégséges (2)'
    else this.grade = 'Elégtelen (1)'; 
  }

  resetBtn(form: any){
    form.controls.textEdit.reset();
    form.controls.tableManagement.reset();
    form.controls.dataBaseManagement.reset();
    form.controls.algoritm.reset();
    form.controls.oralPoint.reset();
    this.percent = '';
    this.grade = '';
  }
}
