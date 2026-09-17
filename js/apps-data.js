// Single source of truth for app cards on the homepage.
// To add a new app: add an object here (status: "live" once it has a real store link),
// drop its icon/screenshots under assets/images/apps/<slug>/, and optionally add
// apps/<slug>.html for a full detail page.
const APPS = [
  {
    slug: "spendstreak",
    name: "SpendStreak",
    tagline: "The budgeting app that rewards showing up, not perfection.",
    platform: "Android",
    status: "live",
    iconSrc: "assets/images/apps/spendstreak/icon.svg",
    storeUrl: "https://play.google.com/store/apps/details?id=com.spendstreak.app&hl=en",
    shortDescription:
      "A gamified money tracker that turns everyday budgeting into an RPG-style streak-and-XP habit — log expenses, build a daily streak, and level up your app themes.",
    detailPage: "apps/spendstreak.html",
  },
  {
    slug: "app-two",
    name: "Coming Soon",
    tagline: "Our next app is in the works.",
    platform: "TBD",
    status: "coming-soon",
    iconSrc: "assets/images/apps/placeholder/icon.svg",
    storeUrl: null,
    shortDescription: "Details coming soon — stay tuned!",
    detailPage: null,
  },
  {
    slug: "app-three",
    name: "Coming Soon",
    tagline: "Another project is brewing.",
    platform: "TBD",
    status: "coming-soon",
    iconSrc: "assets/images/apps/placeholder/icon.svg",
    storeUrl: null,
    shortDescription: "Details coming soon — stay tuned!",
    detailPage: null,
  },
];
