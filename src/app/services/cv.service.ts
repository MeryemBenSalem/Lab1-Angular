import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model'; // Import the Cv interface

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class CvService {
  // Mock data for the CVs
  private cvs: Cv[] = [
    {
      id: 1,
      name: 'Aymen Sellaouti',
      job: 'Trainer',
      description: 'I’m the new Sinatra, and since I made it here, I can make it anywhere.',
      avatar: 'assets/aymen.jpg', // Replace with the actual path to the image
    },
    {
      id: 2,
      name: 'Skander Sellaouti',
      job: 'Developer',
      description: 'Passionate about coding and software architecture.',
      avatar: 'assets/skander.jpg', // Replace with the actual path to the image
    },
    {
      id: 3,
      name: 'Worker Candidate',
      job: 'Job Seeker',
      description: 'Looking for opportunities in the tech industry.',
      avatar: 'assets/worker.jpg', // Replace with the actual path to the image
    },
  ];

  // Method to get the full list of CVs
  getCvs(): Cv[] {
    return this.cvs;
  }

  // Method to get a single CV by its ID
  getCvById(id: number): Cv | undefined {
    return this.cvs.find((cv) => cv.id === id);
  }
}
