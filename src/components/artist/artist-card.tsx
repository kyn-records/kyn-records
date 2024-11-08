import React, { useEffect, useState } from "react";
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
  const [imageHeight, setImageHeight] = useState("calc(25.93vw - 32.96px)");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 786) {
        setImageHeight("calc(100vw)");
      } else {
        setImageHeight("calc(16.93vw - 45.96px)"); // Original calculation for larger screens
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <Card className="rounded-xl shadow-lg transition-transform transform lg:hover:scale-105 border-none overflow-hidden">
      <div
        className="artist-image"
        style={{
          height: imageHeight,
          backgroundImage: `url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute w-full p-[15px] bottom-0 bg-gradient-to-b from-transparent to-black/80">
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
