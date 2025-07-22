import { ArrowRight, GitFork } from "lucide-react";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default = {
  args: {
    variants: "Default",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    variants: "Secondary",
    label: "Button",
  },
};

export const Destructive = {
  args: {
    variants: "Destructive",
    label: "Remove",
  },
};

export const Outline = {
  args: {
    variants: "Outline",
    label: "Button",
  },
};

export const Ghost = {
  args: {
    variants: "Ghost",
    label: "Ghost",
  },
};

export const Link = {
  args: {
    variants: "Link",
    label: "Link",
  },
};

export const Icon = {
  args: {
    variants: "Icon",
    icon: <ArrowRight size={20} />,
  },
};

export const WithIcon = {
  args: {
    variants: "withIcon",
    label: "Git fork",
    icon: <GitFork size={20} />,
  },
};

export const Loading = {
  args: {
    variants: "Loading",
    label: "Please wait",
  },
};
