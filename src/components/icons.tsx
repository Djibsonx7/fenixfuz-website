import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };
type Shape = ["path" | "circle" | "rect" | "polyline" | "line", Record<string, string>][];

const icons: Record<string, Shape> = {
  ArrowRight: [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]],
  BadgeCheck: [["path", { d: "M7.5 4.2 9 2l3 1 3-1 1.5 2.2 2.6.6.3 3 2 2.2-1.7 2.5.5 3-2.5 1.7-.9 2.8h-3L12 22l-2.1-1.4h-3L6 17.8l-2.5-1.7.5-3L2.3 10l2-2.2.3-3Z" }], ["path", { d: "m9 12 2 2 4-4" }]],
  BarChart3: [["path", { d: "M3 3v18h18" }], ["path", { d: "M7 16v-3" }], ["path", { d: "M12 16V8" }], ["path", { d: "M17 16V5" }]],
  Bot: [["rect", { x: "3", y: "7", width: "18", height: "13", rx: "2" }], ["path", { d: "M12 3v4M8 12h.01M16 12h.01M8 16h8" }]],
  Boxes: [["path", { d: "m12 2 4.5 2.5L12 7 7.5 4.5ZM3 9l4.5-2.5L12 9l-4.5 2.5ZM12 9l4.5-2.5L21 9l-4.5 2.5ZM3 14l4.5-2.5L12 14l-4.5 2.5ZM12 14l4.5-2.5L21 14l-4.5 2.5ZM7.5 16.5 12 14l4.5 2.5L12 19Z" }]],
  Building2: [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M2 22h20M10 6h4M10 10h4M10 14h4M10 18h4" }]],
  Check: [["path", { d: "m5 12 4 4L19 6" }]],
  ChevronLeft: [["path", { d: "m15 18-6-6 6-6" }]], ChevronRight: [["path", { d: "m9 18 6-6-6-6" }]],
  Clock: [["circle", { cx: "12", cy: "12", r: "9" }], ["path", { d: "M12 7v5l3 2" }]],
  Cloud: [["path", { d: "M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z" }]],
  FileSpreadsheet: [["path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M14 2v6h6M8 13h8M8 17h8M12 11v8" }]],
  FolderKanban: [["path", { d: "M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }], ["path", { d: "M8 11v5M12 11v3M16 11v6" }]],
  GraduationCap: [["path", { d: "m2 10 10-5 10 5-10 5ZM6 12v5c3 2 9 2 12 0v-5M22 10v6" }]],
  Handshake: [["path", { d: "m11 17 2 2a1 1 0 0 0 2-1l3-3M14 14l2 2a1 1 0 0 0 2-1l1-1M3 8l4-3 4 3M21 8l-4-3-5 4-2 2a2 2 0 0 0 3 2l2-2 4 3M3 8v8l4 3 2-2" }]],
  HeartHandshake: [["path", { d: "M19 14c1.5-1.4 3-3 3-5a4 4 0 0 0-7-2l-3 3-3-3a4 4 0 0 0-7 2c0 3 3 5 6 8l4 4 2-2M12 10l-2 2a2 2 0 1 0 3 3l1-1" }]],
  Hospital: [["path", { d: "M12 6v4M10 8h4M4 22V4h16v18M2 22h20M8 22v-4h8v4" }]],
  LockKeyhole: [["rect", { x: "4", y: "10", width: "16", height: "11", rx: "2" }], ["path", { d: "M8 10V7a4 4 0 0 1 8 0v3M12 14v3" }]],
  MessageCircle: [["path", { d: "M21 11.5a8 8 0 0 1-9.5 7.9L3 21l1.6-8.5A8 8 0 1 1 21 11.5Z" }]],
  SearchCheck: [["circle", { cx: "11", cy: "11", r: "7" }], ["path", { d: "m20 20-3.5-3.5M8 11l2 2 4-4" }]],
  Send: [["path", { d: "m22 2-7 20-4-9-9-4ZM22 2 11 13" }]],
  ShieldCheck: [["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" }], ["path", { d: "m9 12 2 2 4-4" }]],
  Target: [["circle", { cx: "12", cy: "12", r: "9" }], ["circle", { cx: "12", cy: "12", r: "5" }], ["circle", { cx: "12", cy: "12", r: "1" }]],
  TrendingUp: [["path", { d: "m3 17 6-6 4 4 8-8" }], ["path", { d: "M15 7h6v6" }]],
  Users: [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" }]],
  Workflow: [["rect", { x: "3", y: "3", width: "6", height: "6", rx: "1" }], ["rect", { x: "15", y: "15", width: "6", height: "6", rx: "1" }], ["path", { d: "M6 9v3a3 3 0 0 0 3 3h6M15 6h3a3 3 0 0 1 3 3v3" }]],
  Wrench: [["path", { d: "M14.7 6.3a4 4 0 0 0-5 5L3 18a2.1 2.1 0 0 0 3 3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3Z" }]],
  Zap: [["path", { d: "m13 2-9 12h8l-1 8 9-12h-8Z" }]],
};

export function Icon({ name, size = 24, ...props }: IconProps & { name: keyof typeof icons }) {
  return <svg aria-hidden="true" fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size} {...props}>{icons[name].map(([Tag, attrs], index) => <Tag key={index} {...attrs} />)}</svg>;
}
