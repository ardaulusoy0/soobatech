import Image from 'next/image';
interface Props {
    width?: number;
    height?: number;
}


export const Logo = (props: Props) => {
    return (
        <Image src="/soobanew.png" alt="SOOBA Tech Logo" width={props.width || 150} height={props.height || 50} className="mb-4" />
    );
};