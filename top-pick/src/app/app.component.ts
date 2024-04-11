import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

interface Topic {
  name: string;
  description: string;
  interest: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    CommonModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-pick';
  topics: Topic[] = [];
  newTopicName: string = '';
  newTopicDescription: string = '';

  constructor() {
    this.topics.push({
      name: "testName",
      description: "test description",
      interest: 1
    })
    this.topics.push({
      name: "testName2",
      description: "test description2",
      interest: 2
    })
  }

  addTopic(): void {
    const newTopic: Topic = {
      name: this.newTopicName,
      description: this.newTopicDescription,
      interest: 1
    };

    console.log(newTopic);

    this.topics.push(newTopic);

    this.newTopicName = '';
    this.newTopicDescription = '';
  }

  sortTopics(): void {
    this.topics.sort((a, b) => {
      return b.interest - a.interest;
    });
    console.log(this.topics);
  }

}