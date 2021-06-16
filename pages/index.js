import Image from "next/image";
import img from "../public/img.jpg";

export default function Home() {
  return (
    // When importing the image as the source, you
    // don't need to define `width` and `height`.
    <Image src={img} alt="Picture of the author" />
  );
}
