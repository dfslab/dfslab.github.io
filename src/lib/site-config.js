// 사이트 전역 설정. 여기서 값만 바꾸면 사이트 전체에 반영됩니다.
export const siteConfig = {
  // 연구원 모집 중 여부. 켜면 메뉴의 "모집중" 표시, 홈 화면 포스터 팝업, 모집 페이지의 포스터와 본문이 나온다.
  // 끄면 메뉴를 눌렀을 때 안내 창만 뜨고 모집 페이지로 넘어가지 않는다.
  recruiting: true,
  // 이번 모집 포스터. 학기가 바뀌면 그림 파일과 이 두 값만 바꾼다.
  recruitPoster: '/images/recruit/poster-2026-2.png',
  recruitTitle: { ko: '2026학년도 2학기 연구원 정기 모집', en: 'Fall 2026 Call for Researchers' },
  recruitClosed: { ko: '현재 연구원을 모집하고 있지 않습니다.', en: 'We are not recruiting researchers at this time.' },
};
