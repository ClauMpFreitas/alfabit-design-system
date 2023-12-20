import React from "react";
import Image from "next/image";

type AvatarImageProps = {
  src: string;
  altDesciption: string | "";
};

const AvatarImage = ({ src, altDesciption }: AvatarImageProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={altDesciption}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;
