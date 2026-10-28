import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BellRing,
  Blocks,
  Braces,
  Car,
  Check,
  CodeXml,
  Database,
  FileCode,
  Gauge,
  GitBranch,
  History,
  LayoutDashboard,
  PackageCheck,
  Paintbrush,
  PanelsTopLeft,
  Plug,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Webhook,
  Wrench,
} from 'lucide-react';

/**
 * Resolves the icon names used in src/data/* to lucide-react components.
 * Icons are imported individually to keep the bundle small — when you use a
 * new icon name in the data files, import it here and add it to the map.
 */
const icons = {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BellRing,
  Blocks,
  Braces,
  Car,
  Check,
  CodeXml,
  Database,
  FileCode,
  Gauge,
  GitBranch,
  History,
  LayoutDashboard,
  PackageCheck,
  Paintbrush,
  PanelsTopLeft,
  Plug,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Webhook,
  Wrench,
};

export default function Icon({ name, size = 20, strokeWidth = 1.75, ...props }) {
  const Component = icons[name] ?? Sparkles;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />;
}
