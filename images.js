// 이미지 교체는 이 파일에서만 하면 됩니다.
// 각 따옴표 안에 외부 이미지 파일의 직접 HTTPS URL을 넣으세요.
// 예: assistant: 'https://your-domain.com/assistant.png'
// GIF / animated WebP / PNG / JPG 지원. 공유 페이지가 아닌 이미지 주소를 사용하세요.
// 빈 주소 또는 불러오기 실패 시 기존 회색 실루엣을 표시합니다.
window.GUIDE_IMAGES = {
  staff: {
    assistant: '', // [조교 프로필]
    instructor: '', // [교관 프로필 — 기존 열람 제한 유지]
    researcher: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/researcher.png' // [연구원 프로필]
  },
  candidates: {
    PINK: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/pink.png', // [핑크 프로필]
    GOLD: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/gold.png', // [골드 프로필]
    GREEN: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/green.png', // [그린 프로필]
    BLUE: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/blue.png', // [블루 프로필]
    BLACK: 'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/black.png' // [블랙 프로필]
  }
};
// 아래는 이미지 설정 적용 코드입니다.
(() => {
  const fallback='assets/profile-placeholder.svg';
  for(const [role, account] of Object.entries(window.GUIDE_ACCOUNTS)) {
    account.profileImage=window.GUIDE_IMAGES.staff[role]?.trim() || fallback;
  }
  window.GUIDE_CANDIDATES.forEach(candidate=>{
    candidate.image=window.GUIDE_IMAGES.candidates[candidate.key]?.trim() || fallback;
  });
})();
