import Image from "next/image";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      {/* {console.log('Photo: ', photo)} */}
      <Image
        fill
        // key={index}
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        // sizes='100vw'
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}