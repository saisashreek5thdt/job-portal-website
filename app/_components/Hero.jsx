import heroImg from "../../public/hiring1.jpg";
import Image from "next/image";
import HeroContent from "./HeroContent";
const Hero = () => {
    return (
        <>
            <div className="bg-[#00283C] w-full">
                {/* Image */}
                <div className="flex items-center justify-center pt-20">
                    <Image
                        className="rounded-lg "
                        src={heroImg}
                        width={1600}
                        height={867}
                        alt=""
                    />
                </div>
                <HeroContent/>
            </div>
        </>
    );
}

export default Hero;