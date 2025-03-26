declare module "react-gravatar" {
  import { ComponentType } from "react";

  interface GravatarProps {
    email: string;
    size?: number;
    rating?: "g" | "pg" | "r" | "x";
    default?:
      | "404"
      | "mm"
      | "identicon"
      | "monsterid"
      | "wavatar"
      | "retro"
      | "robohash";
    className?: string;
    style?: React.CSSProperties;
  }

  const Gravatar: ComponentType<GravatarProps>;
  export default Gravatar;
}
