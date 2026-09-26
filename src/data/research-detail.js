// 연구 페이지: 홈 카드 4개를 확장한 상세 설명.
// 소개 문장은 실제 논문 목록(publications.yml)에 실린 주제를 근거로 팀장(개발팀장)이 작성.
// 영문(en) 문장은 팀장 초안이며 소장 검토 대상(draft).
export const DRAFT_EN = true;

export function getResearchDetail(locale) {
  const isKo = locale === 'ko';
  return [
    {
      key: 'recovery',
      label: isKo ? '데이터 복구' : 'Data Recovery',
      heading: isKo
        ? '지워진 데이터는 어디까지 되살릴 수 있는가'
        : 'How much of deleted data can be recovered?',
      body: isKo
        ? [
            '데이터베이스, 파일시스템, 메모리에서 삭제되거나 손상된 데이터가 실제로 어디까지 복구 가능한지를 시스템 내부 구조 수준에서 검증합니다.',
            'Microsoft SQL Server의 삭제 이벤트·원본 수집 방식·데이터베이스 축소(Shrink) 상황에서의 레코드 복구 가능성을 버전별로 비교하고, 버퍼 풀과 페이지 구조를 직접 들여다보는 메모리 기반 포렌식 기법을 연구합니다.',
          ]
        : [
            'We verify, at the level of internal system structures, how much deleted or damaged data in databases, file systems, and memory can actually be recovered.',
            'We compare record recoverability across Microsoft SQL Server versions under deletion events, raw acquisition methods, and database shrink operations, and study memory-based forensic techniques that directly inspect buffer pools and page structures.',
          ],
    },
    {
      key: 'apps',
      label: isKo ? '애플리케이션' : 'Applications',
      heading: isKo
        ? '새로운 앱과 서비스는 어떤 흔적을 남기는가'
        : 'What traces do new apps and services leave behind?',
      body: isKo
        ? [
            '메신저, 브라우저, 원격 접속 도구, 생성형 AI 애플리케이션이 기기에 남기는 아티팩트를 분석합니다.',
            'iOS 기반 인스턴트 메신저의 개인정보 보호 신뢰성, 탈중앙화 웹 서비스 ZeroNet의 아티팩트, WebRTC 기반 크롬 원격 데스크톱(CRD) 환경의 피제어 PC 흔적, 생성형 AI 데스크톱 애플리케이션의 로컬 데이터 저장 구조와 대화 내역 복원 기법을 다룹니다.',
          ]
        : [
            'We analyze the artifacts that messengers, browsers, remote access tools, and generative AI applications leave on devices.',
            'Our work covers privacy protection reliability on iOS-based instant messengers, artifacts of the decentralized web service ZeroNet, traces left on controlled PCs in WebRTC-based Chrome Remote Desktop (CRD) sessions, and the local data storage structure and conversation-history recovery techniques of generative AI desktop applications.',
          ],
    },
    {
      key: 'cloud',
      label: isKo ? '클라우드' : 'Cloud',
      heading: isKo
        ? '기기 밖에 있는 데이터는 어떻게 확보하는가'
        : 'How do we acquire data that lives off the device?',
      body: isKo
        ? [
            '클라우드 서비스와 동기화 데이터는 기기 하나만 조사해서는 전체 그림을 볼 수 없습니다. 클라우드 플랫폼 구조를 이해하고 수사 현장에서 실제로 확보 가능한 절차를 연구합니다.',
            'Azure SQL Database 등 클라우드 데이터베이스의 구조적 한계와 수사 실무 교훈, PaaS 기반 DB 환경에서의 디지털포렌식 수사의 한계와 대응 방안을 다룹니다.',
          ]
        : [
            'Cloud services and synced data cannot be fully understood by examining a single device alone. We study cloud platform structures and the acquisition procedures that are actually feasible in the field.',
            'Our work covers the structural limitations and investigative lessons of cloud databases such as Azure SQL Database, and the limitations of and responses to digital forensic investigation in PaaS-based DB environments.',
          ],
    },
    {
      key: 'verify',
      label: isKo ? '증거 검증' : 'Evidence Verification',
      heading: isKo
        ? '분석 결과를 믿을 수 있다는 것을 어떻게 증명하는가'
        : 'How do we prove that analysis results can be trusted?',
      body: isKo
        ? [
            '분석 도구와 절차 자체의 신뢰성을 검증하고, 분석을 방해하거나 흔적을 지우려는 안티포렌식 시도를 탐지하는 방법을 연구합니다.',
            '산업제어시스템(ICS) 엔지니어링 워크스테이션의 프로젝트 파일 조작 탐지, Tor 기반 은닉 서비스의 취약점 분류와 비식별화 프레임워크, 안티포렌식 관점에서의 원격 데스크톱 환경 역추적 연구가 여기에 속합니다.',
          ]
        : [
            'We verify the reliability of analysis tools and procedures themselves, and study how to detect anti-forensic attempts that interfere with analysis or erase traces.',
            'This includes detecting project file manipulation on industrial control system (ICS) engineering workstations, a vulnerability taxonomy for Tor-based hidden services, and tracing traces back through remote desktop environments from an anti-forensics perspective.',
          ],
    },
  ];
}
