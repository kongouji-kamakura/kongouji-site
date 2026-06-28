// 年忌（年回法要）の一覧。offset = 没年に足す年数（没年 + offset = その年忌をお勤めする年）。
// 浄土真宗本願寺派の数え方：一周忌は満1年、三回忌以降は「回忌数−1年後」。
// 受付フォーム（Googleフォーム）の年忌リストと一致させること。変更時は両方を見直す。

export type Nenki = { label: string; offset: number };

export const nenkiList: Nenki[] = [
  { label: '一周忌', offset: 1 },
  { label: '三回忌', offset: 2 },
  { label: '七回忌', offset: 6 },
  { label: '十三回忌', offset: 12 },
  { label: '十七回忌', offset: 16 },
  { label: '二十三回忌', offset: 22 },
  { label: '二十七回忌', offset: 26 },
  { label: '三十三回忌', offset: 32 },
  { label: '五十回忌', offset: 49 },
];
