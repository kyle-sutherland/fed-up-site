// src/components/FilmCard.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface FilmCardProps {
  title: string;
  description: string;
  vimeoUrl: string | undefined; // Make it optional
}

function getVimeoId(url: string | undefined): string | null {
  if (!url) return null;

  // Handle different Vimeo URL formats
  const patterns = [
    /vimeo\.com\/(\d+)/, // Standard URL
    /vimeo\.com\/video\/(\d+)/, // Video URL
    /^(\d+)$/, // Just the ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export default function FilmCard({
  title,
  description,
  vimeoUrl,
}: FilmCardProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const videoId = getVimeoId(vimeoUrl);

  useEffect(() => {
    async function fetchThumbnail() {
      if (!videoId) return;
      try {
        const response = await fetch(
          `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`,
        );
        const data = await response.json();
        setThumbnailUrl(data.thumbnail_url);
      } catch (error) {
        console.error("Failed to fetch Vimeo thumbnail:", error);
      }
    }

    fetchThumbnail();
  }, [videoId]);

  if (!vimeoUrl) {
    return null; // or return a placeholder component
  }

  return (
    <Link
      href={vimeoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-[400px] overflow-hidden rounded-lg block"
    >
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
