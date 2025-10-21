import { Injectable } from '@angular/core';
import { Experience, Skill, Project, SocialLink, ProfileInfo } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private profileInfo: ProfileInfo = {
    name: 'Otávio Valadão',
    title: 'Software Architect',
    headline: 'Backend Engineer | Comunicação Técnica & Impacto em Times',
    bio: 'Construo sistemas fintech escaláveis em Java e AWS, com foco em comunicação clara e impacto real. Especializado em otimização de performance (latência) e observabilidade distribuída. Mentoro 10+ desenvolvedores e prospero em times colaborativos resolvendo desafios complexos.',
    email: 'otavionunesvaladao@gmail.com',
    phone: '+55 31 99886-6134'
  };

  private experiences: Experience[] = [
    {
      id: '1',
      year: 'abr 2024 - Presente',
      company: 'DTI Digital',
      position: 'Software Engineer',
      description: 'Desenvolvimento de soluções fintech com foco em performance e observabilidade end-to-end.',
      technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kafka', 'DynamoDB', 'PostgreSQL'],
      highlights: [
        'Reduzi latência de download de relatórios CSV de 45s para 8s (82% de melhoria) via S3 + CloudFront',
        'Implementei políticas de ciclo de vida S3 e cache inteligente, economizando 40% em custos AWS',
        'Arquitetura com DynamoDB para idempotência em transações fintech',
        'Observabilidade end-to-end com New Relic, reduzindo MTTR em 60%',
        'Mentoria técnica: 10+ developers em arquitetura de microsserviços e Java avançado',
        'Facilitador de code reviews, melhorando qualidade e conhecimento técnico do time'
      ]
    },
    {
      id: '2',
      year: 'jun 2023 - fev 2024',
      company: 'Engineering Brasil',
      position: 'Software Engineer',
      description: 'Desenvolvimento e manutenção de sistemas críticos, com ênfase em qualidade e comunicação.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Git', 'Angular'],
      highlights: [
        'Revisei 200+ PRs, mentorando padrões de código e arquitetura',
        'Implementei testes automatizados, aumentando cobertura de 45% para 78%',
        'Documentei arquitetura em ADRs (Architecture Decision Records) para onboarding',
        'Suporte técnico: resolvi 50+ issues de produção com análise estruturada',
        'Colaborei com múltiplos times na integração de microsserviços'
      ]
    },
    {
      id: '3',
      year: 'set 2021 - mai 2023',
      company: 'Engineering Brasil',
      position: 'Intern → Software Engineer',
      description: 'Trajetória de crescimento: de estagiário a engenheiro pleno em 1.5 anos.',
      technologies: ['Java', 'Spring Boot', 'POO', 'PostgreSQL', 'Git'],
      highlights: [
        'Dominei Java/Spring Boot através de projetos reais e mentoria contínua',
        'Escalei de tarefas simples para arquitetura de módulos críticos',
        'Recebi feedback consistente que levou a promoção rápida',
        'Comecei a mentorar estagiários do mesmo programa'
      ]
    }
  ];

  private skills: Skill[] = [
    {
      id: 'backend',
      category: 'Backend & Arquitetura',
      items: ['Java', 'Spring Boot', 'Microsserviços', 'RESTful APIs', 'Idempotência Distribuída', 'Padrões de Design'],
      icon: '⚙️'
    },
    {
      id: 'cloud',
      category: 'Cloud & Performance',
      items: ['AWS (S3, CloudFront, Lambda, DynamoDB, SQS, SNS)', 'Otimização de Latência', 'Cache Estratégico', 'Docker', 'Kafka', 'CI/CD'],
      icon: '☁️'
    },
    {
      id: 'observability',
      category: 'Observabilidade & Debugging',
      items: ['New Relic', 'Distributed Tracing', 'Logging Estruturado', 'Métricas', 'Análise de Performance'],
      icon: '🔍'
    },
    {
      id: 'comunicacao',
      category: 'Soft Skills & Liderança',
      items: ['Mentoria Técnica', 'Code Review', 'Comunicação Clara', 'Documentação (ADR)', 'Trabalho em Equipe'],
      icon: '💬'
    },
    {
      id: 'tools',
      category: 'Ferramentas & Metodologias',
      items: ['Git', 'Maven', 'Linux', 'PostgreSQL', 'MongoDB', 'Agile/Scrum', 'TDD'],
      icon: '🛠️'
    }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'Otimização de Relatórios Financeiros: 82% Redução de Latência',
      description: 'Download de arquivos CSV de relatórios fintech estava levando 45 segundos. Implementei otimizações de cache e distribuição global.',
      technologies: ['AWS S3', 'CloudFront CDN', 'Spring Boot', 'Java', 'Políticas de Ciclo de Vida'],
      achievements: [
        'Latência reduzida de 45s para 8s (82% de melhoria)',
        'Economia de 40% em custos AWS mensais via ciclo de vida S3',
        'Distribuição global com CloudFront, suportando 10M+ requisições/mês',
        'Impactou 500+ usuários finais com experiência 5x mais rápida'
      ]
    },
    {
      id: '2',
      title: 'Arquitetura de Idempotência em Transações Fintech',
      description: 'Sistema de processamento de transações financeiras com garantia de que nenhuma transação duplicada seria processada, mesmo em falhas de rede.',
      technologies: ['Java', 'Spring Boot', 'AWS', 'DynamoDB', 'Kafka', 'SQS/SNS'],
      achievements: [
        'Implementei padrão de idempotência com DynamoDB para zero duplicatas',
        'Fluxos assíncronos com Kafka reduziram latência de respostas',
        'Processamento de 10K+ transações/dia com 99.99% confiabilidade',
        'Zero falsos negativos em testes de resiliência'
      ]
    },
    {
      id: '3',
      title: 'Observabilidade End-to-End: Redução de MTTR em 60%',
      description: 'Implementei sistema de observabilidade que permitia rastrear requisições através de múltiplos microsserviços, reduzindo tempo de debug de horas para minutos.',
      technologies: ['New Relic', 'Spring Boot', 'AWS', 'Distributed Tracing', 'Java'],
      achievements: [
        'MTTR (Mean Time To Recovery) reduzido de 3 horas para 1 hora (60% melhoria)',
        'Visibilidade completa de 15+ microsserviços em uma dashboard',
        'Alertas proativos que preveniram 20+ incidentes críticos',
        'Time economizou 100+ horas/mês em debugging'
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