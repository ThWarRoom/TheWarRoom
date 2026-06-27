/* ============================================================
   WAR ROOM — Shop Data
   Every item the shop renders. Costs use icon-tagged strings
   parsed by main.js into chips: 💰 gold, 🔩 iron, 🧵 cloth,
   🪵 wood, 🪨 stone, 💎 gem, 🌾 grain.
   ============================================================ */

const SHOP_DATA = {

  categories: [
    { id: "persia",   label: "سربازان پارس",        icon: "⚔",  group: "soldiers" },
    { id: "greece",   label: "سربازان یونان",        icon: "🏺", group: "soldiers" },
    { id: "nile",     label: "سربازان نیل",          icon: "🏜", group: "soldiers" },
    { id: "economy",  label: "ساختمان‌های اقتصادی",  icon: "🏗", group: "buildings" },
    { id: "outposts", label: "پاسگاه‌ها",            icon: "🏛", group: "buildings" },
    { id: "defense",  label: "ساختمان‌های دفاعی",    icon: "🧱", group: "buildings" },
    { id: "special",  label: "ساختمان‌های ویژه",      icon: "🚢", group: "buildings" },
    { id: "equipment",label: "تجهیزات ویژه",         icon: "🛡", group: "buildings" },
  ],

  items: [

    /* ===================== سربازان پارس ===================== */
    {
      cat: "persia", special: false, img: "persia-1", icon: "🗡️",
      name: "نیزه‌دار جاویدان",
      desc: "ستون استوار سپاه شاهنشاهی. با دیواری از نیزه‌های بلند خطی می‌سازد که به‌سختی شکسته می‌شود.",
      cost: "60💰 • 15🔩 • 10🧵 • 5🪵",
      yield: "15 سرباز",
      salary: "0.5💰 برای هر سرباز",
    },
    {
      cat: "persia", special: false, img: "persia-2", icon: "🏹",
      name: "کماندار پیاده",
      desc: "از فاصله امن دشمن را زیر باران تیر می‌گیرد؛ ستون پشتیبان هر آرایش پارسی.",
      cost: "50💰 • 10🔩 • 5🧵 • 10🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "persia", special: false, img: "persia-3", icon: "⚔",
      name: "شمشیرزن پارسی",
      desc: "جنگجوی نزدیک‌رزم با ضربات سریع؛ برای شکافتن خطوط فرومانده دشمن وارد میدان می‌شود.",
      cost: "40💰 • 10🔩 • 15🧵 • 5🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "persia", special: false, img: "persia-4", icon: "🐎",
      name: "کماندار سواره",
      desc: "ترکیب سرعت اسب و دقت کمان؛ ضربه می‌زند و پیش از پاسخ دشمن ناپدید می‌شود.",
      cost: "70💰 • 15🔩 • 15🧵 • 10🪵",
      yield: "15 سرباز",
      salary: "0.75💰",
    },
    {
      cat: "persia", special: false, img: "persia-5", icon: "🛡",
      name: "سواره‌نظام زره‌دار سنگین",
      desc: "زره سنگین و نیروی کوبنده؛ پیش‌قراول حمله به مستحکم‌ترین خطوط دشمن.",
      cost: "100💰 • 25🔩 • 20🧵 • 15🪵",
      yield: "15 سرباز",
      salary: "1💰",
    },
    {
      cat: "persia", special: false, img: "persia-6", icon: "🎯",
      name: "ارابه داس‌دار",
      desc: "ماشین جنگی وحشت‌آفرین؛ با چرخیدن میان صفوف پیاده دشمن، نظم آن‌ها را به هرج‌و‌مرج بدل می‌کند.",
      cost: "300💰 • 100🔩 • 30🧵 • 35🪵",
      yield: "15 سرباز",
      salary: "2💰",
    },
    {
      cat: "persia", special: true, img: "persia-7", icon: "🎖",
      name: "گارد جاویدان",
      desc: "نخبه‌ترین واحد شاهنشاهی و نگهبانان مستقیم شاه؛ نمادی از قدرت و وفاداری بی‌چون‌وچرا.",
      cost: "1💎",
      yield: "5 سرباز",
      salary: "4💰",
    },

    /* ===================== سربازان یونان ===================== */
    {
      cat: "greece", special: false, img: "greece-1", icon: "🛡",
      name: "هوپلیت",
      desc: "سپر و نیزه در آراستگی فالانکس؛ دیواری از فلز و انضباط که به‌سختی شکسته می‌شود.",
      cost: "60💰 • 15🔩 • 10🧵 • 5🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "greece", special: false, img: "greece-2", icon: "🏹",
      name: "پلتاست",
      desc: "سپاهی سبک‌اسلحه با نیزه کوتاه و سپر سبک؛ مناسب نبردهای نامنظم و تعقیب دشمن گریزان.",
      cost: "40💰 • 5🔩 • 15🧵 • 10🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "greece", special: false, img: "greece-3", icon: "🐎",
      name: "سواره‌نظام یونانی",
      desc: "چشم و دست تیز سپاه؛ شناسایی می‌کند، آزار می‌دهد و در لحظه درست ضربه می‌زند.",
      cost: "70💰 • 10🔩 • 10🧵 • 10🪵",
      yield: "15 سرباز",
      salary: "0.75💰",
    },
    {
      cat: "greece", special: false, img: "greece-4", icon: "💥",
      name: "منجنیق محاصره",
      desc: "سلاح سنگین محاصره؛ دیوارهای دشمن را از فاصله‌ای دور از تیررس کمان فرومی‌ریزد.",
      cost: "150💰 • 40🔩 • 20🧵 • 60🪵",
      yield: "15 سرباز",
      salary: "1.5💰",
    },
    {
      cat: "greece", special: false, img: "greece-5", icon: "🏹",
      name: "کماندار یونانی",
      desc: "پشتیبان آتش پشت خطوط فالانکس؛ دقیق، منظم و همیشه در فاصله امن.",
      cost: "50💰 • 5🔩 • 15🧵 • 15🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "greece", special: false, img: "greece-6", icon: "⚔",
      name: "شمشیرزن یونانی",
      desc: "رزمنده‌ای چابک برای نبرد تن‌به‌تن در شکاف‌های خطوط دشمن، جایی که فالانکس نمی‌رسد.",
      cost: "40💰 • 10🔩 • 10🧵 • 5🪵",
      yield: "15 سرباز",
      salary: "0.5💰",
    },
    {
      cat: "greece", special: true, img: "greece-7", icon: "🎖",
      name: "فالانژ مقدونی",
      desc: "آرایش نظامی افسانه‌ای با نیزه‌های بلند ساریسا؛ نمادی از تسلط مقدونیان بر میدان جنگ.",
      cost: "1💎",
      yield: "5 سرباز",
      salary: "4💰",
    },

    /* ===================== سربازان نیل ===================== */
    {
      cat: "nile", special: false, img: "nile-1", icon: "🗡",
      name: "شمشیرزن سبک صحرایی",
      desc: "جنگجوی چابک بیابان؛ سریع در حرکت و کارآمد در درگیری‌های کوتاه و ناگهانی.",
      cost: "40💰 • 5🔩 • 15🧵 • 5🪵",
      yield: "15 سرباز",
      salary: "0.25💰",
    },
    {
      cat: "nile", special: false, img: "nile-2", icon: "🏹",
      name: "کماندار بلندبرد",
      desc: "تیرانداز ماهر صحرا با بردی فراتر از معمول؛ گزینه‌ای ایده‌آل برای دفاع از فاصله دور.",
      cost: "50💰 • 5🔩 • 15🧵 • 20🪵",
      yield: "15 سرباز",
      salary: "0.25💰",
    },
    {
      cat: "nile", special: false, img: "nile-3", icon: "🐫",
      name: "سواره‌نظام شترسوار",
      desc: "نیروی پایدار در دل بیابان؛ مناسب پیمایش طولانی و ضربه از پهلو.",
      cost: "70💰 • 10🔩 • 20🧵 • 10🪵",
      yield: "15 سرباز",
      salary: "0.35💰",
    },
    {
      cat: "nile", special: false, img: "nile-4", icon: "🎯",
      name: "ارابه سبک فرعون",
      desc: "ارابه‌ای سریع و چابک، ساخته‌شده برای ضربات غافلگیرکننده در میان خطوط دشمن.",
      cost: "180💰 • 30🔩 • 15🧵 • 50🪵",
      yield: "15 سرباز",
      salary: "0.75💰",
    },
    {
      cat: "nile", special: true, img: "nile-5", icon: "🐘",
      name: "فیل جنگی",
      desc: "کوهی متحرک از قدرت که با یک حرکت صفوف دشمن را درهم می‌کوبد؛ نماد رعب سرزمین نیل.",
      cost: "1💎",
      yield: "5 سرباز",
      salary: "2💰",
    },

    /* ===================== ساختمان‌های اقتصادی ===================== */
    {
      cat: "economy", special: false, img: "economy-1", icon: "🌾",
      name: "مزرعه",
      desc: "تأمین‌کننده اصلی غذای شهر؛ بدون آن هیچ سپاهی پایدار نمی‌ماند.",
      cost: "40💰 • 10🔩 • 20🪵",
      production: { persia: "30🌾", greece: "15🌾", nile: "10🌾" },
    },
    {
      cat: "economy", special: false, img: "economy-2", icon: "🪵",
      name: "چوب‌بری",
      desc: "منبع چوب برای ساخت بناها، ارابه‌ها و استحکامات دفاعی.",
      cost: "50💰 • 10🔩 • 10🪨",
      production: { persia: "40🪵", greece: "15🪵", nile: "10🪵" },
    },
    {
      cat: "economy", special: false, img: "economy-3", icon: "🪨",
      name: "معدن سنگ",
      desc: "سنگی که دیوارها و برج‌های شهر را پایدار نگه می‌دارد.",
      cost: "80💰 • 20🔩 • 30🪵",
      production: { persia: "15🪨", greece: "20🪨", nile: "35🪨" },
    },
    {
      cat: "economy", special: false, img: "economy-4", icon: "🔩",
      name: "آهنگری",
      desc: "ذوب و تبدیل فلز خام به ابزار و تجهیزات جنگی.",
      cost: "100💰 • 30🪵 • 20🪨",
      production: { persia: "15🔩", greece: "25🔩", nile: "10🔩" },
    },
    {
      cat: "economy", special: false, img: "economy-5", icon: "🧵",
      name: "مزرعه پنبه",
      desc: "تأمین‌کننده پارچه برای تجهیز سپاه و ساخت ادوات نظامی.",
      cost: "60💰 • 15🔩 • 20🪵 • 5🪨",
      production: { persia: "20🧵", greece: "15🧵", nile: "30🧵" },
    },
    {
      cat: "economy", special: false, img: "economy-6", icon: "🏛",
      name: "بازار",
      desc: "قلب اقتصاد شهر؛ منابع را به طلا تبدیل می‌کند و خزانه را پر نگه می‌دارد.",
      cost: "100💰 • 30🔩 • 20🪵 • 15🪨",
      production: { persia: "35💰", greece: "25💰", nile: "15💰" },
    },

    /* ===================== پاسگاه‌ها ===================== */
    {
      cat: "outposts", special: false, img: "outposts-1", icon: "🏘",
      name: "پاسگاه محله‌ای سطح ۱",
      desc: "امنیت محله‌های شهر را تأمین می‌کند.",
      cost: "50🪵 • 30💰",
    },
    {
      cat: "outposts", special: false, img: "outposts-2", icon: "🪖",
      name: "پاسگاه نظامی سطح ۲",
      desc: "کنترل جاسوسی و افزایش دفاع داخلی شهر.",
      cost: "100🪨 • 50🔩 • 80💰",
    },
    {
      cat: "outposts", special: false, img: "outposts-3", icon: "🏯",
      name: "مقر فرماندهی سطح ۳",
      desc: "مرکز کنترل و فرماندهی شهر.",
      cost: "200🪨 • 100🔩 • 150💰 • 50🧵",
    },

    /* ===================== ساختمان‌های دفاعی ===================== */
    {
      cat: "defense", special: false, img: "defense-1", icon: "🪵",
      name: "دیوار چوبی",
      desc: "دفاع سریع و ارزان.",
      cost: "3🪵 به ازای هر ۱ متر",
    },
    {
      cat: "defense", special: false, img: "defense-2", icon: "🪨",
      name: "دیوار سنگی",
      desc: "دفاع مستحکم و دائمی.",
      cost: "3🪨 به ازای هر ۱ متر",
    },
    {
      cat: "defense", special: false, img: "defense-3", icon: "🗼",
      name: "برج چوبی",
      desc: "دیدبانی و هشدار سریع.",
      cost: "350🪵 • 200💰 • 100🔩",
    },
    {
      cat: "defense", special: false, img: "defense-4", icon: "🏰",
      name: "برج سنگی",
      desc: "جایگاه کمانداران و دفاع قوی.",
      cost: "500🪨 • 600💰 • 250🔩 • 110🪵",
    },
    {
      cat: "defense", special: false, img: "defense-5", icon: "🪖",
      name: "سنگر",
      desc: "استحکامات سریع.",
      cost: "60💰 • 30🪵 • 20🪨",
    },
    {
      cat: "defense", special: false, img: "defense-6", icon: "🕳",
      name: "خندق",
      desc: "کند کردن دشمن.",
      cost: "100🪨 • 50💰 • 50🪵",
    },
    {
      cat: "defense", special: false, img: "defense-7", icon: "🚪",
      name: "دروازه آهنی",
      desc: "محافظت از ورودی شهر.",
      cost: "500🔩 • 400💰 • 200🪵",
    },

    /* ===================== ساختمان‌های ویژه ===================== */
    {
      cat: "special", special: false, img: "special-1", icon: "⚓",
      name: "بندرگاه",
      desc: "فعال کردن تجارت دریایی.",
      cost: "120💰 • 30🔩 • 50🪵 • 20🪨",
      requirement: "نیاز: جمعیت ۱۰۰۰+",
    },
    {
      cat: "special", special: false, img: "special-2", icon: "🛶",
      name: "قایق نفربر",
      desc: "انتقال سپاه از طریق آب.",
      cost: "80💰 • 30🪵 • 15🔩 • 10🧵",
      yield: "ظرفیت: 30 سرباز",
      requirement: "نیاز: بندرگاه",
    },

    /* ===================== تجهیزات ویژه ===================== */
    {
      cat: "equipment", special: false, img: "equipment-1", icon: "🛡",
      name: "نیروی ویژه سرکوب",
      desc: "فقط برای کنترل شورش و امنیت داخلی.",
      cost: "100💰 • 50🔩 • 30🧵",
      yield: "10 سرباز",
      requirement: "نیاز: پاسگاه سطح ۲",
    },

  ]
};
