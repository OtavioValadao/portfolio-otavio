import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AnimationService } from '../../core/services/animation.service';
import { ProfileInfo } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  profileInfo!: ProfileInfo;
  education: any[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.profileInfo = this.portfolioService.getProfileInfo();
    this.education = this.portfolioService.getEducation();
    this.animationService.refreshAOS();
  }
}