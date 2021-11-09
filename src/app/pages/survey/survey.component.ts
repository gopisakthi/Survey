import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
public name:any;
  constructor() { }

  ngOnInit(): void {
  }

  names(){
    this.name=document.getElementById('name');
    alert(this.name.value);
  }

}
