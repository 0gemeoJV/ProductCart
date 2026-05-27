import '../../stylesComponents/ButtonStyles.css';

type OrdinaryButtonsProps = {
  props: string;
  onClick: () => void;
  subclass?: string;
};

function OrdinaryButtons({ props, onClick, subclass}: OrdinaryButtonsProps) {
  return (
    <button className={`ordinary-button ${subclass}`} onClick={onClick}>
      {props}
    </button>
  );
}

export default OrdinaryButtons;