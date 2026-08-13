import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostman,
  SiInsomnia,
  SiTrello,
  SiJenkins,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt, FaJava, FaAws } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";

const registry: Record<string, IconType> = {
  SiHtml5,
  FaCss3Alt,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  FaJava,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  TbDatabase,
  SiGit,
  SiDocker,
  FaAws,
  SiPostman,
  SiInsomnia,
  SiTrello,
  SiJenkins,
  SiVercel,
};

interface BrandIconProps {
  name: string;
  color: string;
  size?: number;
}

export function BrandIcon({ name, color, size = 16 }: BrandIconProps) {
  const Icon = registry[name];
  if (!Icon) return null;
  return <Icon color={color} size={size} />;
}
