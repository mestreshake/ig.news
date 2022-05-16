import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Slice } from "./styles";

const IntroTextImage = ({ slice, context }) => {
  const { preview } = context;
  let sliceData;
  if (preview) {
    sliceData = slice?.items?.slice(0, 1);
  } else {
    sliceData = slice?.items;
  }
  return (
    <Slice preview={preview || false}>
      <Image
        src={slice.primary.banner.url}
        alt={slice.primary.banner.alt}
        height={slice.primary.banner.dimensions.height}
        width={slice.primary.banner.dimensions.width}
      />
      {sliceData.map((item) => (
        <>
          <PrismicRichText
            field={item.content}
            components={{
              image: () => (
                <Image
                  src={item.content[0].url}
                  height={item.content[0].dimensions.height}
                  width={item.content[0].dimensions.width}
                  alt={item.content[0].alt}
                />
              ),
            }}
          />
        </>
      ))}
    </Slice>
  );
};
export default IntroTextImage;
