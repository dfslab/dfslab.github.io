// 홈 화면 연구 분야 카드 5개(2026-09-27 침해사고 포렌식 추가) (시안 "G2 연구 분야 질문" 원본 이관)
// 아이콘 그리드(애플리케이션/클라우드)는 순서 고정, alt만 로케일별로 다름.
// 영문(en) 문구는 초안이며 교수 검토 대상(draft).
export const DRAFT_EN = true;

const APP_ICONS = [
  { file: '/images/logos/kakaotalk.svg', ko: '카카오톡', en: 'KakaoTalk' },
  { file: '/images/logos/googlechrome.svg', ko: '크롬', en: 'Chrome' },
  { file: '/images/logos/android.svg', ko: '안드로이드', en: 'Android' },
  { file: '/images/logos/windows.png', ko: 'Windows', en: 'Windows' },
];

const CLOUD_ICONS = [
  { file: '/images/logos/aws.png', ko: 'AWS', en: 'AWS' },
  { file: '/images/logos/azure.png', ko: 'Microsoft Azure', en: 'Microsoft Azure' },
  { file: '/images/logos/googledrive.svg', ko: 'Google 드라이브', en: 'Google Drive' },
  { file: '/images/logos/icloud.svg', ko: 'iCloud', en: 'iCloud' },
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
      key: 'incident',
      kind: 'image',
      image: '/images/research/incident.png',
      alt: isKo ? '2017년 Petya 랜섬웨어에 감염된 컴퓨터 화면' : 'Screen of a computer infected by the 2017 Petya ransomware',
      label: isKo ? '침해사고 포렌식' : 'Incident Response Forensics',
      heading: isKo ? '공격자는 어떻게 들어와 무엇을 남겼는가' : 'How did the attacker get in, and what did they leave behind?',
      sub: isKo ? '악성코드 분석, 공격 타임라인, 랜섬웨어 조사' : 'Malware analysis, attack timelines, ransomware investigation',
      dark: false,
    },
    {
      key: 'apps',
      kind: 'icons',
      icons: APP_ICONS,
      iconCols: 2,
      label: isKo ? '애플리케이션·시스템' : 'Applications & Systems',
      heading: isKo ? '새로운 앱과 시스템은 어떤 흔적을 남기는가' : 'What traces do new apps and systems leave behind?',
      sub: isKo ? '메신저, 브라우저, 운영체제, 원격 접속' : 'Messengers, browsers, operating systems, remote access',
      dark: false,
    },
    {
      key: 'cloud',
      kind: 'icons',
      icons: CLOUD_ICONS,
      iconCols: 2,
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
