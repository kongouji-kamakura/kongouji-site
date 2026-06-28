// 寺院の確定情報を集約する単一ソース。
// 文言・連絡先・アクセス情報を変更する際は、まずこのファイルを更新する。
// siteUrl は設定済み（GitHub Pages 公開URL）。mapUrl は正式なGoogleマップ共有リンクに差し替え予定（下記 TODO[link]）。

export const site = {
  sect: '浄土真宗本願寺派',
  mountainName: '大船山',
  name: '金剛寺',
  fullName: '浄土真宗本願寺派 大船山 金剛寺',
  description:
    '神奈川県鎌倉市玉縄の浄土真宗本願寺派寺院 大船山 金剛寺の公式サイト。毎月第二土曜日 13時半より法話会を行っております。',
  postal: '247-0071',
  address: '神奈川県鎌倉市玉縄2-11-3',
  phone: '0467-45-3284',
  phoneTel: '+81467453284',
  fax: '0467-45-7613',

  // 法要受付フォーム（Googleフォーム）・LINE公式アカウント友だち追加
  formUrl:
    'https://docs.google.com/forms/d/1bZx-SgHJ2lV392MJyYdDc5woMcfTau1yQQutSg4XcIY/viewform',
  lineUrl: 'https://lin.ee/xPpDogL',

  access: {
    walkFromOfuna: '大船駅より徒歩約16分',
    busFromOfuna:
      '大船駅西口3番のりばより、船35系統「清泉女学院行き」にて「栄光学園前」下車（約5分）',
    // バスの乗り口（大船駅西口）・降り口（栄光学園前）のGoogleマップ位置（利用者確認済みの共有リンク）
    busBoardingMapUrl: 'https://maps.app.goo.gl/g5h4PjyoWYUcwChV9',
    busAlightingMapUrl: 'https://maps.app.goo.gl/E28MePiyoJLjEU6e6',
    parking:
      '駐車場は3台ほどございます。複数台でお越しの場合や、それ以上のお車でお越しになる場合は、事前に金剛寺までご相談ください。',
  },

  houwakai: {
    schedule: '毎月第二土曜日 13時半より',
    note: 'はじめての方もどうぞお参りください。',
  },

  // TODO[link]: 正式なGoogleマップURL（共有リンク）に差し替え
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E9%8E%8C%E5%80%89%E5%B8%82%E7%8E%89%E7%B8%842-11-3',

  // 公開URL（canonical / OGP 用）
  siteUrl: 'https://kongouji-kamakura.github.io/kongouji-site/',

  // 合葬墓に関する情報（パンフレット由来の確定情報のみ）
  gassobo: {
    name: '金剛寺 合葬墓',
    aka: '永代合葬墓',
    location: {
      facility: '湘南公園墓地・茅ヶ崎霊園内',
      postal: '253-0081',
      address: '神奈川県茅ヶ崎市下寺尾542番地',
    },
    konshi: {
      eternal: 'ご一体 30万円',
      yearly: '一切不要',
    },
    temporaryStorage: {
      yearly: '年3万円のご懇志',
    },
    // この文言は勝手に言い換えないこと（パンフレット原文のまま使用）
    shinpitsu: '南無阿弥陀仏は親鸞聖人の自筆文字です。',

    // 湘南公園墓地・茅ヶ崎霊園公式情報をもとにしたアクセス案内
    access: {
      train: [
        { line: 'JR相模線', station: '香川駅', walk: '徒歩約15分' },
        { line: 'JR相模線', station: '寒川駅', walk: '徒歩約18分' },
      ],
      bus: [
        'JR香川駅より、えぼし号「北部循環 市立病院線」にご乗車いただき、「西方」または「北陵高校入口」バス停で下車、徒歩約2分です。',
        'JR茅ヶ崎駅北口2番のりば（みずほ銀行前）より、神奈中バス「茅19」または「茅82」にご乗車いただき、「西方」または「北陵高校入口」バス停で下車、徒歩約2分です。',
      ],
      car: 'お車でお越しの方は、Googleマップ、または湘南公園墓地・茅ヶ崎霊園公式サイトのアクセス情報をご確認ください。',
      // 送迎車：時刻表や運休日は変動するため、必ず公式サイトへ誘導する
      shuttle: {
        intro:
          '湘南公園墓地・茅ヶ崎霊園では、完全予約制の送迎車が運行されています。ご利用には前日までのご予約が必要です。乗車地・時刻表・運休日などの最新情報は、湘南公園墓地・茅ヶ崎霊園公式サイトの送迎車案内をご確認ください。',
        url: 'https://shonan-club.com/chigasakireien/access/sogei/',
      },
      // TODO[link]: 湘南公園墓地・茅ヶ崎霊園のGoogleマップ正式URLに差し替え
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%8C%85%E3%83%B6%E5%B4%8E%E5%B8%82%E4%B8%8B%E5%AF%BA%E5%B0%BE542',
    },
  },

  // お骨預かり（合葬墓ページからも関連カードとして参照）
  okotsuAzukari: {
    yearly: '年3万円のご懇志',
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: '金剛寺について', href: '/about/' },
  { label: '金剛寺の歩み', href: '/history/' },
  { label: '法話会', href: '/houwakai/' },
  { label: '年間行事', href: '/events/' },
  { label: 'ご法事・ご葬儀', href: '/houji-sogi/' },
  { label: '合葬墓', href: '/gassobo/' },
  { label: 'アクセス・駐車場', href: '/access/' },
  { label: 'お問い合わせ', href: '/contact/' },
];
