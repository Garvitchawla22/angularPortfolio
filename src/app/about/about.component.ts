import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  vectImage: string = 'assets/vect.avif';
  projects: Project[] = [
    {
      title: 'N-Queen Visualizer',
      description:
        'The N-Queen Visualizer Project is a web application that aims to help users visualize the solution to the classic N-Queens problem. The N-Queens problem involves placing N queens on an NxN chessboard in such a way that no two queens attack each other. This means that no two queens share the same row, column, or diagonal.',
      imageUrl: 'assets/visualisation.gif',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      title: 'Electricity bill management system',
      description:
        'This Electricity bill management system project in java, the main goal of the project is to help the power department by computerizing the billing system. It primarily focuses on calculating the number of units utilized over a given period of time and the amount of money to be paid to electricity offices',
      imageUrl: 'assets/e billing system.jpg',
      skills: ['JFrame', 'MySql', 'Java'],
    },
    {
      title: 'Netflix Clone',
      description:
        'This project is a simplified front end clone of Netflix. It was created with React and CSS (Grid and Flexbox). It uses The MovieDB Api to search for movies and display details.',
      imageUrl: 'assets/netflix-clone.jpg',
      skills: ['React.js', 'CSS', 'JavaScript'],
    },
    {
      title: 'Parkinson disease detection using Drawing tasks',
      description:
        'Parkinson\'s disease is a neurological disease which produces uncontrollable tremors, bradykinesia and a variety of other degenerative signs. The early indicators and symptoms of the Parkinson’s disease makes it difficult to distinguish from other neurodegenerative diseases or physiological changes associated with normal aging. Early disease detection is critical for effective therapy. The goal of our work is to aid in early diagnosis using CNN models trained on data from hand drawing tasks for classification into healthy or PD patients. Our CNN model is trained by utilizing the HandPD dataset’s dynamic signals while joint recurrence plot technique was employed to model the time series dynamic data into images.',
      imageUrl: 'assets/pd.jpg',
      skills: ['Python', 'TensorFlow', 'Pandas'],
    }
  ];

  changeImage() {
    this.vectImage = ' assets/myi.jpg';
  }

  revImage() {
    this.vectImage = ' assets/vect.avif';
  }
}
