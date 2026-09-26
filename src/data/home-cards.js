// 홈 화면 연구 분야 카드 4개 (시안 "G2 연구 분야 질문" 원본 이관)
// 아이콘 그리드(애플리케이션/클라우드)는 순서 고정, alt만 로케일별로 다름.
// 영문(en) 문구는 팀장 초안이며 소장 검토 대상(draft).
export const DRAFT_EN = true;

const APP_ICONS = [
  { file: '/images/logos/kakaotalk.svg', ko: '카카오톡', en: 'KakaoTalk' },
  { file: '/images/logos/telegram.svg', ko: '텔레그램', en: 'Telegram' },
  { file: '/images/logos/whatsapp.svg', ko: 'WhatsApp', en: 'WhatsApp' },
  { file: '/images/logos/signal.svg', ko: 'Signal', en: 'Signal' },
  { file: '/images/logos/instagram.svg', ko: '인스타그램', en: 'Instagram' },
  { file: '/images/logos/line.svg', ko: 'LINE', en: 'LINE' },
  { file: '/images/logos/discord.svg', ko: '디스코드', en: 'Discord' },
  { file: '/images/logos/googlechrome.svg', ko: '크롬', en: 'Chrome' },
];

const CLOUD_ICONS = [
  { file: '/images/logos/aws.png', ko: 'AWS', en: 'AWS' },
  { file: '/images/logos/azure.png', ko: 'Microsoft Azure', en: 'Microsoft Azure' },
  { file: '/images/logos/googlecloud.svg', ko: 'Google Cloud', en: 'Google Cloud' },
  { file: '/images/logos/icloud.svg', ko: 'iCloud', en: 'iCloud' },
  { file: '/images/logos/googledrive.svg', ko: 'Google 드라이브', en: 'Google Drive' },
  { file: '/images/logos/onedrive.png', ko: 'OneDrive', en: 'OneDrive' },
  { file: '/images/logos/dropbox.svg', ko: 'Dropbox', en: 'Dropbox' },
  { file: '/images/logos/naver.svg', ko: '네이버 MYBOX', en: 'Naver MYBOX' },
];

export function getHomeCards(locale) {
  const isKo = locale === 'ko';
  return [
    {
      key: 'recovery',
      kind: 'image',
      image: '/images/research/storage_trio.jpg',
      alt: isKo ? '하드디스크, 2.5인치 SATA SSD, M.2 NVMe SSD' : 'Hard disk drive, 2.5" SATA SSD, and M.2 NVMe SSD',
      label: isKo ? '데이터 복구' : 'Data Recovery',
      heading: isKo ? '지워진 데이터는 어디까지 되살릴 수 있는가' : 'How much of deleted data can be recovered?',
      sub: isKo ? '데이터베이스, 파일시스템, 메모리' : 'Databases, file systems, memory',
      dark: false,
    },
    {
      key: 'apps',
      kind: 'icons',
      icons: APP_ICONS,
      label: isKo ? '애플리케이션' : 'Applications',
      heading: isKo ? '새로운 앱과 서비스는 어떤 흔적을 남기는가' : 'What traces do new apps and services leave behind?',
      sub: isKo ? '메신저, 브라우저, 원격 접속, AI 앱' : 'Messengers, browsers, remote access, AI apps',
      dark: false,
    },
    {
      key: 'cloud',
      kind: 'icons',
      icons: CLOUD_ICONS,
      label: isKo ? '클라우드' : 'Cloud',
      heading: isKo ? '기기 밖에 있는 데이터는 어떻게 확보하는가' : 'How do we acquire data that lives off the device?',
      sub: isKo ? '클라우드 서비스, 동기화 데이터' : 'Cloud services, synced data',
      dark: false,
    },
    {
      key: 'verify',
      kind: 'image',
      image: '/images/research/verify.jpg',
      alt: isKo ? '하드디스크를 연결한 포렌식 디스크 이미저' : 'A forensic disk imager connected to a hard disk drive',
      label: isKo ? '증거 검증' : 'Evidence Verification',
      heading: isKo ? '분석 결과를 믿을 수 있다는 것을 어떻게 증명하는가' : 'How do we prove that analysis results can be trusted?',
      sub: isKo ? '분석 도구와 절차의 신뢰성, 안티포렌식 탐지' : 'Reliability of tools and procedures, anti-forensics detection',
      dark: true,
    },
  ];
}
