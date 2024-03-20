export const GOOGLE_API_KEY = "AIzaSyAwnJlP-Olr-RtGMRqlD6JayMczRGHCqMk";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API =
  " https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const VIDEO_BY_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

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

export const explore_list_data = [
  "Trending",
  "Shopping",
  "Music",
  "Sports",
  "News",
  "Gaming",
  "Fashion",
  "Learning",
  "Movies",
  "Podcasts",
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
