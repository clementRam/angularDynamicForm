import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  nbChildren: number[] = [1];
  parentForm = this.fb.group({
    name: [''],
    children: [[]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addChild(){
    this.nbChildren = [...this.nbChildren, 1]
    console.log(this.nbChildren)
  }

  displayForm(){
    const childrenFormValueFormatted = this.children.value.map(fb => fb.value);
    const formFormatted = this.parentForm.value;
    formFormatted.children = childrenFormValueFormatted
    console.log(formFormatted)
  }

  get children(): AbstractControl {
    return this.parentForm.get('children');
  }

}
