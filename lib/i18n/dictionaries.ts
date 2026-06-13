import type { Locale } from "./config";

const en = {
  meta: {
    title: "Common Room Language Studio",
    description:
      "A warm, welcoming English language studio in Tokyo. Small classes, real conversation, and a community that feels like home.",
  },
  nav: {
    home: "Home",
    about: "About",
    courses: "Courses",
    community: "Community",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Book a Trial",
  },
  home: {
    hero: {
      eyebrow: "Tokyo · English Language Studio",
      title: "Learn English in a space that feels like home",
      subtitle:
        "Common Room Language Studio is a cozy classroom in the heart of Tokyo — where conversation flows naturally, classes stay small, and every student is part of the family.",
      ctaPrimary: "Explore Courses",
      ctaSecondary: "Visit Us",
    },
    features: {
      title: "Why Common Room",
      items: [
        {
          title: "Small Classes",
          description:
            "Maximum 6 students per class. Everyone gets to speak, every session.",
        },
        {
          title: "Real Conversation",
          description:
            "Practical English for daily life, work, and travel — not textbook drills.",
        },
        {
          title: "Warm Community",
          description:
            "Monthly events, conversation clubs, and a welcoming space to practice freely.",
        },
      ],
    },
    courses: {
      title: "Popular Courses",
      subtitle: "Find the right fit for your goals and schedule.",
      items: [
        {
          title: "Conversation Club",
          description: "Relaxed group sessions focused on fluency and confidence.",
        },
        {
          title: "Business English",
          description: "Meetings, emails, and presentations for professionals.",
        },
        {
          title: "Private Lessons",
          description: "One-on-one coaching tailored to your pace and goals.",
        },
      ],
      link: "View all courses",
    },
    location: {
      title: "In the Heart of Tokyo",
      description:
        "Steps from the station, surrounded by cafés and bookshops. A quiet common room where learning feels effortless.",
      address: "Shibuya, Tokyo, Japan",
    },
    cta: {
      title: "Ready to start speaking?",
      description: "Book a free trial lesson and experience the Common Room difference.",
      button: "Get in Touch",
    },
  },
  about: {
    title: "About Us",
    subtitle: "A language studio built on warmth, curiosity, and real connection.",
    story: {
      title: "Our Story",
      paragraphs: [
        "Common Room Language Studio began with a simple idea: learning English should feel welcoming, not intimidating. Founded in Tokyo, we created a space that blends Japanese simplicity with an international spirit.",
        "Our name reflects what we believe — a common room is where people gather, share stories, and grow together. That is exactly what happens here, every day.",
      ],
    },
    values: {
      title: "What We Believe",
      items: [
        {
          title: "Everyone Can Speak",
          description:
            "Mistakes are part of learning. We create a safe space where confidence grows naturally.",
        },
        {
          title: "Culture Matters",
          description:
            "Language lives in culture. We explore customs, humor, and context alongside grammar.",
        },
        {
          title: "Community First",
          description:
            "Students become friends. Our studio is a place you want to return to, week after week.",
        },
      ],
    },
    team: {
      title: "Our Teachers",
      description:
        "Experienced, patient, and passionate — our instructors come from diverse backgrounds and share one goal: helping you communicate with ease.",
    },
  },
  courses: {
    title: "Courses",
    subtitle: "Flexible programs for every level, from first words to fluent conversation.",
    levels: {
      title: "Levels",
      items: ["Beginner", "Elementary", "Intermediate", "Advanced"],
    },
    items: [
      {
        title: "Conversation Club",
        level: "All Levels",
        duration: "90 min / session",
        description:
          "Small-group sessions built around real topics — travel, food, culture, current events. Speak more, worry less.",
        features: ["Max 6 students", "Weekly sessions", "Free coffee & tea"],
      },
      {
        title: "Business English",
        level: "Intermediate – Advanced",
        duration: "60 min / session",
        description:
          "Professional communication for meetings, negotiations, presentations, and cross-cultural workplace dynamics.",
        features: ["Role-play practice", "Email & report writing", "Interview prep"],
      },
      {
        title: "Private Lessons",
        level: "All Levels",
        duration: "50 min / session",
        description:
          "Fully customized one-on-one coaching. Ideal for exam prep, rapid progress, or specific professional needs.",
        features: ["Flexible schedule", "Personal curriculum", "Progress tracking"],
      },
      {
        title: "Weekend Intensive",
        level: "Elementary – Advanced",
        duration: "3 hours / session",
        description:
          "Deep-dive weekend workshops on pronunciation, storytelling, debate, or presentation skills.",
        features: ["Monthly workshops", "Small groups", "Take-home materials"],
      },
    ],
    cta: {
      title: "Not sure which course fits?",
      description: "We offer a free 30-minute consultation to help you choose.",
      button: "Book a Consultation",
    },
  },
  community: {
    title: "Community",
    subtitle: "More than a classroom — a place to belong.",
    intro:
      "At Common Room, learning continues beyond the lesson. Join events, make friends, and practice English in a relaxed, welcoming atmosphere.",
    events: {
      title: "Regular Events",
      items: [
        {
          title: "Friday Conversation Night",
          description:
            "Open to all levels. Guided topics, free discussion, and refreshments.",
        },
        {
          title: "Culture Exchange",
          description:
            "Share stories from Japan and abroad. Practice English while learning about the world.",
        },
        {
          title: "Book & Film Club",
          description:
            "Monthly selections with group discussions. Great for building vocabulary naturally.",
        },
      ],
    },
    testimonials: {
      title: "Student Voices",
      items: [
        {
          quote:
            "I was nervous about speaking English, but the teachers here made me feel comfortable from day one.",
          author: "Yuki M.",
        },
        {
          quote:
            "The small class size makes a huge difference. I actually get to talk every lesson.",
          author: "Kenji S.",
        },
        {
          quote:
            "It feels like a second home. I've made friends from five different countries.",
          author: "Mei L.",
        },
      ],
    },
  },
  gallery: {
    title: "Gallery",
    subtitle: "A glimpse into life at Common Room — classes, events, and everyday moments.",
    images: [
      { alt: "Students in a conversation class" },
      { alt: "Cozy classroom interior" },
      { alt: "Group discussion session" },
      { alt: "Teacher leading a lesson" },
      { alt: "Community event gathering" },
      { alt: "Students practicing together" },
      { alt: "Reading corner in the studio" },
      { alt: "Friday conversation night" },
      { alt: "Small group lesson" },
      { alt: "Welcome area of the studio" },
      { alt: "Students sharing coffee break" },
      { alt: "Workshop in progress" },
      { alt: "Celebration at the studio" },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "We would love to hear from you. Visit, call, or send a message.",
    info: {
      address: {
        label: "Address",
        value: "2-15-1 Shibuya, Shibuya City, Tokyo 150-0002, Japan",
      },
      email: {
        label: "Email",
        value: "hello@commonroom.studio",
      },
      phone: {
        label: "Phone",
        value: "+81 3-1234-5678",
      },
      hours: {
        label: "Hours",
        value: "Mon – Fri: 10:00 – 21:00 · Sat: 10:00 – 18:00 · Sun: Closed",
      },
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      note: "We typically respond within one business day.",
    },
    access: {
      title: "Getting Here",
      description:
        "5-minute walk from Shibuya Station. Look for the wooden sign above the entrance on the second floor.",
    },
  },
  footer: {
    tagline: "A warm English studio in Tokyo.",
    rights: "All rights reserved.",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
} ;

const zh = {
  meta: {
    title: "Common Room Language Studio",
    description:
      "东京一家温暖友好的英语教室。小班教学、真实对话、像家一样的学习社区。",
  },
  nav: {
    home: "首页",
    about: "关于我们",
    courses: "课程",
    community: "社区",
    gallery: "相册",
    contact: "联系",
    cta: "预约试听",
  },
  home: {
    hero: {
      eyebrow: "东京 · 英语语言工作室",
      title: "在像家一样的空间里学英语",
      subtitle:
        "Common Room Language Studio 是东京市中心一间温馨的教室——对话自然流淌，班级小而精，每位学员都是大家庭的一员。",
      ctaPrimary: "浏览课程",
      ctaSecondary: "来访参观",
    },
    features: {
      title: "为什么选择 Common Room",
      items: [
        {
          title: "小班教学",
          description: "每班最多 6 人，每节课都有充足的开口机会。",
        },
        {
          title: "真实对话",
          description: "实用英语，涵盖日常生活、工作与旅行，而非死记硬背。",
        },
        {
          title: "温暖社区",
          description: "每月活动、口语俱乐部，欢迎随时来练习。",
        },
      ],
    },
    courses: {
      title: "热门课程",
      subtitle: "根据您的目标与时间安排，找到最适合的课程。",
      items: [
        {
          title: "口语俱乐部",
          description: "轻松的小组课程，专注流利度与自信心。",
        },
        {
          title: "商务英语",
          description: "会议、邮件与演讲，助力职场沟通。",
        },
        {
          title: "一对一私教",
          description: "根据个人节奏与目标量身定制的辅导。",
        },
      ],
      link: "查看全部课程",
    },
    location: {
      title: "东京市中心",
      description:
        "距车站步行几分钟，周围咖啡馆与书店环绕。一间安静的公共客厅，让学习变得轻松自然。",
      address: "日本东京涩谷区",
    },
    cta: {
      title: "准备好开口说英语了吗？",
      description: "预约免费试听课，亲身体验 Common Room 的不同。",
      button: "联系我们",
    },
  },
  about: {
    title: "关于我们",
    subtitle: "一座以温暖、好奇心与真实连接为基石的语言工作室。",
    story: {
      title: "我们的故事",
      paragraphs: [
        "Common Room Language Studio 源于一个简单的想法：学英语应该是温暖亲切的，而非令人畏惧的。我们在东京创立了这个空间，将日式简约与国际视野融为一体。",
        "我们的名字体现了我们的信念——公共客厅是人们相聚、分享故事、共同成长的地方。这里每天都在发生这样的事。",
      ],
    },
    values: {
      title: "我们的信念",
      items: [
        {
          title: "人人都能开口",
          description: "犯错是学习的一部分。我们营造安全的空间，让自信自然生长。",
        },
        {
          title: "文化很重要",
          description: "语言活在文化里。我们在语法之外，也探索习俗、幽默与语境。",
        },
        {
          title: "社区优先",
          description: "学员成为朋友。我们的工作室是您每周都想回来的地方。",
        },
      ],
    },
    team: {
      title: "师资团队",
      description:
        "经验丰富、耐心热情——我们的教师来自多元背景，共同目标是帮助您轻松沟通。",
    },
  },
  courses: {
    title: "课程",
    subtitle: "灵活的课程体系，从入门到流利对话，各阶段均可选择。",
    levels: {
      title: "级别",
      items: ["入门", "初级", "中级", "高级"],
    },
    items: [
      {
        title: "口语俱乐部",
        level: "全级别",
        duration: "每次 90 分钟",
        description:
          "围绕真实话题的小组课程——旅行、美食、文化、时事。多说少顾虑。",
        features: ["最多 6 人", "每周开课", "免费咖啡与茶"],
      },
      {
        title: "商务英语",
        level: "中级 – 高级",
        duration: "每次 60 分钟",
        description:
          "职场专业沟通：会议、谈判、演讲与跨文化职场互动。",
        features: ["角色扮演", "邮件与报告写作", "面试辅导"],
      },
      {
        title: "一对一私教",
        level: "全级别",
        duration: "每次 50 分钟",
        description:
          "完全定制的一对一辅导。适合考试备考、快速提升或特定职业需求。",
        features: ["灵活排课", "个人课程计划", "进度跟踪"],
      },
      {
        title: "周末强化班",
        level: "初级 – 高级",
        duration: "每次 3 小时",
        description:
          "周末深度工作坊：发音、讲故事、辩论或演讲技巧。",
        features: ["每月举办", "小班制", "课后资料"],
      },
    ],
    cta: {
      title: "不确定选哪门课？",
      description: "我们提供免费 30 分钟咨询，帮您找到合适的课程。",
      button: "预约咨询",
    },
  },
  community: {
    title: "社区",
    subtitle: "不只是教室——更是一个归属之地。",
    intro:
      "在 Common Room，学习延伸到课堂之外。参加活动、结交朋友，在轻松友好的氛围中练习英语。",
    events: {
      title: "常规活动",
      items: [
        {
          title: "周五口语之夜",
          description: "面向所有级别。引导话题、自由讨论，还有茶点。",
        },
        {
          title: "文化交流",
          description: "分享来自日本与世界各地的故事，在学英语的同时了解世界。",
        },
        {
          title: "读书与电影俱乐部",
          description: "每月精选作品与小组讨论，自然积累词汇。",
        },
      ],
    },
    testimonials: {
      title: "学员心声",
      items: [
        {
          quote: "我以前很怕说英语，但这里的老师从第一天起就让我感到放松。",
          author: "Yuki M.",
        },
        {
          quote: "小班人数差别很大，每节课我都能真正开口说话。",
          author: "Kenji S.",
        },
        {
          quote: "这里像第二个家，我结识了来自五个国家的朋友。",
          author: "Mei L.",
        },
      ],
    },
  },
  gallery: {
    title: "相册",
    subtitle: "一窥 Common Room 的日常——课堂、活动与温馨瞬间。",
    images: [
      { alt: "口语课堂中的学员" },
      { alt: "温馨的教室内部" },
      { alt: "小组讨论课" },
      { alt: "教师授课" },
      { alt: "社区活动聚会" },
      { alt: "学员一起练习" },
      { alt: "工作室阅读角" },
      { alt: "周五口语之夜" },
      { alt: "小班课程" },
      { alt: "工作室迎宾区" },
      { alt: "学员咖啡休息时间" },
      { alt: "工作坊进行中" },
      { alt: "工作室庆祝活动" },
    ],
  },
  contact: {
    title: "联系",
    subtitle: "期待您的来信。欢迎来访、致电或留言。",
    info: {
      address: {
        label: "地址",
        value: "日本东京都涩谷区涩谷 2-15-1，邮编 150-0002",
      },
      email: {
        label: "邮箱",
        value: "hello@commonroom.studio",
      },
      phone: {
        label: "电话",
        value: "+81 3-1234-5678",
      },
      hours: {
        label: "营业时间",
        value: "周一至周五 10:00 – 21:00 · 周六 10:00 – 18:00 · 周日休息",
      },
    },
    form: {
      name: "姓名",
      email: "邮箱",
      message: "留言",
      submit: "发送",
      note: "我们通常在一个工作日内回复。",
    },
    access: {
      title: "交通指引",
      description:
        "从涩谷站步行约 5 分钟。二楼入口上方有木质招牌。",
    },
  },
  footer: {
    tagline: "东京一间温暖的英语工作室。",
    rights: "版权所有。",
    links: {
      privacy: "隐私政策",
      terms: "使用条款",
    },
  },
} ;

const ja = {
  meta: {
    title: "Common Room Language Studio",
    description:
      "東京にある温かく居心地の良い英会話スタジオ。少人数制、リアルな会話、家族のようなコミュニティ。",
  },
  nav: {
    home: "ホーム",
    about: "私たちについて",
    courses: "コース",
    community: "コミュニティ",
    gallery: "ギャラリー",
    contact: "お問い合わせ",
    cta: "体験レッスン",
  },
  home: {
    hero: {
      eyebrow: "東京 · 英語スタジオ",
      title: "まるで自宅のような空間で英語を学ぶ",
      subtitle:
        "Common Room Language Studio は東京の中心にある居心地の良い教室です。自然な会話、少人数クラス、そして家族のような温かいコミュニティを大切にしています。",
      ctaPrimary: "コースを見る",
      ctaSecondary: "見学する",
    },
    features: {
      title: "Common Room が選ばれる理由",
      items: [
        {
          title: "少人数制",
          description: "1クラス最大6名。毎回しっかり話せる環境です。",
        },
        {
          title: "リアルな会話",
          description: "日常生活、仕事、旅行に役立つ実践的な英語を学びます。",
        },
        {
          title: "温かいコミュニティ",
          description: "月例イベントや会話クラブで、気軽に練習できます。",
        },
      ],
    },
    courses: {
      title: "人気コース",
      subtitle: "目標とスケジュールに合ったコースをお選びください。",
      items: [
        {
          title: "会話クラブ",
          description: "リラックスしたグループレッスンで流暢さと自信を育てます。",
        },
        {
          title: "ビジネス英語",
          description: "会議、メール、プレゼンテーションに対応。",
        },
        {
          title: "プライベートレッスン",
          description: "一人ひとりのペースと目標に合わせた個別指導。",
        },
      ],
      link: "すべてのコースを見る",
    },
    location: {
      title: "東京の中心に",
      description:
        "駅から徒歩数分、カフェや書店に囲まれた場所。静かなコモンルームで、自然に学べます。",
      address: "東京都渋谷区",
    },
    cta: {
      title: "話し始める準備はできましたか？",
      description: "無料体験レッスンで Common Room の雰囲気を感じてください。",
      button: "お問い合わせ",
    },
  },
  about: {
    title: "私たちについて",
    subtitle: "温かさ、好奇心、そして本物のつながりを大切にする言語スタジオ。",
    story: {
      title: "私たちのストーリー",
      paragraphs: [
        "Common Room Language Studio は、英語学習が怖いものではなく、温かく迎え入れられるものであるべきだという想いから生まれました。東京で、日本のシンプルさと国際的な精神を融合した空間を作りました。",
        "名前には、人が集まり、物語を分かち合い、一緒に成長する場所——それがコモンルームであるという信念が込められています。",
      ],
    },
    values: {
      title: "大切にしていること",
      items: [
        {
          title: "誰もが話せる",
          description: "間違いは学びの一部。安心して話せる空間を作ります。",
        },
        {
          title: "文化を大切に",
          description: "言語は文化の中にあります。文法とともに、習慣やユーモアも学びます。",
        },
        {
          title: "コミュニティ第一",
          description: "生徒同士が友達に。毎週戻ってきたくなる場所を目指しています。",
        },
      ],
    },
    team: {
      title: "講師陣",
      description:
        "経験豊富で忍耐強く、情熱的な講師たち。多様なバックグラウンドを持ち、あなたのコミュニケーションをサポートします。",
    },
  },
  courses: {
    title: "コース",
    subtitle: "初級から上級まで、あらゆるレベルに対応した柔軟なプログラム。",
    levels: {
      title: "レベル",
      items: ["初級", "基礎", "中級", "上級"],
    },
    items: [
      {
        title: "会話クラブ",
        level: "全レベル",
        duration: "1回 90分",
        description:
          "旅行、食、文化、時事などリアルなテーマで少人数グループレッスン。たくさん話しましょう。",
        features: ["最大6名", "週1回開催", "コーヒー・お茶付き"],
      },
      {
        title: "ビジネス英語",
        level: "中級 – 上級",
        duration: "1回 60分",
        description:
          "会議、交渉、プレゼン、異文化間の職場コミュニケーションを学びます。",
        features: ["ロールプレイ", "メール・レポート作成", "面接対策"],
      },
      {
        title: "プライベートレッスン",
        level: "全レベル",
        duration: "1回 50分",
        description:
          "完全オーダーメイドの個別指導。試験対策、短期集中、専門的なニーズに最適。",
        features: ["柔軟なスケジュール", "個別カリキュラム", "進捗管理"],
      },
      {
        title: "週末集中講座",
        level: "基礎 – 上級",
        duration: "1回 3時間",
        description:
          "発音、ストーリーテリング、ディベート、プレゼンなど週末ワークショップ。",
        features: ["月1回開催", "少人数制", "持ち帰り教材あり"],
      },
    ],
    cta: {
      title: "どのコースが合うか迷っていますか？",
      description: "無料30分のカウンセリングでお手伝いします。",
      button: "カウンセリング予約",
    },
  },
  community: {
    title: "コミュニティ",
    subtitle: "教室以上のもの——ここに居場所を見つけてください。",
    intro:
      "Common Room では、レッスンの外でも学びが続きます。イベントに参加し、友達を作り、リラックスした雰囲気で英語を練習しましょう。",
    events: {
      title: "定期イベント",
      items: [
        {
          title: "金曜会話ナイト",
          description: "全レベル歓迎。テーマ付きディスカッションと軽食。",
        },
        {
          title: "カルチャーエクスチェンジ",
          description: "日本と世界の物語を共有。英語を学びながら世界を知る。",
        },
        {
          title: "ブック＆フィルムクラブ",
          description: "月例の選書・選映画とグループディスカッション。",
        },
      ],
    },
    testimonials: {
      title: "生徒の声",
      items: [
        {
          quote: "英語を話すのが怖かったけど、初日から先生が安心させてくれました。",
          author: "Yuki M.",
        },
        {
          quote: "少人数だから毎回しっかり話せる。本当に違います。",
          author: "Kenji S.",
        },
        {
          quote: "第二の我が家みたい。5つの国の友達ができました。",
          author: "Mei L.",
        },
      ],
    },
  },
  gallery: {
    title: "ギャラリー",
    subtitle: "Common Room の日常——レッスン、イベント、何気ない瞬間。",
    images: [
      { alt: "会話クラスの様子" },
      { alt: "居心地の良い教室の内装" },
      { alt: "グループディスカッション" },
      { alt: "講師によるレッスン" },
      { alt: "コミュニティイベント" },
      { alt: "一緒に練習する生徒たち" },
      { alt: "スタジオの読書コーナー" },
      { alt: "金曜会話ナイト" },
      { alt: "少人数レッスン" },
      { alt: "スタジオのエントランス" },
      { alt: "コーヒーブレイク" },
      { alt: "ワークショップの様子" },
      { alt: "スタジオでのお祝い" },
    ],
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "ご連絡をお待ちしています。ご来店、お電話、メッセージをどうぞ。",
    info: {
      address: {
        label: "住所",
        value: "〒150-0002 東京都渋谷区渋谷2-15-1",
      },
      email: {
        label: "メール",
        value: "hello@commonroom.studio",
      },
      phone: {
        label: "電話",
        value: "+81 3-1234-5678",
      },
      hours: {
        label: "営業時間",
        value: "月〜金 10:00 – 21:00 · 土 10:00 – 18:00 · 日 定休",
      },
    },
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      submit: "送信",
      note: "通常1営業日以内にご返信いたします。",
    },
    access: {
      title: "アクセス",
      description:
        "渋谷駅から徒歩5分。2階入口の上に木の看板があります。",
    },
  },
  footer: {
    tagline: "東京にある温かい英語スタジオ。",
    rights: "All rights reserved.",
    links: {
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
} ;

export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = { en, zh, ja };
