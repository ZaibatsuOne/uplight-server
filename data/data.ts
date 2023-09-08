import { IContactBlock, IPricingBlock } from "@/types/types";

import discrod from "@/public/Symbol.svg";
import github from "@/public/githab.svg";
import telegram from "@/public/telegram.svg";
import youtube from "@/public/youtube.svg";

export const pricingBlocks: IPricingBlock[] = [
  {
    id: 1,
    inGamePrice: 2.5,
    permanentlyPrice: 5,
    title: "Tester",
    options: [
      "Access to the Beta-Server",
      "Access to the Discord-server",
      "You need Vanilla to buy",
    ],
  },
  {
    id: 2,
    title: "Vanilla",
    inGamePrice: 3,
    permanentlyPrice: 6,
    options: [
      "Access to the Main-Server",
      "1 InGame Season is valid",
      "Access to the Discord-server",
    ],
  },
  {
    id: 3,
    title: "Vanilla+",
    inGamePrice: 5,
    permanentlyPrice: 10,
    options: [
      "All the features of Vanilla",
      "Access to Tags and Coloring",
      "Off-Season access",
    ],
  },
];

export const contactBlocks: IContactBlock[] = [
  {
    id: 1,
    icon: discrod,
    title: "Discord-server",
    subtitle: "Discord",
  },
  {
    id: 2,
    icon: youtube,
    title: "YouTube Channel",
    subtitle: "YouTube",
  },
  {
    id: 3,
    icon: telegram,
    title: "Telegram Channel",
    subtitle: "Telegram",
  },
  {
    id: 4,
    icon: github,
    title: "Our GitHub",
    subtitle: "GitHub",
  },
];
