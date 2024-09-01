import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About page',
 description: 'This is about page',
};

export default function AboutPage() {
  return (
    <span className="text-5xl">
        AboutPage
    </span>
  )
}