import React from "react";
import { Card, CardTitle } from "@/components/ui/card";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface SocialMediaLink {
  platform: string;
  url: string;
}

interface Artist {
  name: string;
  image: string;
  website: string;
  socialMedia: SocialMediaLink[];
}

interface ArtistCardProps {
  artist: Artist;
}

const iconMap: Record<string, React.ElementType> = {
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  Facebook: FaFacebook,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
};
const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {

  return (
    <Card className="rounded-xl shadow-lg transition-transform transform lg:hover:scale-105 border-none overflow-hidden saturate-[85%]">
      <div
        className="artist-image h-0 pt-[75%]"
        style={{
          backgroundImage: `url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute w-full p-[15px] bottom-0 bg-gradient-to-b from-transparent to-black/85 text-white">
        <CardTitle className="text-xl font-bold">{artist.name}</CardTitle>
        <a
          href={artist.website}
          target="_blank"
          rel="noopener noreferrer"
          className="artist-site mb-2 block underline-animation"
        >
          Official Site
        </a>
        <div className="artist-socials">
          <ul className="flex space-x-4">
            {artist.socialMedia.map((link, index) => {
              const IconComponent = iconMap[link.platform];
              return (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ArtistCard;
