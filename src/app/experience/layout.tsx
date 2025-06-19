// Layout component for the Experience page
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Experience",
  description: "Explore my projects and experience",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}