import ReactPlayer from "react-player";

interface BaharContainerProps {
  title: string;
  url: string;
}

const BaharContainer = (props: BaharContainerProps) => {
  const { title, url } = props;
  const { baseClassName } = BaharContainer.constants;
  return (
    <div className={baseClassName}>
      <h5 className={`${baseClassName}-title`}>{title}</h5>
          <ReactPlayer
            url={url} // Replace with your YouTube URL
            width="90%" // Makes the video responsive
            height="80%" // Makes the video responsive
          />
    </div>
  );
};

BaharContainer.constants = {
  baseClassName: "bahar-container",
};

export default BaharContainer;
