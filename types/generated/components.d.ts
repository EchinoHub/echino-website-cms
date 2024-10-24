import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralArticle extends Struct.ComponentSchema {
  collectionName: 'components_general_articles';
  info: {
    description: '';
    displayName: 'Article';
    icon: 'discuss';
  };
  attributes: {
    DefaultImage: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.RichText;
    FontAwesomeIcon: Schema.Attribute.String;
    ItalicLink: Schema.Attribute.Component<'general.link', false>;
    Overtitle: Schema.Attribute.String;
    PageLink: Schema.Attribute.Component<'general.button', false>;
    TextOrientation: Schema.Attribute.Enumeration<['Right', 'Left', 'Center']> &
      Schema.Attribute.DefaultTo<'Left'>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralArticleColumn extends Struct.ComponentSchema {
  collectionName: 'components_general_article_columns';
  info: {
    displayName: 'ArticleColumn';
    icon: 'apps';
  };
  attributes: {
    Articles: Schema.Attribute.Component<'general.article', true>;
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowRight';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<['Blue', 'DarkBlue', 'Yellow']>;
    Style: Schema.Attribute.Enumeration<['Filled', 'Outlined']>;
    Title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface GeneralCarousel extends Struct.ComponentSchema {
  collectionName: 'components_general_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'stack';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Items: Schema.Attribute.Component<'general.carousel-item', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_general_carousel_items';
  info: {
    displayName: 'CarouselItem';
    icon: 'layer';
  };
  attributes: {
    Button: Schema.Attribute.Component<'general.button', false>;
    Description: Schema.Attribute.RichText;
    ItemTitle: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_general_cta_sections';
  info: {
    displayName: 'CTASection';
    icon: 'sun';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'general.button', false>;
    Description: Schema.Attribute.RichText;
    FeaturedMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Overtitle: Schema.Attribute.String;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralFaq extends Struct.ComponentSchema {
  collectionName: 'components_general_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Items: Schema.Attribute.Component<'general.faq-item', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_general_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'question';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    Question: Schema.Attribute.RichText;
  };
}

export interface GeneralFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_general_feature_items';
  info: {
    displayName: 'FeatureItem';
    icon: 'dashboard';
  };
  attributes: {
    FeaturesName: Schema.Attribute.String;
  };
}

export interface GeneralFeatures extends Struct.ComponentSchema {
  collectionName: 'components_general_features';
  info: {
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Items: Schema.Attribute.Component<'general.feature-item', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralHero extends Struct.ComponentSchema {
  collectionName: 'components_general_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTA: Schema.Attribute.Component<'general.button', false>;
    DefaultImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralIntegrations extends Struct.ComponentSchema {
  collectionName: 'components_general_integrations';
  info: {
    displayName: 'Integrations';
    icon: 'heart';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Integrators: Schema.Attribute.Component<'general.integrator', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralIntegrator extends Struct.ComponentSchema {
  collectionName: 'components_general_integrators';
  info: {
    displayName: 'Integrator';
    icon: 'heart';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    Type: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'arrowRight';
  };
  attributes: {
    Text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface GeneralPartners extends Struct.ComponentSchema {
  collectionName: 'components_general_partners';
  info: {
    displayName: 'Partners';
    icon: 'handHeart';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralStep extends Struct.ComponentSchema {
  collectionName: 'components_general_steps';
  info: {
    displayName: 'Step';
    icon: 'filter';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Steps: Schema.Attribute.Component<'general.step-item', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralStepItem extends Struct.ComponentSchema {
  collectionName: 'components_general_step_items';
  info: {
    displayName: 'StepItem';
    icon: 'layer';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralSticky extends Struct.ComponentSchema {
  collectionName: 'components_general_stickies';
  info: {
    displayName: 'Sticky';
    icon: 'paint';
  };
  attributes: {
    Articles: Schema.Attribute.Component<'general.article', true>;
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralSwissMade extends Struct.ComponentSchema {
  collectionName: 'components_general_swiss_mades';
  info: {
    displayName: 'SwissMade';
    icon: 'rocket';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Button: Schema.Attribute.Component<'general.button', false>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.RichText;
  };
}

export interface GeneralTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_general_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'discuss';
  };
  attributes: {
    Author: Schema.Attribute.String;
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Company: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Testimonial: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.article': GeneralArticle;
      'general.article-column': GeneralArticleColumn;
      'general.button': GeneralButton;
      'general.carousel': GeneralCarousel;
      'general.carousel-item': GeneralCarouselItem;
      'general.cta-section': GeneralCtaSection;
      'general.faq': GeneralFaq;
      'general.faq-item': GeneralFaqItem;
      'general.feature-item': GeneralFeatureItem;
      'general.features': GeneralFeatures;
      'general.hero': GeneralHero;
      'general.integrations': GeneralIntegrations;
      'general.integrator': GeneralIntegrator;
      'general.link': GeneralLink;
      'general.partners': GeneralPartners;
      'general.step': GeneralStep;
      'general.step-item': GeneralStepItem;
      'general.sticky': GeneralSticky;
      'general.swiss-made': GeneralSwissMade;
      'general.testimonial': GeneralTestimonial;
    }
  }
}
