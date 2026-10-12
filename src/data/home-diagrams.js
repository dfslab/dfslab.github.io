// 홈 화면 연구 분야 카드 5개의 도식(2026-10-12 사진·로고에서 단색 선 도식으로 교체).
// 색은 ResearchCardGrid.astro의 .dg-* 클래스가 사이트 색상 변수로 입힌다. 그림 속 값은 예시다.
const open = '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">';
const T = (x, y, s, cls = 'dg-t', anchor = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${s}</text>`;

// 1. 데이터 복구: 클러스터 배치도, 지워진 구역만 강조
function recovery() {
  const cols = 12, rows = 6, c = 13, g = 3, x0 = 25, y0 = 34;
  const used = new Set([0,1,2,3,4,5,12,13,14,15,24,25,26,27,28,29,30,36,37,43,44,45,46,47,48,49,50,57,58,59,60,61,62,63,64,65,66]);
  const del = new Set([17,18,19,20,21,31,32,33]);
  let s = '';
  for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
    const i = r * cols + k, x = x0 + k * (c + g), y = y0 + r * (c + g);
    const cls = del.has(i) ? 'dg-acc' : used.has(i) ? 'dg-fill' : 'dg-cell';
    s += `<rect x="${x}" y="${y}" width="${c}" height="${c}" class="${cls}"/>`;
  }
  return open + T(25, 24, 'cluster map') + T(215, 24, '0x1A40', 'dg-t dg-ta', 'end') + s
    + T(25, 148, 'allocated') + `<rect x="80" y="141" width="8" height="8" class="dg-fill"/>`
    + T(215, 148, 'deleted · recoverable', 'dg-t dg-ta', 'end') + '</svg>';
}

// 2. 침해사고 포렌식: 공격 타임라인
function incident() {
  const ev = [[34, 'ACCESS', '02:14', -1, true], [77, 'EXEC', '02:16', 1], [120, 'PRIV', '02:31', -1], [163, 'LATERAL', '03:05', 1], [206, 'IMPACT', '04:40', -1]];
  let s = '<line x1="20" y1="85" x2="220" y2="85" class="dg-l"/>';
  for (let x = 20; x <= 220; x += 10) s += `<line x1="${x}" y1="82" x2="${x}" y2="88" class="dg-m"/>`;
  for (const [x, name, time, dir, acc] of ev) {
    const y2 = 85 + dir * 30;
    s += `<line x1="${x}" y1="85" x2="${x}" y2="${y2}" class="${acc ? 'dg-la' : 'dg-l'}"/>`;
    s += `<circle cx="${x}" cy="85" r="4.5" class="${acc ? 'dg-dota' : 'dg-dot'}"/>`;
    s += T(x, y2 + (dir < 0 ? -14 : 14), name, acc ? 'dg-t dg-ta dg-b' : 'dg-t dg-b', 'middle');
    s += T(x, y2 + (dir < 0 ? -4 : 24), time, 'dg-t dg-tm', 'middle');
  }
  return open + s + '</svg>';
}

// 3. 애플리케이션·시스템: 앱이 남기는 파일 구조
function apps() {
  const rows = [[0, 'com.app.messenger/'], [1, 'databases/'], [2, 'msg.db', true], [2, 'msg.db-wal', true], [1, 'shared_prefs/'], [2, 'account.xml'], [1, 'cache/'], [2, 'thumb_0412.jpg']];
  let s = '';
  const xs = [28, 46, 64];
  s += `<line x1="32" y1="36" x2="32" y2="135" class="dg-m"/>`;
  s += `<line x1="50" y1="54" x2="50" y2="81" class="dg-m"/><line x1="50" y1="108" x2="50" y2="117" class="dg-m"/><line x1="50" y1="144" x2="50" y2="153" class="dg-m"/>`;
  rows.forEach(([d, name, acc], i) => {
    const yy = 30 + i * 18, x = xs[d];
    if (d > 0) s += `<line x1="${xs[d - 1] + 4}" y1="${yy - 3}" x2="${x - 3}" y2="${yy - 3}" class="dg-m"/>`;
    if (acc) s += `<rect x="${x - 4}" y="${yy - 13}" width="${name.length * 6.4 + 10}" height="16" class="dg-acc"/>`;
    s += T(x + 1, yy, name, acc ? 'dg-t dg-ta dg-b' : (name.endsWith('/') ? 'dg-t dg-b' : 'dg-t dg-tm'));
  });
  return open + s + '</svg>';
}

// 4. 클라우드: 기기와 서버 사이 동기화 흐름
function cloud() {
  let s = '';
  s += `<rect x="30" y="52" width="44" height="66" rx="5" class="dg-box"/><line x1="44" y1="110" x2="60" y2="110" class="dg-l"/>`;
  s += T(52, 136, 'device', 'dg-t dg-b', 'middle');
  for (const y of [50, 74, 98]) s += `<rect x="162" y="${y}" width="52" height="20" rx="2" class="dg-box"/><circle cx="171" cy="${y + 10}" r="2" class="dg-fill"/><line x1="180" y1="${y + 10}" x2="204" y2="${y + 10}" class="dg-m"/>`;
  s += T(188, 136, 'cloud', 'dg-t dg-b', 'middle');
  s += `<line x1="118" y1="30" x2="118" y2="54" class="dg-dash"/><line x1="118" y1="78" x2="118" y2="92" class="dg-dash"/><line x1="118" y1="122" x2="118" y2="142" class="dg-dash"/>`;
  s += `<line x1="84" y1="72" x2="150" y2="72" class="dg-l"/><path d="M144 67 L151 72 L144 77" class="dg-l dg-nf"/>`;
  s += `<line x1="152" y1="98" x2="86" y2="98" class="dg-la"/><path d="M92 93 L85 98 L92 103" class="dg-la dg-nf"/>`;
  for (const x of [100, 112, 124, 136]) s += `<rect x="${x}" y="94.5" width="7" height="7" class="dg-dota"/>`;
  s += T(118, 64, 'sync', 'dg-t dg-tm', 'middle') + T(118, 116, 'acquire', 'dg-t dg-ta', 'middle');
  return open + s + '</svg>';
}

// 5. 증거 검증: 원본과 사본의 해시값 대조
function verify() {
  const h = ['9f2c 41a7 e0b3 5d18', '77c4 0a9e 3f61 b2d5'];
  let s = '';
  const block = (y, label) => {
    let b = `<rect x="24" y="${y}" width="192" height="50" rx="2" class="dg-box"/>` + T(34, y + 15, label, 'dg-t dg-b');
    b += T(206, y + 15, 'SHA-256', 'dg-t dg-tm', 'end');
    b += T(34, y + 30, h[0], 'dg-t') + T(34, y + 42, h[1], 'dg-t');
    return b;
  };
  s += block(18, 'source') + block(102, 'image');
  s += `<line x1="120" y1="68" x2="120" y2="75" class="dg-la"/><line x1="120" y1="95" x2="120" y2="102" class="dg-la"/>`;
  s += `<circle cx="120" cy="85" r="10" class="dg-ring"/><path d="M115 85 L119 89 L126 81" class="dg-la dg-nf"/>`;
  s += T(136, 88, 'match', 'dg-t dg-ta dg-b');
  return open + s + '</svg>';
}


export const HOME_DIAGRAMS = {
  recovery: recovery(),
  incident: incident(),
  apps: apps(),
  cloud: cloud(),
  verify: verify(),
};
