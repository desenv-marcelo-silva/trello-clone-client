import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'in-line-form',
    templateUrl: './in-line-form.component.html'
})
export class InLineFormComponent {
    @Input('title') titleProps: string = '';
    @Input('defaultText') defaultTextProps: string = 'not defined';
    @Input('hasButton') hasButtonProps: boolean = false;
    @Input('buttonText') buttonTextProps: string = '';
    @Input('inputPlaceholder') inputPlaceholderProps: string = '';
    @Input('inputType') inputTypeProps: string = '';

    @Output('handleSubmit') handleSubmitProps = new EventEmitter<string>();

    isEditing: boolean = false;

    inLineForm = this.fb.group({
        title: ['']
    });
    
    constructor(private fb: FormBuilder) {}

    activeEditing(): void {
        if (this.titleProps) {
            this.inLineForm.patchValue({ title: this.titleProps });
        }
        this.isEditing = true;
    }

    onSubmit(): void {
        if (this.inLineForm.value.title) {
            this.handleSubmitProps.emit(this.inLineForm.value.title);
        }
        this.isEditing = false;
        this.inLineForm.reset();
    }
}