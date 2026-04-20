import Image from 'next/image';
interface Props {
    width?: number;
    height?: number;
    className?: string;
}


export const Logo = (props: Props) => {
    return (
        <Image src="/soobaLogoLast.png" alt="SOOBA Tech Logo" className={props.className || ""} width={props.width || 150} height={props.height || 50} />
    );
};