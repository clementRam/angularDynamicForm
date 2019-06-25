import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentFactory, ElementRef } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { ChildFormComponent } from '../child-form/child-form.component';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  @ViewChild(ChildFormComponent) childContainer: ElementRef;

  childrenComponents = [];
  nbChildren: number[] = [1];
  parentForm = this.fb.group({
    name: [''],
    children: [[]]
  })

  constructor(
    private fb: FormBuilder,
     public viewContainerRef: ViewContainerRef,
     private componentFactoryResolver: ComponentFactoryResolver
     ) { }

  ngOnInit() {
  }

  addChild(){
    this.nbChildren = [...this.nbChildren, 1]
    console.log(this.nbChildren)
  }

  loadChildComponent(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildFormComponent);
    this.childrenComponents = [...this.childrenComponents, componentFactory]
    this.childContainer.createComponent(componentFactory)
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
