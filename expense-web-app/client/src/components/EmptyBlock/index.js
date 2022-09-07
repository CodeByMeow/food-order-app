import { Block } from "./EmptyBlock.style";
import { FACE_IMG_PATH } from "../../constants/imageSrc";

const EmptyBlock = () => {
  return (
    <Block>
      <img src={`${FACE_IMG_PATH}star.png`} alt="yay" />
      <p>Let's get first transaction now!</p>
    </Block>
  );
};

export default EmptyBlock;
