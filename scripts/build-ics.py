# -*- coding: utf-8 -*-
"""法話会の予定を、カレンダーに取り込める .ics として書き出す。

RFC 5545 の決まりのうち、つまずきやすい2点を守る：
  - 1行は73バイト以内に折り返し、続きの行は必ず半角空白で始める
  - 本文中の改行は、実際の改行ではなく「\\n」という2文字で書く
  - 行末は CRLF
"""

import io
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / 'public' / 'houwakai-2026-10.ics'
URL = 'https://kongouji-kamakura.github.io/kongouji-site/houwakai/2026-10/'
BR = chr(92) + 'n'   # ics の中での改行（バックスラッシュ + n）


def fold(line: str) -> str:
    """73バイトごとに折り返す。続きの行は半角空白で始める。"""
    if len(line.encode('utf-8')) <= 73:
        return line
    out, cur = [], b''
    for ch in line:
        e = ch.encode('utf-8')
        if len(cur) + len(e) > 73:
            out.append(cur.decode('utf-8'))
            cur = b' '
        cur += e
    out.append(cur.decode('utf-8'))
    return '\r\n'.join(out)


lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Kongouji//Houwakai 2026-10//JA',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:houwakai-2026-10-10@kongouji-kamakura.github.io',
    'DTSTAMP:20260921T000000Z',
    # 日本時間 13:30〜15:00 を、協定世界時（UTC）で書く
    'DTSTART:20261010T043000Z',
    'DTEND:20261010T060000Z',
    'SUMMARY:金剛寺 法話会（ご講師 成田真二郎 師）',
    'LOCATION:浄土真宗本願寺派 大船山 金剛寺 本堂（神奈川県鎌倉市玉縄2-11-3）',
    'DESCRIPTION:13時30分より（受付は13時頃から）。お申し込み・参加費は要りません。'
    + BR + 'くわしくは ' + URL,
    'URL:' + URL,
    'END:VEVENT',
    'END:VCALENDAR',
]

ics = '\r\n'.join(fold(line) for line in lines) + '\r\n'
io.open(OUT, 'w', encoding='utf-8', newline='').write(ics)
print(f'書き出し: {OUT}（{len(ics.encode("utf-8"))} バイト）')

# 検算：折り返しの続きが半角空白で始まっているか、本文に生の改行が混ざっていないか
for i, raw in enumerate(ics.split('\r\n')):
    if not raw:
        continue
    if ':' not in raw and not raw.startswith(' '):
        raise SystemExit(f'{i + 1}行目が壊れています: {raw!r}')
print('検算: 問題なし')
