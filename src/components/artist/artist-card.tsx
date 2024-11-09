import React from "react";
import { CardTitle } from "@/components/ui/card";

import {
  FaArrowRight,
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
   _id: string;
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
    <div className="group transition-transform transform lg:hover:scale-105 border-none overflow-hidden saturate-[85%] rounded-none shadow-none">
      <div
        className="artist-image h-0 pt-[100%] shadow-xl rounded-[10px]"
        style={{
          backgroundImage: `url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full bottom-0 text-white mt-4 md:opacity-35 md:group-hover:opacity-85 transition-all">
        <CardTitle className="text-2xl font-bold">{artist.name}</CardTitle>
        <div className="md:opacity-0 md:group-hover:opacity-100 transition-all">
          <a
            href={artist.website}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-site mb-2 underline-animation"
          >
            <span className="flex flex-row gap-1 whitespace-nowrap items-center">
              Official Site
              <FaArrowRight size={12} />
            </span>
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
      </div>
    </div>
  );
};

export default ArtistCard;
