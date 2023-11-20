"use server-only";
import 'server-only';

const dictionaries = {
  en: () => {
    if (typeof window !== 'undefined') {
      return import('@/messages/en.json').then((module) => ({ default: module.default }));
    } else {
      return Promise.resolve({ default: {} });
    }
  },
  es: () => {
    if (typeof window !== 'undefined') {
      return import('@/messages/es.json').then((module) => ({ default: module.default }));
    } else {
      return Promise.resolve({ default: {} });
    }
  },
  cn: () => {
    if (typeof window !== 'undefined') {
      return import('@/messages/cn.json').then((module) => ({ default: module.default }));
    } else {
      return Promise.resolve({ default: {} });
    }
  },
  vi: () => {
    if (typeof window !== 'undefined') {
      return import('@/messages/vi.json').then((module) => ({ default: module.default }));
    } else {
      return Promise.resolve({ default: {} });
    }
  },
  jp: () => {
    if (typeof window !== 'undefined') {
      return import('@/messages/jp.json').then((module) => ({ default: module.default }));
    } else {
      return Promise.resolve({ default: {} });
    }
  },
};

export const getDictionary = async (locale) => dictionaries[locale]();
