import Image from "next/image"

interface Props {
    image: any;
}

export default function Card (props: Props) {
    return (
        <div className="sm:w-1/2 md:w-1/4">
              <p className="text-2xl font-sans text-center font-semibold pt-5">Xpander</p>

              <Image
                src={props.image}
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </div>
    )
}