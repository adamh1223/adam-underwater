import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaShoppingCart,
  FaCreditCard,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Work",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/services",
    text: "services",
  },
  {
    id: 4,
    url: "/prints",
    text: "prints",
  },
  {
    id: 5,
    url: "/stock",
    text: "stock footage",
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaShoppingCart />,
  },
];

export const subLinks = [
  {
    pageId: 100,
    page: "About",
    links: [
      { id: 1, label: "About Me", icon: <FaBook />, url: "/about" },
      { id: 2, label: "My Gear", icon: <FaBook />, url: "/about" },
      { id: 3, label: "My Process", icon: <FaBook />, url: "/about" },
      { id: 4, label: "Testimonials", icon: <FaBook />, url: "/about" },
    ],
  },
  {
    pageId: 200,
    page: "Services",
    links: [
      {
        id: 4,
        label: "Underwater 8K Video",
        icon: <FaBriefcase />,
        url: "/services",
      },
      {
        id: 5,
        label: "Underwater 45mp Photo",
        icon: <FaBriefcase />,
        url: "/services",
      },
      {
        id: 6,
        label: "Guided Dives",
        icon: <FaBriefcase />,
        url: "/services",
      },
    ],
  },
  {
    pageId: 300,
    page: "Prints",
    links: [
      {
        id: 7,
        label: "Print Creation Process",
        icon: <FaBriefcase />,
        url: "/prints",
      },
      {
        id: 8,
        label: "Prints",
        icon: <FaBriefcase />,
        url: "/prints",
      },
    ],
  },
  {
    pageId: 400,
    page: "Stock Footage",
    links: [
      {
        id: 9,
        label: "Stock Video",
        icon: <FaBriefcase />,
        url: "/stock",
      },
      {
        id: 10,
        label: "Stock Photo",
        icon: <FaBriefcase />,
        url: "/stock",
      },
    ],
  },
  {
    pageId: 500,
    page: "Contact",
    links: [
      {
        id: 11,
        label: "Work with Me",
        icon: <FaBriefcase />,
        url: "/contact",
      },
      {
        id: 12,
        label: "1 on 1 Coaching",
        icon: <FaBriefcase />,
        url: "/contact",
      },
    ],
  },
];
