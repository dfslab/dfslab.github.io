// 홈 화면 연구 분야 카드 5개.
// 카드 위쪽 그림은 home-diagrams.js의 단색 선 도식이다. alt는 그 도식의 설명이다.

export function getHomeCards(locale) {
  const isKo = locale === 'ko';
  return [
    {
      key: 'recovery',
      alt: isKo ? '저장장치 클러스터 배치도. 지워졌지만 복구할 수 있는 구역을 강조' : 'Cluster map of a storage device, highlighting deleted but recoverable clusters',
      label: isKo ? '데이터 복구' : 'Data Recovery',
      heading: isKo ? '지워진 데이터는 어디까지 되살릴 수 있는가' : 'How much of deleted data can be recovered?',
      sub: isKo ? '데이터베이스, 파일시스템, 메모리' : 'Databases, file systems, memory',
      dark: false,
    },
    {
      key: 'incident',
      alt: isKo ? '최초 침입에서 피해 발생까지 다섯 단계로 이어지는 공격 타임라인' : 'Attack timeline in five stages, from initial access to impact',
      label: isKo ? '침해사고 포렌식' : 'Incident Response Forensics',
      heading: isKo ? '공격자는 어떻게 들어와 무엇을 남겼는가' : 'How did the attacker get in, and what did they leave behind?',
      sub: isKo ? '악성코드 분석, 공격 타임라인, 랜섬웨어 조사' : 'Malware analysis, attack timelines, ransomware investigation',
      dark: false,
    },
    {
      key: 'apps',
      alt: isKo ? '메신저 앱이 기기에 남기는 폴더와 파일 구조' : 'Folder and file structure that a messenger app leaves on a device',
      label: isKo ? '애플리케이션·시스템' : 'Applications & Systems',
      heading: isKo ? '새로운 앱과 시스템은 어떤 흔적을 남기는가' : 'What traces do new apps and systems leave behind?',
      sub: isKo ? '메신저, 브라우저, 운영체제, 원격 접속' : 'Messengers, browsers, operating systems, remote access',
      dark: false,
    },
    {
      key: 'cloud',
      alt: isKo ? '기기와 클라우드 서버 사이의 동기화와 데이터 수집 흐름' : 'Sync and data acquisition flow between a device and cloud servers',
      label: isKo ? '클라우드' : 'Cloud',
      heading: isKo ? '기기 밖에 있는 데이터는 어떻게 확보하는가' : 'How do we acquire data that lives off the device?',
      sub: isKo ? '클라우드 서비스, 동기화 데이터' : 'Cloud services, synced data',
      dark: false,
    },
    {
      key: 'verify',
      alt: isKo ? '원본과 이미지의 SHA-256 해시값이 일치하는지 대조' : 'Comparing SHA-256 hashes of the source and its image',
      label: isKo ? '증거 검증' : 'Evidence Verification',
      heading: isKo ? '분석 결과를 믿을 수 있다는 것을 어떻게 증명하는가' : 'How do we prove that analysis results can be trusted?',
      sub: isKo ? '분석 도구와 절차의 신뢰성, 안티포렌식 탐지' : 'Reliability of tools and procedures, anti-forensics detection',
      dark: true,
    },
  ];
}
