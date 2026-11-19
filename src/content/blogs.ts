export type BlogPost = {
  title: string;
  url: string;
  excerpt: string[];
};

export const blogs: BlogPost[] = [
  {
    title: "Offline Guides and Slow Video in React Native",
    url: "https://medium.com/@ishmakhan1995/offline-guides-and-slow-video-in-react-native-8a14d1b33dce",
    excerpt: [
      "How I cache farming instructions, download a playable guide and keep dubbed audio in sync.",
      "A farmer opens a guide on transplanting seedlings at home, then opens it again in a field with no signal. The app needs to know what it has on the phone, the last API response or a complete download with photos, video and language tracks.",
      "Here’s how I implemented both paths, along with the settings I use when the video is still streaming. The excerpts are shortened from the app.",
    ],
  },
];
