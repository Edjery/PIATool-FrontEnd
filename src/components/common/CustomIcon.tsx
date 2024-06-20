import ImageBox from "./ImageBox";

interface Props {
  img: string;
}

const CustomIcon = ({ img }: Props) => <ImageBox img={img} height={"5vh"} />;

export default CustomIcon;
