import { Metadata } from "next";

export const medtadata: Metadata = {
  title: "About Us",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
