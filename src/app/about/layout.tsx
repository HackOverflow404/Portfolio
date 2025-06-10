import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and who I am",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}