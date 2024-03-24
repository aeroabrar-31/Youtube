import {
  WhatshotOutlined,
  ShoppingBagOutlined,
  MusicNoteOutlined,
  SportsEsportsOutlined,
  MovieCreationOutlined,
  SchoolOutlined,
  LiveTvOutlined,
  PodcastsOutlined,
} from "@mui/icons-material";

export const GOOGLE_API_KEY = "AIzaSyAwnJlP-Olr-RtGMRqlD6JayMczRGHCqMk";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=";

export const YOUTUBE_CHANNEL_API =
  " https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const VIDEO_BY_ID_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=";

export const YOUTUBE_SUGGESTIONS_API =
  "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const COMMENTS_THREADS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=100&videoId=";

export const SEARCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export function formatViews(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M views";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K views";
  } else {
    return number + " views";
  }
}

export function formatLikes(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number;
  }
}

export function timeAgo(date) {
  const now = new Date();
  const timeDiff = now - new Date(date);

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "few minutes ago";
  }
}
export const button_list_data = [
  "All",
  "Music",
  "Live",
  "Computer Science",
  "Comedy",
  "Gaming",
  "Fashion",
  "Beauty",
  "Computer Science",
  "Comedy",
  "Gaming",
  "Fashion",
  "Beauty",
  "Computer Science",
  "Comedy",
  "Gaming",
  "Fashion",
  "Beauty",
];

export const categories = [
  { icon: <WhatshotOutlined />, text: "Trending" },
  { icon: <ShoppingBagOutlined />, text: "Shopping" },
  { icon: <MusicNoteOutlined />, text: "Music" },
  { icon: <SportsEsportsOutlined />, text: "Gaming" },
  { icon: <MovieCreationOutlined />, text: "Movies" },
  { icon: <SchoolOutlined />, text: "Learning" },
  { icon: <LiveTvOutlined />, text: "Live" },
  { icon: <PodcastsOutlined />, text: "Podcasts" },
];

const obj = {
  kind: "youtube#video",
  etag: "QcZ19hTrCkck7GoZVeSO4V6oSBw",
  id: "t3VWnX9f6ek",
  snippet: {
    publishedAt: "2024-03-08T04:01:49Z",
    channelId: "UCgZHFBaPcDGphLGOCHTKIPA",
    title:
      "Ammayi Nachindi | Part 2 | Telugu Independent Film 2024 | Rowdy Baby | South Indian Logic",
    description:
      "Mee Career ki best way lo plan chesukovadaniki Top Career Experts okka FREE Demo conduct chesthunaru.\n🔥Register now for FREE  DEMO here: https://bit.ly/BookFreeDemo_SoftwareJob-rb\n\nRegister ayyi meeru oka manchi Software job ela crack cheyyali ani thelusukondi \n🎯1500+ Software Companies Hiring.\n \n#SoftwareJobs #IT #Softwaredeveloper #SoftwareEngineer\n\nDISCLAIMER : \nThe app or website shown in this video is made only for promotion purposes. We cannot be held responsible if their products or services are used without following the instructions in the owner's manual. \n\nFor Collaborations, Brand Partnerships and movie promotions reach us at \nbrands.southindianlogic@gmail.com\n\nFollow Us:\nInstagran: https://rb.gy/hpbyi\nFacebook: https://rb.gy/4nzoc\nX ( twitter ) : https://rb.gy/s8p9u\n\n\nCast:\nAbhinav Manikanta\nSai swetha\nDr. Neela Priya Devulapalli\nSunandini mududhudla\nRevathinadha\nKrishh d\nAnusha Reddy\nL. Mokshagna\nP. Pawan\nPardhu\nLakshyasree\nShankar Reddy\nPavan Yenagandula\nSadiq\nNaveen\nHarish\nVinod\nApoorva Reddy\nTrinadh babu\nSreeja yadav\nUday Kiran\nSai Chetan\nAishwarya Nadadur\nLavanya\n\nWritten & DIrected by \nAjith Reddy R\n\nProduced By \nUpendar Reddy Yekkati\n\nDop & Editing - DI:\nSagar Sunny \n\nSound Design: \nVivek Nekkala\n\nStory Discussion:\nShankar reddy\nSunny sanjay\n\nMusic :\nAkshay Malipeddi\n\nPublicity Designer:\nShyam Veeravalli\n\nLine producer: \nMahendar Kami\n\nCreative Head:\nPavan Yenagandula\n\nAssistant director: \nCharan Goud Kalal\nSurya Chelluri\n\nAssociate dop: \nMohammad Sayyad,\nSrikanth,\nRajesh\n\nSound Engineer: \nGangadhar koppula\n\nDubbing Studio: \nGirish Studio's\n\nA  @SouthIndianLogic   Concept.\n\n\nDear Girls & Boys, Click the bell icon 🔔 near the Subscribe button on your Mobile app or on YouTube page to get instant notification for all the upcoming episodes of Rowdy Baby !!\n\n#TeluguWebseries2023 #telugushortfilm2023 #Southindianlogic #RowdyBaby",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/t3VWnX9f6ek/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/t3VWnX9f6ek/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/t3VWnX9f6ek/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/t3VWnX9f6ek/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/t3VWnX9f6ek/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "Rowdy Baby",
    tags: [
      "telugu webseries",
      "telugu shortfilms",
      "webseries telugu",
      "new telugu webseries",
      "latest telugu webseries",
      "webseries new telugu",
      "latest webseries new telugu",
      "latest new telugu webseries",
      "trending telugu webseries",
      "webseries",
      "web series",
      "shortfilms",
      "short fillms",
      "telugu web series",
      "web series telugu",
      "series telugu",
      "Telugu webseries 2024",
      "2024 Telugu webseries",
      "Telugu shortfilms 2024",
      "shortfilms Telugu 2024",
      "webseries Telugu",
    ],
    categoryId: "24",
    liveBroadcastContent: "none",
    defaultLanguage: "en",
    localized: {
      title:
        "Ammayi Nachindi | Part 2 | Telugu Independent Film 2024 | Rowdy Baby | South Indian Logic",
      description:
        "Mee Career ki best way lo plan chesukovadaniki Top Career Experts okka FREE Demo conduct chesthunaru.\n🔥Register now for FREE  DEMO here: https://bit.ly/BookFreeDemo_SoftwareJob-rb\n\nRegister ayyi meeru oka manchi Software job ela crack cheyyali ani thelusukondi \n🎯1500+ Software Companies Hiring.\n \n#SoftwareJobs #IT #Softwaredeveloper #SoftwareEngineer\n\nDISCLAIMER : \nThe app or website shown in this video is made only for promotion purposes. We cannot be held responsible if their products or services are used without following the instructions in the owner's manual. \n\nFor Collaborations, Brand Partnerships and movie promotions reach us at \nbrands.southindianlogic@gmail.com\n\nFollow Us:\nInstagran: https://rb.gy/hpbyi\nFacebook: https://rb.gy/4nzoc\nX ( twitter ) : https://rb.gy/s8p9u\n\n\nCast:\nAbhinav Manikanta\nSai swetha\nDr. Neela Priya Devulapalli\nSunandini mududhudla\nRevathinadha\nKrishh d\nAnusha Reddy\nL. Mokshagna\nP. Pawan\nPardhu\nLakshyasree\nShankar Reddy\nPavan Yenagandula\nSadiq\nNaveen\nHarish\nVinod\nApoorva Reddy\nTrinadh babu\nSreeja yadav\nUday Kiran\nSai Chetan\nAishwarya Nadadur\nLavanya\n\nWritten & DIrected by \nAjith Reddy R\n\nProduced By \nUpendar Reddy Yekkati\n\nDop & Editing - DI:\nSagar Sunny \n\nSound Design: \nVivek Nekkala\n\nStory Discussion:\nShankar reddy\nSunny sanjay\n\nMusic :\nAkshay Malipeddi\n\nPublicity Designer:\nShyam Veeravalli\n\nLine producer: \nMahendar Kami\n\nCreative Head:\nPavan Yenagandula\n\nAssistant director: \nCharan Goud Kalal\nSurya Chelluri\n\nAssociate dop: \nMohammad Sayyad,\nSrikanth,\nRajesh\n\nSound Engineer: \nGangadhar koppula\n\nDubbing Studio: \nGirish Studio's\n\nA  @SouthIndianLogic   Concept.\n\n\nDear Girls & Boys, Click the bell icon 🔔 near the Subscribe button on your Mobile app or on YouTube page to get instant notification for all the upcoming episodes of Rowdy Baby !!\n\n#TeluguWebseries2023 #telugushortfilm2023 #Southindianlogic #RowdyBaby",
    },
    defaultAudioLanguage: "te",
  },
  contentDetails: {
    duration: "PT52M51S",
    dimension: "2d",
    definition: "hd",
    caption: "false",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular",
  },
  statistics: {
    viewCount: "247474",
    likeCount: "11130",
    favoriteCount: "0",
    commentCount: "311",
  },
};

const ooo = {
  kind: "youtube#videoListResponse",
  etag: "SDJjgWNrhXoTRM80-6_FCmZUumM",
  items: [
    {
      kind: "youtube#video",
      etag: "MZHcmpoEBgZpmuE6WhF0VYLAL6U",
      id: "BtytYWhg2mc",
      snippet: {
        publishedAt: "2024-03-19T15:00:14Z",
        channelId: "UCZGYJFUizSax-yElQaFDp5Q",
        title: "The Acolyte | Official Trailer | Disney+",
        description:
          "In an age of light, a darkness rises.\n\nOn June 4, don’t miss the two-episode premiere of #TheAcolyte, a Star Wars Original series, only on Disney+.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BtytYWhg2mc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BtytYWhg2mc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BtytYWhg2mc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/BtytYWhg2mc/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/BtytYWhg2mc/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Star Wars",
        tags: [
          "star wars",
          "jedi",
          "the acolyte",
          "lucasfilm",
          "the high republic",
          "lightsabers",
        ],
        categoryId: "24",
        liveBroadcastContent: "none",
        localized: {
          title: "The Acolyte | Official Trailer | Disney+",
          description:
            "In an age of light, a darkness rises.\n\nOn June 4, don’t miss the two-episode premiere of #TheAcolyte, a Star Wars Original series, only on Disney+.",
        },
        defaultAudioLanguage: "en-US",
      },
    },
    {
      kind: "youtube#video",
      etag: "Nr6mt7Q2_x64Mbe44FncesYE5N8",
      id: "q2XVtWfancQ",
      snippet: {
        publishedAt: "2024-03-19T11:00:51Z",
        channelId: "UC6L_LBqoKZXFa4WxHox5iCw",
        title:
          "What Makes a Great Basketball Player? |  LeBron James & JJ Redick | Full Episode",
        description:
          'Welcome to the first episode of Mind the Game with LeBron James and JJ Redick. We are really excited to share this podcast where we examine and celebrate the game of basketball. In this first episode we ask ourselves a very simple question, "What makes a great basketball player?" That question launches us into discussions about the The Los Lakers recent comeback win against the Los Angeles Clippers, philosophical questions about basketball IQ and we dive into concepts like "Thumb Down" and "Floppy" and "Horns Chest." We also talk about this year\'s leap of Jayson Tatum and The Boston Celtics and what makes them so dangerous. And finally, we dive into the influence of Stephen Curry.\n\nWe really hope you enjoy our show. Be sure to subscribe wherever you get your podcasts. And if you\'d like to see some of the visuals referenced in this episode, please subscribe to Mind the Game on YouTube at YouTube.com/@MindtheGame\n\nPresented by Uninterrupted and ThreeFourTwo Productions. \n\nSubscribe to Mind the Game with LeBron James and JJ Redick today for more NBA insight, analysis, highlights and more.\n\n#nba #lebronjames #jjredick',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/q2XVtWfancQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/q2XVtWfancQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/q2XVtWfancQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/q2XVtWfancQ/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/q2XVtWfancQ/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mind the Game Pod w/ LeBron James and JJ Redick",
        tags: [
          "lebron james",
          "jj redick",
          "lebron james jj redick",
          "mind the game",
          "nba",
          "basketball",
          "lakers",
          "lebron highlights",
          "jj redick highlights",
          "lebron james jj redick podcast",
          "lebron james podcast",
          "jj redick lebron podcast",
          "los angeles lakers",
          "lebron lakers",
          "jj redick lakers",
          "jj redick espn",
          "espn",
          "lebron james jj redick highlights",
          "mind the game podcast",
          "lebron podcast",
          "jj redick lebron james podcast",
          "stephen curry",
          "lebron james stephen curry",
          "jayson tatum",
          "tatum",
          "curry",
          "lebron james youtube",
        ],
        categoryId: "22",
        liveBroadcastContent: "none",
        localized: {
          title:
            "What Makes a Great Basketball Player? |  LeBron James & JJ Redick | Full Episode",
          description:
            'Welcome to the first episode of Mind the Game with LeBron James and JJ Redick. We are really excited to share this podcast where we examine and celebrate the game of basketball. In this first episode we ask ourselves a very simple question, "What makes a great basketball player?" That question launches us into discussions about the The Los Lakers recent comeback win against the Los Angeles Clippers, philosophical questions about basketball IQ and we dive into concepts like "Thumb Down" and "Floppy" and "Horns Chest." We also talk about this year\'s leap of Jayson Tatum and The Boston Celtics and what makes them so dangerous. And finally, we dive into the influence of Stephen Curry.\n\nWe really hope you enjoy our show. Be sure to subscribe wherever you get your podcasts. And if you\'d like to see some of the visuals referenced in this episode, please subscribe to Mind the Game on YouTube at YouTube.com/@MindtheGame\n\nPresented by Uninterrupted and ThreeFourTwo Productions. \n\nSubscribe to Mind the Game with LeBron James and JJ Redick today for more NBA insight, analysis, highlights and more.\n\n#nba #lebronjames #jjredick',
        },
      },
    },
    {
      kind: "youtube#video",
      etag: "SMPEDPiaOrJB9FREr4-RSt_4Qxw",
      id: "FVswuip0-co",
      snippet: {
        publishedAt: "2024-03-19T16:00:19Z",
        channelId: "UCjmJDM5pRKbUlVIzDYYWb6g",
        title: "FURIOSA : A MAD MAX SAGA | OFFICIAL TRAILER #2",
        description:
          "She will return with a vengeance. Furiosa : A Mad Max Saga - Only in theaters May 24.\n\nAnya Taylor-Joy and Chris Hemsworth star in Academy Award-winning mastermind George Miller’s “Furiosa: A Mad Max Saga,” the much-anticipated return to the iconic dystopian world he created more than 30 years ago with the seminal “Mad Max” films.  Miller now turns the page again with an all-new original, standalone action adventure that will reveal the origins of the powerhouse character from the multiple Oscar-winning global smash “Mad Max: Fury Road.”  The new feature from Warner Bros. Pictures and Village Roadshow Pictures is produced by Miller and his longtime partner, Oscar-nominated producer Doug Mitchell (“Mad Max: Fury Road,” “Babe”), under their Australian-based Kennedy Miller Mitchell banner. \nAs the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.  Sweeping through the Wasteland, they come across the Citadel presided over by The Immortan Joe.  While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.\nTaylor-Joy stars in the title role, and along with Hemsworth, the film also stars Alyla Browne and Tom Burke. \nMiller penned the script with “Mad Max: Fury Road” co-writer Nico Lathouris.  Miller’s behind-the-scenes creative team includes first assistant director PJ Voeten and second unit director and stunt coordinator Guy Norris, director of photography Simon Duggan (“Hacksaw Ridge,” “The Great Gatsby”), composer Tom Holkenborg, sound designer Robert Mackenzie, editor Eliot Knapman, visual effects supervisor Andrew Jackson and colorist Eric Whipp. The team also includes other longtime collaborators: production designer Colin Gibson, editor Margaret Sixel, sound mixer Ben Osmo, costume designer Jenny Beavan and makeup designer Lesley Vanderwalt, each of whom won an Oscar for their work on “Mad Max: Fury Road.” \nWarner Bros. Pictures Presents, in Association with Village Roadshow Pictures, A Kennedy Miller Mitchell Production, A George Miller Film, “Furiosa: A Mad Max Saga.”  The film will be distributed worldwide by Warner Bros. Pictures, in theaters only nationwide on May 24, 2024 and internationally beginning on 22 May, 2024.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FVswuip0-co/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/FVswuip0-co/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/FVswuip0-co/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/FVswuip0-co/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/FVswuip0-co/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Warner Bros. Pictures",
        tags: [
          "2024",
          "Anya Taylor-Joy",
          "AnyaTaylorJoy",
          "Chris Hemsworth",
          "Coming Soon",
          "Furiosa",
          "FuriosaMadMax",
          "FuriosaMadMaxSaga",
          "FuriosaMovie",
          "George Miller",
          "Mad Max",
          "MadMax",
          "MadMaxSaga",
          "May 24",
          "May 24 2024",
          "Movie",
          "Saga",
          "Trailer",
          "WB",
          "Warner Bros",
          "Warner Brothers",
        ],
        categoryId: "1",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title: "FURIOSA : A MAD MAX SAGA | OFFICIAL TRAILER #2",
          description:
            "She will return with a vengeance. Furiosa : A Mad Max Saga - Only in theaters May 24.\n\nAnya Taylor-Joy and Chris Hemsworth star in Academy Award-winning mastermind George Miller’s “Furiosa: A Mad Max Saga,” the much-anticipated return to the iconic dystopian world he created more than 30 years ago with the seminal “Mad Max” films.  Miller now turns the page again with an all-new original, standalone action adventure that will reveal the origins of the powerhouse character from the multiple Oscar-winning global smash “Mad Max: Fury Road.”  The new feature from Warner Bros. Pictures and Village Roadshow Pictures is produced by Miller and his longtime partner, Oscar-nominated producer Doug Mitchell (“Mad Max: Fury Road,” “Babe”), under their Australian-based Kennedy Miller Mitchell banner. \nAs the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.  Sweeping through the Wasteland, they come across the Citadel presided over by The Immortan Joe.  While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.\nTaylor-Joy stars in the title role, and along with Hemsworth, the film also stars Alyla Browne and Tom Burke. \nMiller penned the script with “Mad Max: Fury Road” co-writer Nico Lathouris.  Miller’s behind-the-scenes creative team includes first assistant director PJ Voeten and second unit director and stunt coordinator Guy Norris, director of photography Simon Duggan (“Hacksaw Ridge,” “The Great Gatsby”), composer Tom Holkenborg, sound designer Robert Mackenzie, editor Eliot Knapman, visual effects supervisor Andrew Jackson and colorist Eric Whipp. The team also includes other longtime collaborators: production designer Colin Gibson, editor Margaret Sixel, sound mixer Ben Osmo, costume designer Jenny Beavan and makeup designer Lesley Vanderwalt, each of whom won an Oscar for their work on “Mad Max: Fury Road.” \nWarner Bros. Pictures Presents, in Association with Village Roadshow Pictures, A Kennedy Miller Mitchell Production, A George Miller Film, “Furiosa: A Mad Max Saga.”  The film will be distributed worldwide by Warner Bros. Pictures, in theaters only nationwide on May 24, 2024 and internationally beginning on 22 May, 2024.",
        },
        defaultAudioLanguage: "en-US",
      },
    },
    {
      kind: "youtube#video",
      etag: "cElMzs-qOobE9b5_6nSkcGkB-Qg",
      id: "XSB8s0Yfoi4",
      snippet: {
        publishedAt: "2024-03-19T13:00:19Z",
        channelId: "UClG8odDC8TS6Zpqk9CGVQiQ",
        title: "Midas Returns!! | Fortnite’s Rise of Midas",
        description:
          "Midas finds himself breaking out of Hades and all chaos breaks loose in the Rise of Midas event: https://fn.gg/RiseOfMidas\n\nRise of Midas is the return of the legendary Midas across competitive, Fortnite Battle Royale, and Competitive.\n\nFloor is Lava is back! This Limited Time Mode (LTM) puts a twist on the fan favorite limited-time experience! Floor is Lava is back for all of Rise of Midas, so jump in and get the high ground to best the lava overtaking the Island. Unlike regular Floor is Lava, Midas Presents: Floor is Lava features items from Chapter 5 Season 2… plus golden lava!\n\nBut Midas’ touch also stretches to Fortnite Battle Royale. Help Midas flee the Island with special Quests.\n\nAnd the seething rage of being unleashed brings on some hot competition with the Rise of Midas Cup. On March 24, compete in the Rise of Midas Cup! The players who earn the most points in each region will earn the Ascendant Midas Outfit (+ Golden King’s Cape Back Bling), The Golden Touch Pickaxe, and Golden Ascension Wrap before they hit the Shop, while all players who earn at least eight points will earn the The Rise of Midas Loading Screen.\n\nPlay Fortnite Battle Royale, the completely free 100-player PvP mode. One giant map, A Battle Bus, Last one standing wins. ESRB Rating: Teen with Violence.\n\nInstagram: https://www.instagram.com/fortnite/\u200b\nTwitter: https://twitter.com/FortniteGame\u200b\nFacebook: https://www.facebook.com/FortniteGame/\u200b\nTikTok: https://www.tiktok.com/@Fortnite\n\nLearn More: https://www.epicgames.com/fortnite/en-US/home\n\n#Fortnite #Midas #RiseofMidas",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/XSB8s0Yfoi4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/XSB8s0Yfoi4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/XSB8s0Yfoi4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/XSB8s0Yfoi4/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/XSB8s0Yfoi4/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Fortnite",
        tags: [
          "yt:cc=on",
          "midas",
          "fortnite midas",
          "rise of midas",
          "fortnite event",
          "fortnite rise of midas",
          "fortnite rise of midas event",
          "fortnite",
          "ltm",
          "fortnite ltm",
          "floor is lava",
          "floor is lava ltm",
          "fortnite competitive",
          "competitive",
          "fortnite rewards",
          "fortnite reward",
          "rewards",
          "free rewards",
          "fortnite free rewards",
          "ascendant midas",
          "fortnite ascendant midas",
          "midas outfit",
          "ascendant midas outfit",
          "fortnite trailer",
          "fortnite launch trailer",
          "launch trailer",
          "gameplay trailer",
          "fortnite gameplay trailer",
        ],
        categoryId: "20",
        liveBroadcastContent: "none",
        localized: {
          title: "Midas Returns!! | Fortnite’s Rise of Midas",
          description:
            "Midas finds himself breaking out of Hades and all chaos breaks loose in the Rise of Midas event: https://fn.gg/RiseOfMidas\n\nRise of Midas is the return of the legendary Midas across competitive, Fortnite Battle Royale, and Competitive.\n\nFloor is Lava is back! This Limited Time Mode (LTM) puts a twist on the fan favorite limited-time experience! Floor is Lava is back for all of Rise of Midas, so jump in and get the high ground to best the lava overtaking the Island. Unlike regular Floor is Lava, Midas Presents: Floor is Lava features items from Chapter 5 Season 2… plus golden lava!\n\nBut Midas’ touch also stretches to Fortnite Battle Royale. Help Midas flee the Island with special Quests.\n\nAnd the seething rage of being unleashed brings on some hot competition with the Rise of Midas Cup. On March 24, compete in the Rise of Midas Cup! The players who earn the most points in each region will earn the Ascendant Midas Outfit (+ Golden King’s Cape Back Bling), The Golden Touch Pickaxe, and Golden Ascension Wrap before they hit the Shop, while all players who earn at least eight points will earn the The Rise of Midas Loading Screen.\n\nPlay Fortnite Battle Royale, the completely free 100-player PvP mode. One giant map, A Battle Bus, Last one standing wins. ESRB Rating: Teen with Violence.\n\nInstagram: https://www.instagram.com/fortnite/\u200b\nTwitter: https://twitter.com/FortniteGame\u200b\nFacebook: https://www.facebook.com/FortniteGame/\u200b\nTikTok: https://www.tiktok.com/@Fortnite\n\nLearn More: https://www.epicgames.com/fortnite/en-US/home\n\n#Fortnite #Midas #RiseofMidas",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "CGS0dJ0sW8iBE67jfFr_Yqlp4Os",
      id: "bJ_IWWfhBFc",
      snippet: {
        publishedAt: "2024-03-18T23:18:36Z",
        channelId: "UClQ3NafOy_42dJ0toK3QUKw",
        title: "If You Build It, I'll Pay For It!",
        description:
          "If you build it, I'll pay for it! We built crazy legos and bought them in real life... and it VERY was expensive!!\n\nMAIN CHANNEL: @BenAzelart \nCAM HUFF: @CamHuff \n\nBUY THE MERCH: https://staywildshop.com\n\nNEW EPISODES EVERY WEEK!!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/bJ_IWWfhBFc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/bJ_IWWfhBFc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/bJ_IWWfhBFc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/bJ_IWWfhBFc/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/bJ_IWWfhBFc/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Stay Wild",
        tags: [
          "Ben Azelart",
          "Brent Rivera",
          "Pierson Wodzynski",
          "StayWild",
          "Stay Wild",
          "Ben Azelart Podcast",
          "Lexi Rivera",
          "Lexi Hensler",
          "Stokes Twins",
          "Alan Stokes",
          "Alex Stokes",
          "Jeremy Hutchins",
          "Sofie Dossi",
          "Dom Brack",
          "Amp Squad",
          "TikTok",
          "Bexi",
          "Brierson",
          "Lexi Rivera Boyfriend",
          "Ben Azelart Girlfriend",
          "Ben and Lexi",
          "Brent and Pierson",
          "Andrew Davila",
          "Cam Huff",
          "Dereks Days",
          "Stay Wild Vlogs",
          "LEGO",
          "if you build it",
        ],
        categoryId: "24",
        liveBroadcastContent: "none",
        localized: {
          title: "If You Build It, I'll Pay For It!",
          description:
            "If you build it, I'll pay for it! We built crazy legos and bought them in real life... and it VERY was expensive!!\n\nMAIN CHANNEL: @BenAzelart \nCAM HUFF: @CamHuff \n\nBUY THE MERCH: https://staywildshop.com\n\nNEW EPISODES EVERY WEEK!!",
        },
      },
    },
    {
      kind: "youtube#video",
      etag: "JftLzn6r3RuDgA_0GDy26eB8elk",
      id: "r5eZcLR5ztg",
      snippet: {
        publishedAt: "2024-03-18T23:15:36Z",
        channelId: "UCK7tptUDHh-RYDsdxO1-5QQ",
        title:
          "Breaking Down Trump’s Options to Pay $454M Civil-Fraud Penalty | WSJ",
        description:
          "Former President Donald Trump is facing half a billion dollars in legal penalties in his New York civil-fraud trial. For now, the billionaire and presumptive Republican nominee for president has until late March to come up with the funds or the New York attorney general could begin to seize some of his assets.\n\nWSJ looks at the options he could use to finance his mounting legal bills.\n\nChapters:\n0:00 Trump’s legal penalties\n0:53 The state of Trump’s finances \n2:48 Trump’s payments\n3:50 Options for paying\n4:41 What could happen to his assets?\n6:26 What’s next?\n\nNews Explainers\nSome days the high-speed news cycle can bring more questions than answers. WSJ’s news explainers break down the day's biggest stories into bite-size pieces to help you make sense of the news.\n\n#Trump #Legal #WSJ",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/r5eZcLR5ztg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/r5eZcLR5ztg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/r5eZcLR5ztg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/r5eZcLR5ztg/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/r5eZcLR5ztg/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "The Wall Street Journal",
        tags: [
          "donald trump",
          "trump",
          "trump news",
          "trump legal issues",
          "legal fees",
          "legal penalties",
          "civil fraud",
          "civil fraud trial",
          "new york civil fraud trial",
          "trump civil fraud",
          "liquidate assets",
          "new york attorney general",
          "bonds",
          "trump bond",
          "trump lawyers",
          "trump net worth",
          "donald trump business",
          "trump assets",
          "trump hotels",
          "trump condos",
          "trump casino",
          "balance sheet",
          "trump legal fees",
          "trump real estate empire",
          "cash reserves",
          "appellate court",
          "former president donald trump",
          "wsj",
          "usnews",
        ],
        categoryId: "25",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title:
            "Breaking Down Trump’s Options to Pay $454M Civil-Fraud Penalty | WSJ",
          description:
            "Former President Donald Trump is facing half a billion dollars in legal penalties in his New York civil-fraud trial. For now, the billionaire and presumptive Republican nominee for president has until late March to come up with the funds or the New York attorney general could begin to seize some of his assets.\n\nWSJ looks at the options he could use to finance his mounting legal bills.\n\nChapters:\n0:00 Trump’s legal penalties\n0:53 The state of Trump’s finances \n2:48 Trump’s payments\n3:50 Options for paying\n4:41 What could happen to his assets?\n6:26 What’s next?\n\nNews Explainers\nSome days the high-speed news cycle can bring more questions than answers. WSJ’s news explainers break down the day's biggest stories into bite-size pieces to help you make sense of the news.\n\n#Trump #Legal #WSJ",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "XuKjQV-4oW6dwyjELpk0q0gyDu0",
      id: "H998wgSQm3M",
      snippet: {
        publishedAt: "2024-03-19T16:00:11Z",
        channelId: "UClOf1XXinvZsy4wKPAkro2A",
        title: "Developer Update | Hero Releases, Mythics, and More",
        description:
          "Game Director Aaron Keller is here to discuss updates to Hero releases, Mythic skins, maps, and more!\n\nStarting with Venture, all new Heroes will be immediately unlocked when they launch and will no longer need to be unlocked through the Battle Pass. All existing Heroes will also be unlocked for players.\n\nIntroducing a new way to unlock Mythic skins! With the Mythic Shop, players can unlock past Mythic skins they might have missed in previous seasons.\n\nIn Season 11 and beyond, be on the lookout for our next Push Map Runasapi, our new game mode Clash, and more updates coming to existing maps.\n\nGet ready for intense action in the limited-time Clash trial on the new Hanaoka map at the start of Season 10. We’re excited to hear your feedback.\n\nOverwatch 2 is free to play for everyone on console & PC!\n_\nFollow #Overwatch2 for the latest news:\nInstagram: https://www.instagram.com/playoverwatch\nTikTok: https://www.tiktok.com/@overwatch\nTwitter: http://www.twitter.com/playoverwatch \nFacebook: http://www.facebook.com/playoverwatch",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/H998wgSQm3M/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/H998wgSQm3M/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/H998wgSQm3M/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/H998wgSQm3M/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/H998wgSQm3M/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "PlayOverwatch",
        tags: ["Overwatch 2", "Overwatch"],
        categoryId: "20",
        liveBroadcastContent: "none",
        localized: {
          title: "Developer Update | Hero Releases, Mythics, and More",
          description:
            "Game Director Aaron Keller is here to discuss updates to Hero releases, Mythic skins, maps, and more!\n\nStarting with Venture, all new Heroes will be immediately unlocked when they launch and will no longer need to be unlocked through the Battle Pass. All existing Heroes will also be unlocked for players.\n\nIntroducing a new way to unlock Mythic skins! With the Mythic Shop, players can unlock past Mythic skins they might have missed in previous seasons.\n\nIn Season 11 and beyond, be on the lookout for our next Push Map Runasapi, our new game mode Clash, and more updates coming to existing maps.\n\nGet ready for intense action in the limited-time Clash trial on the new Hanaoka map at the start of Season 10. We’re excited to hear your feedback.\n\nOverwatch 2 is free to play for everyone on console & PC!\n_\nFollow #Overwatch2 for the latest news:\nInstagram: https://www.instagram.com/playoverwatch\nTikTok: https://www.tiktok.com/@overwatch\nTwitter: http://www.twitter.com/playoverwatch \nFacebook: http://www.facebook.com/playoverwatch",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "BOcwvCc_N3L1xEUBLWtsZaE6nHg",
      id: "V0H8oGWkn0Q",
      snippet: {
        publishedAt: "2024-03-18T17:08:59Z",
        channelId: "UCUebubwSuTHfHjWJI4gCS9A",
        title:
          'Joyner Lucas ft. Jelly Roll - "Best For Me" Official Music Video (Not Now I\'m Busy)',
        description:
          "Stream Joyner Lucas now: https://orcd.co/bestforme\n\nPre-save the album now: https://radi.al/notnowimbusy\n\nShatterproof: https://www.shatterproof.org\n\nMerch: https://joynerlucas.com/\n\nTully App: https://tullyapp.com\n\nTully App is a blueprint for the entrepreneur artist to successfully operate in today's music industry. You can Create, Manage, Distribute music in one app.\n\nProduction Company: LMTLSS Media\nDirector: Joyner Lucas & Trevor Finney\nExecutive Producer: Dhruv Joshi, Brendan Smith, Jake Diamond\nProducer: Brendan Smith\nDP: Michael Henaghan\nEditors: Joyner Lucas, Trevor Finney\nColorist: Jared Rosenthal\nEngineer: Leo Son\nProduction assistant: Kayle Olzer\nAD/Lead PA: Jake Diamond\nSteadicam: Larkin McLaughlin \n1st A/C: Ben Ades\n2nd A/C: Alex Cope \nDIT: Lane Fernandez\nGaffer: Nate Airey\nKey Grip: Andrew Alfonsi\nGrip- Nick Pietroniro \nGrip: Skylar Carr\nMakeup Artist: Bianca Bentley\nBTS: Andy Pollitt & Brendon Barsnetti\nArtist Trailer & rentals: Adventure coast \nLocation Scout/Artist Relations: Chris “Marty” Martin \nFood Catering: Martins BBQ ( Nashville, TN )\n\n#tullyapp #joynerlucas #notnowimbusy #bestforme",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/V0H8oGWkn0Q/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/V0H8oGWkn0Q/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/V0H8oGWkn0Q/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/V0H8oGWkn0Q/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/V0H8oGWkn0Q/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Joyner Lucas",
        tags: ["Best for me", "Jelly roll", "Joyner Lucas", "Addiction"],
        categoryId: "10",
        liveBroadcastContent: "none",
        localized: {
          title:
            'Joyner Lucas ft. Jelly Roll - "Best For Me" Official Music Video (Not Now I\'m Busy)',
          description:
            "Stream Joyner Lucas now: https://orcd.co/bestforme\n\nPre-save the album now: https://radi.al/notnowimbusy\n\nShatterproof: https://www.shatterproof.org\n\nMerch: https://joynerlucas.com/\n\nTully App: https://tullyapp.com\n\nTully App is a blueprint for the entrepreneur artist to successfully operate in today's music industry. You can Create, Manage, Distribute music in one app.\n\nProduction Company: LMTLSS Media\nDirector: Joyner Lucas & Trevor Finney\nExecutive Producer: Dhruv Joshi, Brendan Smith, Jake Diamond\nProducer: Brendan Smith\nDP: Michael Henaghan\nEditors: Joyner Lucas, Trevor Finney\nColorist: Jared Rosenthal\nEngineer: Leo Son\nProduction assistant: Kayle Olzer\nAD/Lead PA: Jake Diamond\nSteadicam: Larkin McLaughlin \n1st A/C: Ben Ades\n2nd A/C: Alex Cope \nDIT: Lane Fernandez\nGaffer: Nate Airey\nKey Grip: Andrew Alfonsi\nGrip- Nick Pietroniro \nGrip: Skylar Carr\nMakeup Artist: Bianca Bentley\nBTS: Andy Pollitt & Brendon Barsnetti\nArtist Trailer & rentals: Adventure coast \nLocation Scout/Artist Relations: Chris “Marty” Martin \nFood Catering: Martins BBQ ( Nashville, TN )\n\n#tullyapp #joynerlucas #notnowimbusy #bestforme",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "xn6K7EWEvzWhHaW9BG1sxg8EqRQ",
      id: "xwo7HZisQSA",
      snippet: {
        publishedAt: "2024-03-19T14:00:46Z",
        channelId: "UCbLj9QP9FAaHs_647QckGtg",
        title: "Plunderstorm Launch Trailer | World of Warcraft",
        description:
          "Pirates, magic, & mayhem! Dive into Plunderstorm, World of Warcraft’s new battle royale-inspired limited-time event, and earn epic rewards. \nWorld of Warcraft – Plunderstorm launches March 19, 2024 PDT.\n\n► Latest WoW news: http://worldofwarcraft.com/news \n► Subscribe to WoW: http://blizz.ly/WoWYTSub\n► Visit WoW on Battle.net: https://us.shop.battle.net/en-us/family/world-of-warcraft\n--\n► Follow Warcraft on Twitter: https://twitter.com/warcraft \n► Follow Warcraft on Instagram: https://instagram.com/warcraft \n► Like Warcraft on Facebook: https://facebook.com/warcraft",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xwo7HZisQSA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xwo7HZisQSA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xwo7HZisQSA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/xwo7HZisQSA/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/xwo7HZisQSA/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "World of Warcraft",
        tags: [
          "World of Warcraft",
          "WoW",
          "Warcraft",
          "Blizzard",
          "Blizzard Entertainment",
          "gaming",
          "video games",
          "rpg",
          "mmo",
          "esports",
          "wow classic",
          "plunderstorm",
          "patch 10.2.6",
          "pirates",
          "magic",
          "mayhem",
          "battle royale",
          "storm",
          "cosmetics",
          "plunder",
          "PvP",
          "world of warcraft dragonflight",
          "world of warcraft",
          "wow dragonflight",
          "dragonflight",
          "warcraft",
          "wow",
          "blizzard",
          "blizzard entertainment",
        ],
        categoryId: "20",
        liveBroadcastContent: "none",
        localized: {
          title: "Plunderstorm Launch Trailer | World of Warcraft",
          description:
            "Pirates, magic, & mayhem! Dive into Plunderstorm, World of Warcraft’s new battle royale-inspired limited-time event, and earn epic rewards. \nWorld of Warcraft – Plunderstorm launches March 19, 2024 PDT.\n\n► Latest WoW news: http://worldofwarcraft.com/news \n► Subscribe to WoW: http://blizz.ly/WoWYTSub\n► Visit WoW on Battle.net: https://us.shop.battle.net/en-us/family/world-of-warcraft\n--\n► Follow Warcraft on Twitter: https://twitter.com/warcraft \n► Follow Warcraft on Instagram: https://instagram.com/warcraft \n► Like Warcraft on Facebook: https://facebook.com/warcraft",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "ElEl_7N_nPvPTmi1GH1vqnLRAwc",
      id: "KfejFvlGHsg",
      snippet: {
        publishedAt: "2024-03-19T15:01:14Z",
        channelId: "UCJAPcllL_VRxUiNKtaLOpzw",
        title: "The MIDAS Update in Fortnite!",
        description:
          "Today we got the first part of the Midas update, with the Chains of Hades, the new Drum Gun and the Bubble Shield jr! We didnt get the Floor is Lava mode yet but it should drop this week!\n\n\n🌟 Socials 🌟\n\n📺 Twitch: http://www.twitch.tv/sypherpk\n🐥 Twitter: http://www.twitter.com/sypherpk \n📷 Instagram: https://www.instagram.com/sypherpk/ \n💌 Discord: https://discordapp.com/invite/sypherpk\n📚 Facebook: https://facebook.com/SypherPK\n\n🎥 Produced, and Thumbnail by: JackZenn: \nhttps://twitter.com/JackMelaschenko  \n\nEdited by: Jarrett\n\nHey everyone it’s SypherPK, and Welcome back to another fortnite battle royale vid in Fortnite Season 2! I try to keep these vids as clean and family friendly as possible. Hope you enjoy!\n\n#fortnite  #sypherpk #season2",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/KfejFvlGHsg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/KfejFvlGHsg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/KfejFvlGHsg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/KfejFvlGHsg/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/KfejFvlGHsg/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "More SypherPK",
        tags: [
          "fortnite",
          "fortnite battle royale",
          "gameplay",
          "sypherpk",
          "sypher",
          "more sypherpk",
          "new update",
          "fortnite chapter 5",
        ],
        categoryId: "20",
        liveBroadcastContent: "none",
        localized: {
          title: "The MIDAS Update in Fortnite!",
          description:
            "Today we got the first part of the Midas update, with the Chains of Hades, the new Drum Gun and the Bubble Shield jr! We didnt get the Floor is Lava mode yet but it should drop this week!\n\n\n🌟 Socials 🌟\n\n📺 Twitch: http://www.twitch.tv/sypherpk\n🐥 Twitter: http://www.twitter.com/sypherpk \n📷 Instagram: https://www.instagram.com/sypherpk/ \n💌 Discord: https://discordapp.com/invite/sypherpk\n📚 Facebook: https://facebook.com/SypherPK\n\n🎥 Produced, and Thumbnail by: JackZenn: \nhttps://twitter.com/JackMelaschenko  \n\nEdited by: Jarrett\n\nHey everyone it’s SypherPK, and Welcome back to another fortnite battle royale vid in Fortnite Season 2! I try to keep these vids as clean and family friendly as possible. Hope you enjoy!\n\n#fortnite  #sypherpk #season2",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "Ct8vzz07zbAmOke5CSrhFI0RWZ8",
      id: "e5xueJq4Lwc",
      snippet: {
        publishedAt: "2024-03-19T04:00:17Z",
        channelId: "UC2PeMPA8PAOp-bynLoCeMLA",
        title:
          "Animated Short: Rondo Across Countless Kalpas | Honkai: Star Rail",
        description:
          'The dual planets were intertwined in each other\'s tragic destiny, dancing an eternal rondo around a pitch-black great sun.\nIn the beginning, one of the planets gave rise to humans. These people looked down, and named the land below "Izumo." These people looked up, and named the world above "Takamagahara."\nOne day uninscribed in the annals, the Yaoyorozu-no-kami descended from Takamagahara. These demonic beasts named Kami overturned the skies, burned the rivers and oceans, and shattered the land — People realized in horror that it was not an invasion for rulership, dominance, or plunder. The evil Kami came only to kill.\nAs the planet stood on the brink of death, Izumo embarked on a Kami-slaying journey, exhausting the might of the entire country to slay the calamity "Sovereign of Revelation" and forging the very first Edict Edge using its bestial body.\nGiving the Kami a taste of their own medicine, the wielder of these swords can recite the mantra contained within the blade to master the divine power of Takamagahara, and use it to combat the evil Kami and save the masses.\nFrom then on, Izumo started its long and arduous crusade, exchanging inordinate lives lost for the fall of one Kami after another, shattering countless mortal blades to forge the twelve Sentinels.\nIn the merciless fight for survival, Izumo used the might of the Edict Edges to light up their uncivilized world of darkness in less than ten Amber Eras, building cities of dazzling neon lights.\nThat distant Takama Divine Realm, once so far away, became so close within their reach —\nYet history suddenly stopped there. The existence of the two planets instantly evaporated, disappearing into nothingness.\nNowadays, the past of the border planet Izumo can only be gleaned from the scattered whispers in the universe. Academics hold various views regarding its disappearance, but none can solve the mystery.\nIzumo\'s history should have been a long flowing river, but it was severed in one cut, and all its past and future voided on emptiness\' other shore.\nDid it never exist, and was it no more than a fabricated story? Did its histories never occur, and it ran aground on the beach of reverse causation? Was it yet another appalling experiment by Dr. Primitive, or was it a sign of the Voracity returning from the end of the Cosmos?\nOnly that pitch-black great sun knows the answer, yet THEY remain silent, never speaking.\nBecause everything that had happened will one day regress to the end, and everything that had ended is guaranteed to happen again. The universe undergoes an eternal recurrence under THEIR shadow, and Izumo is nothing more than the footnote for an ellipsis.\n\nEnglish Voice:\nBlack Swan — Arryn Zech\nAcheron — Allegra Clark\n\nChinese Voice-Over Video: https://youtu.be/34MfkpyyJHY\nJapanese Voice-Over Video: https://www.youtube.com/watch?v=v9qTBUZtgQk\nKorean Voice-Over Video: https://youtu.be/gD091h77N50\n\nDownload Now\nhttps://hoyo.link/dVDhFDAL\n\nFollow us to get the latest info.\nHoYoLAB: https://www.hoyolab.com/accountCenter/postList?id=172534910\nFacebook: https://www.facebook.com/HonkaiStarRail/\nTwitter: https://twitter.com/honkaistarrail\nDiscord: https://discord.gg/honkaistarrail\nInstagram: https://www.instagram.com/honkaistarrail/\nTikTok: https://www.tiktok.com/@honkaistarrail_official\nReddit: https://www.reddit.com/r/HonkaiStarRail/\n\n#HonkaiStarRail\n#Acheron #BlackSwan \n#anime',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/e5xueJq4Lwc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/e5xueJq4Lwc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/e5xueJq4Lwc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/e5xueJq4Lwc/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/e5xueJq4Lwc/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Honkai: Star Rail",
        categoryId: "20",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title:
            "Animated Short: Rondo Across Countless Kalpas | Honkai: Star Rail",
          description:
            'The dual planets were intertwined in each other\'s tragic destiny, dancing an eternal rondo around a pitch-black great sun.\nIn the beginning, one of the planets gave rise to humans. These people looked down, and named the land below "Izumo." These people looked up, and named the world above "Takamagahara."\nOne day uninscribed in the annals, the Yaoyorozu-no-kami descended from Takamagahara. These demonic beasts named Kami overturned the skies, burned the rivers and oceans, and shattered the land — People realized in horror that it was not an invasion for rulership, dominance, or plunder. The evil Kami came only to kill.\nAs the planet stood on the brink of death, Izumo embarked on a Kami-slaying journey, exhausting the might of the entire country to slay the calamity "Sovereign of Revelation" and forging the very first Edict Edge using its bestial body.\nGiving the Kami a taste of their own medicine, the wielder of these swords can recite the mantra contained within the blade to master the divine power of Takamagahara, and use it to combat the evil Kami and save the masses.\nFrom then on, Izumo started its long and arduous crusade, exchanging inordinate lives lost for the fall of one Kami after another, shattering countless mortal blades to forge the twelve Sentinels.\nIn the merciless fight for survival, Izumo used the might of the Edict Edges to light up their uncivilized world of darkness in less than ten Amber Eras, building cities of dazzling neon lights.\nThat distant Takama Divine Realm, once so far away, became so close within their reach —\nYet history suddenly stopped there. The existence of the two planets instantly evaporated, disappearing into nothingness.\nNowadays, the past of the border planet Izumo can only be gleaned from the scattered whispers in the universe. Academics hold various views regarding its disappearance, but none can solve the mystery.\nIzumo\'s history should have been a long flowing river, but it was severed in one cut, and all its past and future voided on emptiness\' other shore.\nDid it never exist, and was it no more than a fabricated story? Did its histories never occur, and it ran aground on the beach of reverse causation? Was it yet another appalling experiment by Dr. Primitive, or was it a sign of the Voracity returning from the end of the Cosmos?\nOnly that pitch-black great sun knows the answer, yet THEY remain silent, never speaking.\nBecause everything that had happened will one day regress to the end, and everything that had ended is guaranteed to happen again. The universe undergoes an eternal recurrence under THEIR shadow, and Izumo is nothing more than the footnote for an ellipsis.\n\nEnglish Voice:\nBlack Swan — Arryn Zech\nAcheron — Allegra Clark\n\nChinese Voice-Over Video: https://youtu.be/34MfkpyyJHY\nJapanese Voice-Over Video: https://www.youtube.com/watch?v=v9qTBUZtgQk\nKorean Voice-Over Video: https://youtu.be/gD091h77N50\n\nDownload Now\nhttps://hoyo.link/dVDhFDAL\n\nFollow us to get the latest info.\nHoYoLAB: https://www.hoyolab.com/accountCenter/postList?id=172534910\nFacebook: https://www.facebook.com/HonkaiStarRail/\nTwitter: https://twitter.com/honkaistarrail\nDiscord: https://discord.gg/honkaistarrail\nInstagram: https://www.instagram.com/honkaistarrail/\nTikTok: https://www.tiktok.com/@honkaistarrail_official\nReddit: https://www.reddit.com/r/HonkaiStarRail/\n\n#HonkaiStarRail\n#Acheron #BlackSwan \n#anime',
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#video",
      etag: "nWgOC5oRxeEphlsD75_IY0pCaug",
      id: "bbECmVdyWlQ",
      snippet: {
        publishedAt: "2024-03-19T13:00:37Z",
        channelId: "UCMOqf8ab-42UUQIdVoKwjlQ",
        title: "How the Hawaiian Power Grid Works",
        description:
          "⚡A few of the complexities involved in managing a mini power grid.\n📰Compare news coverage. Spot media bias. Avoid algorithms. Try Ground News today and get 40% off your subscription by going to https://ground.news/practicalengineering\n\nDrawing the line between what’s worth the investment and what’s just gilding the electric lily is tough on such a small scale, multiplied by several islands, and with such a quickly growing portfolio of renewable energy sources.\n\nWatch this video ad-free on Nebula: https://nebula.tv/videos/practical-engineering-how-the-hawaiian-power-grid-works\n\nSigned copies of my book (plus other cool stuff) are available here: https://store.practical.engineering/\n\nPractical Engineering is a YouTube channel about infrastructure and the human-made world around us. It is hosted, written, and produced by Grady Hillhouse. We have new videos posted regularly, so please subscribe for updates. If you enjoyed the video, hit that ‘like’ button, give us a comment, or watch another of our videos!\n\nCONNECT WITH ME\n____________________________________\nWebsite:         http://practical.engineering\nTwitter:           https://twitter.com/HillhouseGrady\nInstagram:     https://www.instagram.com/practicalengineering\nReddit:            https://www.reddit.com/r/PracticalEngineering\nFacebook:      https://www.facebook.com/PracticalEngineerGrady\u200b\nPatreon:         http://patreon.com/PracticalEngineering\n\nSPONSORSHIP INQUIRIES\n____________________________________\nPlease email my agent at practicalengineering@standard.tv\n\nDISCLAIMER\n____________________________________\nThis is not engineering advice. Everything here is for informational and entertainment purposes only. Contact an engineer licensed to practice in your area if you need professional advice or services. All non-licensed clips used for fair use commentary, criticism, and educational purposes.\n\nSPECIAL THANKS\n____________________________________\nThis video is sponsored by Ground News.\nStock video and imagery provided by Getty Images, Shutterstock, Pond5, and Videoblocks.\nMusic by Epidemic Sound: http://epidemicsound.com/creator\nTonic and Energy by Elexive is licensed under a Creative Commons Attribution License\nSource: https://www.youtube.com/watch?v=U6fBPdu8w9U\nVideo by Grady Hillhouse\nEdited by Wesley Crump\nProduced by Ralph Crewe\nGraphics by Nebula Studios",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/bbECmVdyWlQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/bbECmVdyWlQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/bbECmVdyWlQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/bbECmVdyWlQ/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/bbECmVdyWlQ/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Practical Engineering",
        categoryId: "27",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title: "How the Hawaiian Power Grid Works",
          description:
            "⚡A few of the complexities involved in managing a mini power grid.\n📰Compare news coverage. Spot media bias. Avoid algorithms. Try Ground News today and get 40% off your subscription by going to https://ground.news/practicalengineering\n\nDrawing the line between what’s worth the investment and what’s just gilding the electric lily is tough on such a small scale, multiplied by several islands, and with such a quickly growing portfolio of renewable energy sources.\n\nWatch this video ad-free on Nebula: https://nebula.tv/videos/practical-engineering-how-the-hawaiian-power-grid-works\n\nSigned copies of my book (plus other cool stuff) are available here: https://store.practical.engineering/\n\nPractical Engineering is a YouTube channel about infrastructure and the human-made world around us. It is hosted, written, and produced by Grady Hillhouse. We have new videos posted regularly, so please subscribe for updates. If you enjoyed the video, hit that ‘like’ button, give us a comment, or watch another of our videos!\n\nCONNECT WITH ME\n____________________________________\nWebsite:         http://practical.engineering\nTwitter:           https://twitter.com/HillhouseGrady\nInstagram:     https://www.instagram.com/practicalengineering\nReddit:            https://www.reddit.com/r/PracticalEngineering\nFacebook:      https://www.facebook.com/PracticalEngineerGrady\u200b\nPatreon:         http://patreon.com/PracticalEngineering\n\nSPONSORSHIP INQUIRIES\n____________________________________\nPlease email my agent at practicalengineering@standard.tv\n\nDISCLAIMER\n____________________________________\nThis is not engineering advice. Everything here is for informational and entertainment purposes only. Contact an engineer licensed to practice in your area if you need professional advice or services. All non-licensed clips used for fair use commentary, criticism, and educational purposes.\n\nSPECIAL THANKS\n____________________________________\nThis video is sponsored by Ground News.\nStock video and imagery provided by Getty Images, Shutterstock, Pond5, and Videoblocks.\nMusic by Epidemic Sound: http://epidemicsound.com/creator\nTonic and Energy by Elexive is licensed under a Creative Commons Attribution License\nSource: https://www.youtube.com/watch?v=U6fBPdu8w9U\nVideo by Grady Hillhouse\nEdited by Wesley Crump\nProduced by Ralph Crewe\nGraphics by Nebula Studios",
        },
        defaultAudioLanguage: "en",
      },
    },
  ],
  nextPageToken: "CAwQAA",
  pageInfo: {
    totalResults: 200,
    resultsPerPage: 12,
  },
};
