import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ea-industries',
  templateUrl: './ea-industries.component.html',
  styleUrls: ['./ea-industries.component.css']
})
export class EaIndustriesComponent implements OnInit {

  constructor() { }


  industries = [
    {
      image: 'healthcare.jpeg',
      title: 'Primary Care Practice',
      bio: 'Process Reingeneering',
      problems: [
        {
          name: 'Process had severe bottlenecks'
        },
        {
          name: 'No process documentation or measurements in place'
        }
      ],
      solutions: [
        {
          name: 'Full practice wide process documentation'
        },
        {
          name: 'Bottleneck detection'
        },
        {
          name: 'Process reingeneering and improvements'
        }
      ]
    },
    {
      image: 'code.jpeg',
      title: 'Fortune 100',
      bio: 'Enterprise Application',
      problems: [
        {
          name: 'No framework for enterprise components'
        },
        {
          name: 'Poor quality code output'
        }
      ],
      solutions: [
        {
          name: 'solution 1'
        },
        {
          name: 'solution 2'
        },
        {
          name: 'solution 3'
        }
      ]
    },
    {
      image: 'analytics.jpg',
      title: 'NASDAQ Listed Company',
      bio: 'Automated Reporting',
      problems: [
        {
          name: 'CTO missing delivery dates'
        },
        {
          name: 'No visibility into processes'
        }
      ],
      solutions: [
        {
          name: 'solution 1'
        },
        {
          name: 'solution 2'
        },
        {
          name: 'solution 3'
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
