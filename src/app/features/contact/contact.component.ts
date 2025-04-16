import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Contact component
 * Provides a contact form and contact information
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  /**
   * Contact form group
   */
  contactForm!: FormGroup;
  
  /**
   * Flag to indicate if the form was submitted
   */
  submitted = false;
  
  /**
   * Flag to indicate if the form submission was successful
   */
  submitSuccess = false;
  
  /**
   * Contact information
   */
  contactInfo = {
    email: 'Danidiaz0799&#64;gmail.com',
    phone: '(+57) 3215460960',
    location: 'Bogotá, Colombia'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialize contact form
   */
  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Submit the contact form
   */
  onSubmit(): void {
    this.submitted = true;
    
    // Check if the form is valid
    if (this.contactForm.valid) {
      // In a real application, you would send the form data to a server here
      // For now, we'll just simulate a successful submission
      console.log('Form submitted', this.contactForm.value);
      
      setTimeout(() => {
        this.submitSuccess = true;
        // Reset the form after successful submission
        this.contactForm.reset();
        this.submitted = false;
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 1000);
    }
  }

  /**
   * Check if a form control has an error
   * @param controlName Name of the form control
   * @param errorName Name of the error
   * @returns True if the control has the specified error
   */
  hasError(controlName: string, errorName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.hasError(errorName) && (control.dirty || control.touched || this.submitted);
  }
}
