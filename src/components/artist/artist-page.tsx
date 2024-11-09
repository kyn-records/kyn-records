import ArtistCard from "./artist-card";
import { useTheme } from "../../ThemeContext";
import { useEffect, useState } from "react";
import { fetchArtists } from "@/service/artist.service";

const artistsDummy = [
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2020/07/Screen-Shot-2021-03-10-at-10.59.53-AM.png",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2020/07/230926_070-SHAKE_PR_BLACK-BACKDROP_084-copy-1-compressed-scaled-e1730924625945-950x1024.jpg",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2020/07/Screen-Shot-2021-03-10-at-10.57.32-AM.png",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2020/07/Alessia_Deadman-1-compressed-1024x1024.jpg",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2024/10/Breez-Kennedy_Press-Photo-compressed-scaled-e1730397592553-1024x1014.jpg",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2022/10/Screenshot-2023-10-13-at-5.48.29-PM-e1697233837728-963x1024.png",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
  {
    name: "Big Sean",
    image:
      "https://www.defjam.com/files/2023/03/Unknown-1.-compressed-e1679590488462-1024x956.jpg",
    website: "https://uknowbigsean.com/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/bigsean/" },
      { platform: "Twitter", url: "https://twitter.com/BigSean" },
      { platform: "Facebook", url: "https://www.facebook.com/uknowbigsean/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@bigsean?source=h5_m",
      },
    ],
  },
];


const ArtistPage = () => {
  const [artists, setArtists] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const loadData = async () => {
        const data = await fetchArtists(); 
        setArtists(data);  
      console.log(data.length)
    };

    loadData()
  },[])

  return (
    <div
      className={`page-artists min-h-full h-max ${
        isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"
      }`}
    >
      <div className="artist-container flex flex-wrap max-w-[1280px] mx-auto w-[95%] pb-10 pt-5">
        <div className="flex justify-between items-center w-full mb-6">
          <h1 className="text-3xl font-light">Artists</h1>
          {/* <DarkModeToggle /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </div>
      <div className='bg-[url("/noise-light.png")] absolute top-0 left-0 h-full w-full pointer-events-none opacity-10'></div>
    </div>
  );
};

export default ArtistPage;
