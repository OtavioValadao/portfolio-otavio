import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SocialLink, ProfileInfo } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  socialLinks: SocialLink[] = [];
  profileInfo!: ProfileInfo;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.socialLinks = this.portfolioService.getSocialLinks();
    this.profileInfo = this.portfolioService.getProfileInfo();
  }
}