import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  @Input() parentForm: FormGroup;

  childForm = this.fb.group({
      age: [''],
      gender: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.get('children').patchValue([...this.parentForm.get('children').value, this.childForm])
  }

}
