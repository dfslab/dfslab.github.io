// 연구분야 페이지: 홈 카드 4개를 확장한 상세 설명.
// 국문 문구는 소장 검토를 거쳐 실장이 확정한 문장(2026-09-27 반영, 그대로 사용).
// 영문(en) 문장은 이 국문에 맞춰 팀장이 다시 옮긴 초안이며 소장 검토 대상(draft).
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
            '운영체제와 파일시스템, 저장매체, 메모리, 데이터베이스에서 삭제되거나 손상된 데이터가 어떤 흔적을 남기는지 찾고, 그 흔적으로 원래 데이터를 복원하는 기술을 연구합니다.',
            '파일시스템 메타데이터와 미할당 영역 분석, 저장매체(HDD, SSD, NVMe)의 특성에 따른 복구 가능성, 로그와 저널을 이용한 이력 재구성, 데이터베이스 레코드 복구까지 시스템 전반의 삭제 흔적을 다룹니다.',
          ]
        : [
            'We study how deleted or damaged data leaves traces in operating systems, file systems, storage media, memory, and databases, and how those traces can be used to restore the original data.',
            'This covers the full range of deletion traces across a system: file system metadata and unallocated-space analysis, recoverability differences across storage media (HDD, SSD, NVMe), reconstructing history from logs and journals, and recovering database records.',
          ],
    },
    {
      key: 'apps',
      label: isKo ? '애플리케이션·시스템' : 'Applications & Systems',
      heading: isKo
        ? '새로운 앱과 시스템은 어떤 흔적을 남기는가'
        : 'What traces do new apps and systems leave behind?',
      body: isKo
        ? [
            '애플리케이션과 운영체제, 네트워크 서비스가 사용자 기기와 서버, 로그 등 시스템 곳곳에 남기는 아티팩트를 분석합니다.',
            '모바일과 PC 운영체제의 사용 흔적, 메신저와 브라우저 기록, 원격 접속과 협업 도구, 생성형 AI 서비스처럼 새로 등장하는 소프트웨어가 어디에 어떤 형식으로 데이터를 남기는지 밝히고, 이를 수사에 활용하는 분석 방법을 만듭니다.',
          ]
        : [
            'We analyze the artifacts that applications, operating systems, and network services leave across a system, including user devices, servers, and logs.',
            'We identify where and in what form usage traces on mobile and PC operating systems, messenger and browser records, remote access and collaboration tools, and newly emerging software such as generative AI services store data, and develop analysis methods that put these findings to use in investigations.',
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
            '클라우드 서비스와 동기화 데이터는 기기 하나만 조사해서는 전체 그림을 볼 수 없습니다. 클라우드 플랫폼의 구조를 이해하고, 수사 현장에서 실제로 디지털 증거를 확보할 수 있는 절차를 연구합니다.',
            'IaaS, PaaS, SaaS 형태의 클라우드 서비스와 클라우드 스토리지, 협업 플랫폼, 클라우드 데이터베이스에서 로그와 메타데이터, 사용자 데이터를 수집하고 분석하는 방법, 그리고 관할과 접근 권한 같은 수사 실무의 한계와 대응 방안을 다룹니다.',
          ]
        : [
            'Cloud services and synced data cannot be fully understood by examining a single device alone. We study cloud platform structures and the procedures that make it possible to actually acquire digital evidence in the field.',
            'This covers methods for collecting and analyzing logs, metadata, and user data from IaaS, PaaS, and SaaS cloud services, cloud storage, collaboration platforms, and cloud databases, as well as the practical limitations of investigations, such as jurisdiction and access rights, and how to address them.',
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
            '분석 도구 결과의 정확성 검증, 해시와 이미징 절차를 통한 디지털 증거의 무결성 보장, 수집부터 분석까지의 절차 표준화, 그리고 데이터 은닉·삭제·위변조 같은 안티포렌식 기법의 탐지를 다룹니다.',
          ]
        : [
            'We verify the reliability of analysis tools and procedures themselves, and study how to detect anti-forensic attempts that interfere with analysis or erase traces.',
            'This covers verifying the accuracy of analysis tool results, ensuring the integrity of digital evidence through hashing and imaging procedures, standardizing procedures from collection through analysis, and detecting anti-forensic techniques such as data hiding, deletion, and tampering.',
          ],
    },
    {
      // 2026-09-27 소장 지적으로 추가: 해킹·악성코드 분석이 빠져 있던 영역. 홈 카드에는 넣지 않고
      // 이 페이지에만 다섯 번째 분야로 추가. 영문은 팀장 초안(draft).
      key: 'incident',
      label: isKo ? '침해사고 대응' : 'Incident Response',
      heading: isKo
        ? '공격자는 어떻게 들어와 무엇을 남겼는가'
        : 'How did the attacker get in, and what did they leave behind?',
      body: isKo
        ? [
            '해킹과 악성코드 감염 같은 침해사고에서 공격 경로와 피해 범위를 밝히는 사고 대응 포렌식을 연구합니다.',
            '악성코드의 동작과 지속 방법 분석, 시스템과 네트워크 로그를 이용한 공격 타임라인 재구성, 침해 지표(IoC) 추출, 랜섬웨어 피해 시스템의 조사와 복구를 다룹니다.',
          ]
        : [
            'We study incident response forensics, which uncovers the attack path and scope of damage in security incidents such as hacking and malware infections.',
            'This covers analyzing malware behavior and persistence mechanisms, reconstructing attack timelines from system and network logs, extracting indicators of compromise (IoCs), and investigating and recovering systems affected by ransomware.',
          ],
    },
  ];
}
