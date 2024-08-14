import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // this is NOT up to you!
  // you have to name the output like this (with Change at the endind) so Angular can know
  // that this input and output belongs together, is a two way bindable size property

  // ⭐ angular 17 +
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });

    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
