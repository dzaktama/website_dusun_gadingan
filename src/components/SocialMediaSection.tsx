"use client";

import { useState } from "react";
import { TikTokIcon, YouTubeIcon, InstagramIcon, PlayCircleIcon, EyeIcon, HeartIcon, ExternalLinkIcon } from "./Icons";

interface VideoItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  embedUrl: string;
  thumbnailText: string;
}

interface PlatformData {
  name: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  followText: string;
  videos: VideoItem[];
}

const platforms: PlatformData[] = [
  {
    name: "TikTok",
    handle: "@gadinganpro",
    url: "https://www.tiktok.com/@gadinganpro",
    icon: <TikTokIcon size={20} />,
    color: "#ff0050",
    bgColor: "rgba(255, 0, 80, 0.1)",
    followText: "Follow",
    videos: [
      {
        id: "tiktok-1",
        title: "Proses Pembuatan Keripik Pisang Khas Gadingan",
        views: "12.5K",
        likes: "1.2K",
        embedUrl: "https://www.tiktok.com/@gadinganpro",
        thumbnailText: "Keripik Pisang",
      },
      {
        id: "tiktok-2",
        title: "Suasana Pagi di Dusun Gadingan yang Asri",
        views: "8.3K",
        likes: "945",
        embedUrl: "https://www.tiktok.com/@gadinganpro",
        thumbnailText: "Pagi di Gadingan",
      },
    ],
  },
  {
    name: "YouTube",
    handle: "@gadinganpro2424",
    url: "https://www.youtube.com/@gadinganpro2424",
    icon: <YouTubeIcon size={20} />,
    color: "#ff0000",
    bgColor: "rgba(255, 0, 0, 0.1)",
    followText: "Subscribe",
    videos: [
      {
        id: "yt-1",
        title: "Profil Dusun Gadingan - Desa Ngluwar, Magelang",
        views: "5.7K",
        likes: "320",
        embedUrl: "https://www.youtube.com/@gadinganpro2424",
        thumbnailText: "Profil Dusun",
      },
      {
        id: "yt-2",
        title: "UMKM Gadingan: Dari Dapur ke Pasar Digital",
        views: "3.1K",
        likes: "210",
        embedUrl: "https://www.youtube.com/@gadinganpro2424",
        thumbnailText: "UMKM Digital",
      },
    ],
  },
  {
    name: "Instagram",
    handle: "@gadinganpro_",
    url: "https://www.instagram.com/gadinganpro_",
    icon: <InstagramIcon size={20} />,
    color: "#e1306c",
    bgColor: "rgba(225, 48, 108, 0.1)",
    followText: "Follow",
    videos: [
      {
        id: "ig-1",
        title: "Behind The Scene: Pembuatan Slondok Pedas Manis",
        views: "4.2K",
        likes: "587",
        embedUrl: "https://www.instagram.com/gadinganpro_",
        thumbnailText: "BTS Slondok",
      },
      {
        id: "ig-2",
        title: "Gotong Royong Warga Gadingan",
        views: "6.8K",
        likes: "892",
        embedUrl: "https://www.instagram.com/gadinganpro_",
        thumbnailText: "Gotong Royong",
      },
    ],
  },
];

function VideoCard({ video, platformColor }: { video: VideoItem; platformColor: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={video.embedUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: "1px solid var(--border-subtle)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isHovered ? "var(--shadow-card)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Placeholder */}
      <div
        className="relative w-full aspect-video flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${platformColor} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${platformColor} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Thumbnail Text */}
        <span
          className="text-sm font-semibold z-10"
          style={{ fontFamily: "var(--font-parkinsans)", color: "var(--text-secondary)" }}
        >
          {video.thumbnailText}
        </span>

        {/* Play button overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: platformColor, color: "#fff" }}
          >
            <PlayCircleIcon size={24} />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p
          className="text-xs text-[var(--text-primary)] line-clamp-2 mb-2 leading-snug"
          style={{ fontFamily: "var(--font-geist)" }}
        >
          {video.title}
        </p>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
            <EyeIcon size={12} />
            {video.views}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
            <HeartIcon size={12} />
            {video.likes}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function SocialMediaSection() {
  return (
    <section
      id="sosmed"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "var(--accent-neon)",
              filter: "brightness(0.85)",
            }}
          >
            Ikuti Kami
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Media Sosial Gadingan
          </h2>
          <p
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Saksikan kegiatan, proses produksi UMKM, dan kehidupan sehari-hari
            warga Dusun Gadingan melalui konten video kami.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Platform Header */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: platform.bgColor, color: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-parkinsans)" }}
                    >
                      {platform.name}
                    </p>
                    <p
                      className="text-xs text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-geist)" }}
                    >
                      {platform.handle}
                    </p>
                  </div>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-80 flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-parkinsans)",
                    backgroundColor: platform.color,
                    color: "#ffffff",
                  }}
                >
                  {platform.followText}
                  <ExternalLinkIcon size={12} strokeWidth={2.2} />
                </a>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--border-subtle)" }} />

              {/* Videos */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1"
                  style={{ fontFamily: "var(--font-parkinsans)" }}
                >
                  Video Populer
                </p>
                {platform.videos.map((video) => (
                  <VideoCard key={video.id} video={video} platformColor={platform.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
