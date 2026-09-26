// 메뉴 순서 고정: 연구, 논문, 프로젝트, 구성원, 소식, 연구원 모집, EN
// key는 페이지 식별자, path는 로케일별 URL(끝 슬래시 없음, 홈은 '')
export const NAV_ITEMS = [
  { key: 'research', ko: '연구', en: 'Research', path: 'research' },
  { key: 'publications', ko: '논문', en: 'Publications', path: 'publications' },
  { key: 'projects', ko: '프로젝트', en: 'Projects', path: 'projects' },
  { key: 'people', ko: '구성원', en: 'People', path: 'people' },
  { key: 'news', ko: '소식', en: 'News', path: 'news' },
  { key: 'join', ko: '연구원 모집', en: 'Join Us', path: 'join' },
];

export function localeHref(locale, path = '') {
  const base = locale === 'en' ? '/en' : '';
  if (!path) return base || '/';
  return `${base}/${path}`;
}

export function otherLocale(locale) {
  return locale === 'en' ? 'ko' : 'en';
}
