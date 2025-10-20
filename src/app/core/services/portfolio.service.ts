import { Injectable } from '@angular/core';
import { Experience, Skill, Project, SocialLink, ProfileInfo } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private profileInfo: ProfileInfo = {
    name: 'Otávio Valadão',
    title: 'Software Engineer',
    headline: 'Engenheiro de Backend | Especialista em Fintech & Arquitetura em Nuvem',
    bio: 'Engenheiro de Backend especializado em soluções fintech escaláveis, desenvolvendo sistemas robustos em Java e arquiteturas nativas em nuvem. Expertise em Spring Boot e AWS acompanhada pelo compromisso com excelência técnica e mentoria. Prospero em ambientes colaborativos resolvendo desafios complexos.',
    email: 'otavionunesvaladao@gmail.com',
    phone: '+55 31 99886-6134'
  };

  private experiences: Experience[] = [
    {
      id: '1',
      year: 'abr 2024 - Presente',
      company: 'DTI Digital',
      position: 'Software Engineer',
      description: 'Desenvolvimento de soluções inovadoras para fintech com arquitetura escalável e microsserviços robustos.',
      technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kafka', 'DynamoDB', 'PostgreSQL'],
      highlights: [
        'Arquitetura AWS com DynamoDB para idempotência em transações fintech',
        'Fluxos assíncronos com SQS/SNS e Kafka para processamento de eventos',
        'CDC (Change Data Capture) com Kafka Connector para síncronia de dados',
        'Otimização de latência em relatórios financeiros com S3 + CloudFront',
        'Observabilidade end-to-end com New Relic',
        'Mentoria técnica de estagiários e developers juniores',
        'Participação em entrevistas técnicas e avaliação de candidatos',
      ]
    },
    {
      id: '2',
      year: 'jun 2023 - fev 2024',
      company: 'Engineering Brasil',
      position: 'Software Engineer',
      description: 'Desenvolvimento e manutenção de aplicativos e sistemas de software.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Git', 'Angular'],
      highlights: [
        'Desenvolvimento de código-fonte e testes automatizados',
        'Revisão de código e melhoria contínua de qualidade',
        'Suporte técnico a usuários finais e clientes',
        'Integração de software e implementação de features',
        'Colaboração com equipes multidisciplinares'
      ]
    },
    {
      id: '3',
      year: 'set 2021 - mai 2023',
      company: 'Engineering Brasil',
      position: 'Intern - Desenvolvedor de Software',
      description: 'Formação intensiva em Java com foco em Spring Boot e boas práticas.',
      technologies: ['Java', 'Spring Boot', 'POO', 'PostgreSQL', 'Git'],
      highlights: [
        'Aprendizado de Java com foco em Orientação a Objetos',
        'Spring Boot framework com avaliações e projetos práticos',
        'Exposição a diversas linguagens e ambientes de desenvolvimento',
        'Participação em projetos reais da empresa'
      ]
    }
  ];

  private skills: Skill[] = [
    {
      id: 'backend',
      category: 'Backend & Linguagens',
      items: ['Java', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'JPA', 'NestJS', 'RESTful APIs', 'Microsserviços'],
      icon: '⚙️'
    },
    {
      id: 'cloud',
      category: 'Cloud & DevOps',
      items: ['AWS (EC2, S3, SQS, SNS, Lambda, DynamoDB, CloudFront)', 'Docker', 'Kubernetes basics', 'Kafka', 'GitHub Actions', 'CI/CD'],
      icon: '☁️'
    },
    {
      id: 'database',
      category: 'Banco de Dados',
      items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'DocumentDB', 'JPA/Hibernate', 'SQL avançado'],
      icon: '🗄️'
    },
    {
      id: 'frontend',
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      icon: '🎨'
    },
    {
      id: 'tools',
      category: 'Ferramentas & Metodologias',
      items: ['Git', 'Maven', 'Linux', 'Observabilidade (New Relic)', 'Agile/Scrum', 'Code Review', 'TDD'],
      icon: '🛠️'
    }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'Arquitetura de Microsserviços Fintech',
      description: 'Implementação de arquitetura escalável para processamento de transações financeiras com foco em idempotência e fluxos assíncronos.',
      technologies: ['Java', 'Spring Boot', 'AWS', 'Kafka', 'DynamoDB', 'PostgreSQL'],
      achievements: [
        'Idempotência com DynamoDB para transações seguras',
        'Fluxos assíncronos com SQS/SNS reduzindo latência',
        'CDC com Kafka Connector para síncronia entre serviços',
        'Alta disponibilidade e escalabilidade horizontal'
      ]
    },
    {
      id: '2',
      title: 'Otimização de Relatórios Financeiros',
      description: 'Redução significativa de latência no download de relatórios usando políticas de ciclo de vida S3 e CDN CloudFront.',
      technologies: ['AWS S3', 'CloudFront', 'Spring Boot', 'Java'],
      achievements: [
        'Redução de latência em ~80%',
        'Implementação de políticas de ciclo de vida S3',
        'Integração com CDN CloudFront para distribuição global',
        'Suporte otimizado para CSV/PDF com compressão'
      ]
    },
    {
      id: '3',
      title: 'Sistema de Observabilidade End-to-End',
      description: 'Implementação de monitoramento e observabilidade para sistemas críticos usando New Relic.',
      technologies: ['New Relic', 'Spring Boot', 'AWS', 'Kafka', 'Java'],
      achievements: [
        'Visibilidade completa dos microsserviços',
        'Alertas inteligentes e proativos',
        'Análise de performance e bottlenecks',
        'Rastreamento distribuído de requisições'
      ]
    }
  ];

  private socialLinks: SocialLink[] = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/otaviovaladao/',
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      color: '#0A66C2'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/OtavioValadao',
      icon: 'bi-github',
      label: 'GitHub',
      color: '#333333'
    },
    {
      platform: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5531998866134',
      icon: 'bi-whatsapp',
      label: 'WhatsApp',
      color: '#25D366'
    }
  ];

  private education = [
    {
      id: '1',
      type: 'postgraduate' as const,
      course: 'Pós-graduação em Arquitetura de Software',
      institution: 'FIAP',
      year: '2024 - Presente',
      status: 'in-progress' as const,
      description: 'Especialização em arquitetura de software, microsserviços e design de sistemas escaláveis'
    },
    {
      id: '2',
      type: 'graduation' as const,
      course: 'Bacharel em Ciências da Computação',
      institution: 'Estácio de Sá',
      year: '2020 - 2024',
      status: 'in-progress' as const,
      description: 'Formação em desenvolvimento de software e teoria da computação'
    },
    {
      id: '3',
      type: 'certification' as const,
      course: 'FIC - Desenvolvedor de Aplicativos para Mídias Digitais',
      institution: 'FIC',
      year: '2022',
      status: 'completed' as const,
      description: 'Formação complementar em desenvolvimento de aplicativos'
    }
  ];

  constructor() { }

  getProfileInfo() {
    return this.profileInfo;
  }

  getExperiences() {
    return this.experiences;
  }

  getSkills() {
    return this.skills;
  }

  getProjects() {
    return this.projects;
  }

  getSocialLinks() {
    return this.socialLinks;
  }

  getEducation() {
    return this.education;
  }
}