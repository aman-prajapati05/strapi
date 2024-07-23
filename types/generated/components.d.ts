import type { Schema, Attribute } from '@strapi/strapi';

export interface TextFeaturedproject extends Schema.Component {
  collectionName: 'components_text_featuredprojects';
  info: {
    displayName: 'featuredproject';
  };
  attributes: {
    title: Attribute.String;
    bg_img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    category: Attribute.String;
    year: Attribute.String;
    service: Attribute.String;
    short_desc: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text.featuredproject': TextFeaturedproject;
    }
  }
}
