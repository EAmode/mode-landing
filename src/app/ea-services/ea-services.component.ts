import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-services',
  templateUrl: './ea-services.component.html',
  styleUrls: ['./ea-services.component.css']
})
export class EaServicesComponent implements OnInit {

  constructor() { }

  services = [
    {
      image: 'modeling.svg',
      service: 'Process Documentation',
      feature: [
        {
          item: 'Full process modeling',
        },
        {
          item: 'Analysis of potential bottlenecks',
        },
        {
          item: 'To-be state modeling',
        }
      ],
    },
    {
      image: 'gps.svg',
      service: 'Root Cause Analysis',
      feature: [
        {
          item: 'Digital process monitoring',
        },
        {
          item: 'Real-time anamoly detection',
        },
        {
          item: 'Ongoing root-cause analytics',
        }
      ],
    },
    {
      image: 'rapid.svg',
      service: 'Rapid Solution Authoring',
      feature: [
        {
          item: 'Bottleneck specific solution development',
        },
        {
          item: 'Rapid development methodology',
        },
        {
          item: 'Measured process improvements',
        }
      ],
    }
  ];
  ngOnInit() {
  }

}
