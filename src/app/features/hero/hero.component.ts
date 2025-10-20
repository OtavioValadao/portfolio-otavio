import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo, SocialLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  profileInfo!: ProfileInfo;
  socialLinks: SocialLink[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.profileInfo = this.portfolioService.getProfileInfo();
    this.socialLinks = this.portfolioService.getSocialLinks();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}