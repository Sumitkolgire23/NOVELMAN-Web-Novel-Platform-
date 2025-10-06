import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const recentUploads = [
  {
    id: 1,
    title: "Fall in Love or Die",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 84",
    time1: "1 minute",
    chapter2: "Ch. 83",
    time2: "6 days"
  },
  {
    id: 2,
    title: "Looking For The Villainess Whom I Spent My First Night With",
    cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 33",
    time1: "7 minutes",
    chapter2: "Ch. 32",
    time2: "5 days"
  },
  {
    id: 3,
    title: "The Desire of the Princess from a Fallen Kingdom",
    cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 11",
    time1: "7 minutes",
    chapter2: "Ch. 10",
    time2: "7 days"
  },
  {
    id: 4,
    title: "Wake up, Jeon Seung Yeon",
    cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 11",
    time1: "8 minutes",
    chapter2: "Ch. 10",
    time2: "8 minutes"
  },
  {
    id: 5,
    title: "Olgami: Raising the Dead",
    cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: false,
    chapter1: "Ch. 18",
    time1: "9 minutes",
    chapter2: "Ch. 17",
    time2: "9 minutes"
  },
  {
    id: 6,
    title: "A Happy Couple",
    cover: "https://images.unsplash.com/photo-1604098365294-e08f5733a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBub3ZlbCUyMGNvdmVyfGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇯🇵",
    isColor: false,
    chapter1: "Ch. 7",
    time1: "10 minutes",
    chapter2: "Ch. 6",
    time2: "10 minutes"
  },
  {
    id: 7,
    title: "Fantasy: On a Budget",
    cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: false,
    chapter1: "Ch. 25",
    time1: "12 minutes",
    chapter2: "Ch. 24",
    time2: "12 minutes"
  },
  {
    id: 8,
    title: "Magic Emperor",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇨🇳",
    isColor: false,
    chapter1: "Ch. 45",
    time1: "15 minutes",
    chapter2: "Ch. 44",
    time2: "15 minutes"
  },
  {
    id: 9,
    title: "Demon Slayer Academy",
    cover: "https://images.unsplash.com/photo-1705831156575-a5294d295a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUyNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇯🇵",
    isColor: true,
    chapter1: "Ch. 89",
    time1: "18 minutes",
    chapter2: "Ch. 88",
    time2: "1 day"
  },
  {
    id: 10,
    title: "Shadow Monarch Returns",
    cover: "https://images.unsplash.com/photo-1602077003772-777154dfca87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGJvb2t8ZW58MXx8fHwxNzU4MzUyNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 156",
    time1: "20 minutes",
    chapter2: "Ch. 155",
    time2: "2 days"
  },
  {
    id: 11,
    title: "Digital Love Story",
    cover: "https://images.unsplash.com/photo-1591788806059-cb6e2f6a2498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJ0b29uJTIwY292ZXIlMjBhcnR8ZW58MXx8fHwxNzU4MzUyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ch. 34",
    time1: "25 minutes",
    chapter2: "Ch. 33",
    time2: "3 days"
  },
  {
    id: 12,
    title: "Heroes of Tomorrow",
    cover: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTgzNTI3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇺🇸",
    isColor: true,
    chapter1: "Issue #23",
    time1: "30 minutes",
    chapter2: "Issue #22",
    time2: "4 days"
  },
  {
    id: 13,
    title: "Mystic Realm Chronicles",
    cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇨🇳",
    isColor: false,
    chapter1: "Ch. 278",
    time1: "35 minutes",
    chapter2: "Ch. 277",
    time2: "5 days"
  },
  {
    id: 14,
    title: "Seoul High School Webtoon",
    cover: "https://images.unsplash.com/photo-1655794833185-bcd4a4bee967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjB3ZWJ0b29ufGVufDF8fHx8MTc1ODM1MjcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: true,
    chapter1: "Ep. 67",
    time1: "40 minutes",
    chapter2: "Ep. 66",
    time2: "6 days"
  },
  {
    id: 15,
    title: "Warrior's Path",
    cover: "https://images.unsplash.com/photo-1585864501941-68fc17327275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBhZHZlbnR1cmUlMjBib29rfGVufDF8fHx8MTc1ODM1MjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇰🇷",
    isColor: false,
    chapter1: "Ch. 101",
    time1: "45 minutes",
    chapter2: "Ch. 100",
    time2: "1 week"
  },
  {
    id: 16,
    title: "Love in the Digital Age",
    cover: "https://images.unsplash.com/photo-1663868289880-2cda6279543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBib29rfGVufDF8fHx8MTc1ODI2MDcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    country: "🇯🇵",
    isColor: true,
    chapter1: "Ch. 52",
    time1: "50 minutes",
    chapter2: "Ch. 51",
    time2: "1 week"
  }
];

const rankingData = {
  weekly: [
    {
      id: 1,
      rank: 1,
      title: "Tears on a Withered Flower",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Manhwa, Mature, Romance",
      rating: 8.9
    },
    {
      id: 2,
      rank: 2,
      title: "Wicked Husband",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Drama, Fantasy, Romance",
      rating: 8.9
    },
    {
      id: 3,
      rank: 3,
      title: "The Story of a Low-Rank Soldier Becoming a Monarch",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Completed, Fantasy, Manhwa...",
      rating: 8.9
    },
    {
      id: 4,
      rank: 4,
      title: "Divine Ring Descends: The Strongest Otherworld",
      cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Drama, fantasy, Shounen",
      rating: 8.9
    },
    {
      id: 5,
      rank: 5,
      title: "For My Lost Love",
      cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Drama, Fantasy, Historical, Manhwa, Manhwa Hot, Romance...",
      rating: 8.9
    },
    {
      id: 6,
      rank: 6,
      title: "The Villain's Savior",
      cover: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Romance, Fantasy, Isekai",
      rating: 8.7
    },
    {
      id: 7,
      rank: 7,
      title: "Second Life Ranker",
      cover: "https://images.unsplash.com/photo-1563818072824-ed3d6ff52955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 8.6
    },
    {
      id: 8,
      rank: 8,
      title: "The Beginning After The End",
      cover: "https://images.unsplash.com/photo-1663841364455-d82b3d4bbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjBjb21pYyUyMGJvb2t8ZW58MXx8fHwxNzU4MzUyNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Adventure, Fantasy, Magic, Reincarnation",
      rating: 8.5
    },
    {
      id: 9,
      rank: 9,
      title: "Omniscient Reader's Viewpoint",
      cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG5vdmVsJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUyNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Drama, Fantasy, Psychological",
      rating: 8.4
    },
    {
      id: 10,
      rank: 10,
      title: "Tower of God",
      cover: "https://images.unsplash.com/photo-1604098365294-e08f5733a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBub3ZlbCUyMGNvdmVyfGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Drama, Fantasy, Manhwa",
      rating: 8.3
    }
  ],
  monthly: [
    {
      id: 1,
      rank: 1,
      title: "Return of the Legendary Spear Knight",
      cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.2
    },
    {
      id: 2,
      rank: 2,
      title: "The Greatest Estate Developer",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Comedy, Fantasy, Manhwa",
      rating: 9.9
    },
    {
      id: 3,
      rank: 3,
      title: "Eleceed",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Comedy, School Life, Supernatural",
      rating: 9.1
    },
    {
      id: 4,
      rank: 4,
      title: "Nano Machine",
      cover: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Martial Arts, Sci-fi",
      rating: 9.0
    },
    {
      id: 5,
      rank: 5,
      title: "SSS-Class Gacha Hunter",
      cover: "https://images.unsplash.com/photo-1563818072824-ed3d6ff52955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy",
      rating: 8.9
    },
    {
      id: 6,
      rank: 6,
      title: "Leveling with the Gods",
      cover: "https://images.unsplash.com/photo-1663841364455-d82b3d4bbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjBjb21pYyUyMGJvb2t8ZW58MXx8fHwxNzU4MzUyNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Drama, Fantasy",
      rating: 8.8
    },
    {
      id: 7,
      rank: 7,
      title: "The Breaker: New Waves",
      cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG5vdmVsJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUyNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Drama, Martial Arts, School Life",
      rating: 8.7
    },
    {
      id: 8,
      rank: 8,
      title: "Lookism",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Drama, School Life, Slice of Life",
      rating: 8.6
    },
    {
      id: 9,
      rank: 9,
      title: "Mercenary Enrollment",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Military, School Life",
      rating: 8.5
    },
    {
      id: 10,
      rank: 10,
      title: "Study Group",
      cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Comedy, School Life, Supernatural",
      rating: 8.4
    }
  ],
  all: [
    {
      id: 1,
      rank: 1,
      title: "Solo Leveling",
      cover: "https://images.unsplash.com/photo-1604098365294-e08f5733a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBub3ZlbCUyMGNvdmVyfGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.8
    },
    {
      id: 2,
      rank: 2,
      title: "The Greatest Estate Developer",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Comedy, Fantasy, Manhwa",
      rating: 9.7
    },
    {
      id: 3,
      rank: 3,
      title: "Tower of God",
      cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Drama, Fantasy, Manhwa",
      rating: 9.6
    },
    {
      id: 4,
      rank: 4,
      title: "Omniscient Reader's Viewpoint",
      cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG5vdmVsJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUyNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Drama, Fantasy, Psychological",
      rating: 9.5
    },
    {
      id: 5,
      rank: 5,
      title: "The Beginning After The End",
      cover: "https://images.unsplash.com/photo-1663841364455-d82b3d4bbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjBjb21pYyUyMGJvb2t8ZW58MXx8fHwxNzU4MzUyNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Adventure, Fantasy, Magic, Reincarnation",
      rating: 9.4
    },
    {
      id: 6,
      rank: 6,
      title: "Eleceed",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Comedy, School Life, Supernatural",
      rating: 9.3
    },
    {
      id: 7,
      rank: 7,
      title: "Second Life Ranker",
      cover: "https://images.unsplash.com/photo-1563818072824-ed3d6ff52955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.2
    },
    {
      id: 8,
      rank: 8,
      title: "Nano Machine",
      cover: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Martial Arts, Sci-fi",
      rating: 9.1
    },
    {
      id: 9,
      rank: 9,
      title: "Return of the Legendary Spear Knight",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.0
    },
    {
      id: 10,
      rank: 10,
      title: "SSS-Class Gacha Hunter",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy",
      rating: 8.9
    }
  ]
};

interface RecentUploadsProps {
  onViewAll?: () => void;
}

export function RecentUploads({ onViewAll }: RecentUploadsProps) {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'all'>('weekly');

  const tabs = [
    { key: 'weekly' as const, label: 'Weekly' },
    { key: 'monthly' as const, label: 'Monthly' },
    { key: 'all' as const, label: 'All' }
  ];

  return (
    <div className="bg-black px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Latest Updates Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">Latest Update</h2>
              <button 
                onClick={onViewAll}
                className="text-[#9333EA] text-sm font-medium hover:text-[#A855F7] transition-colors"
              >
                VIEW ALL
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {recentUploads.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative mb-3">
                    <ImageWithFallback
                      src={novel.cover}
                      alt={novel.title}
                      className="w-full h-[240px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex items-center space-x-1">
                      <span className="text-sm">{novel.country}</span>
                      {novel.isColor && (
                        <span className="bg-[#FFD700] text-black text-xs font-bold px-2 py-1 rounded">
                          COLOR
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white text-sm font-medium leading-tight group-hover:text-[#FF6B6B] transition-colors line-clamp-2">
                      {novel.title}
                    </h3>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{novel.chapter1}</span>
                        <span className="text-gray-500 text-xs">{novel.time1}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{novel.chapter2}</span>
                        <span className="text-gray-500 text-xs">{novel.time2}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* S Ranking List Section */}
          <div className="w-80 hidden lg:block">
            <h2 className="text-white text-xl font-semibold mb-6">Popular Series</h2>
            
            {/* Tabs */}
            <div className="flex bg-gray-900 rounded-lg p-1 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.key
                      ? 'bg-[#9333EA] text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Ranking List */}
            <div className="space-y-4">
              {rankingData[activeTab].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-900/50 p-2 rounded-lg transition-colors"
                >
                  {/* Rank Number */}
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-700 rounded text-white text-xs font-bold flex items-center justify-center mt-1">
                    {item.rank}
                  </div>
                  
                  {/* Cover Image */}
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={item.cover}
                      alt={item.title}
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-[#FF6B6B] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-tight mb-2 line-clamp-2">
                      Genres: {item.genres}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3 h-3 ${
                            star <= Math.floor(item.rating)
                              ? "text-[#FFD700] fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-[#FFD700] text-xs font-medium ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}