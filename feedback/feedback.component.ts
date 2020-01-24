import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback : any;

  constructor(private service : ClientService) { }

  ngOnInit() {
    let observableResult = this.service.listFeedback();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.feedback = data;
    })
  }

}
