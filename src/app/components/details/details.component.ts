import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientService } from 'src/service/client.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dados: any, private formBuilder: FormBuilder,private clientService: clientService ) {
  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [this.dados.id, Validators.required],
      title: [this.dados.title, Validators.required],
      body: [this.dados.body, Validators.required],
      userId: [this.dados.userId, Validators.required],
    });
  }
  onSave() {
    if (this.editForm.valid) {
      this.clientService.apiPatch(this.editForm.value).subscribe(()=> {
        console.log("editado")
        })
    }
}
}
