import '../../stylesComponents/ButtonStyles.css';

type OrdinaryButtonsProps = {
  props: string;
  onClick: () => void;
};

function OrdinaryButtons({ props, onClick }: OrdinaryButtonsProps) {
  return (
    <button className='ordinary-button' onClick={onClick}>
      {props}
    </button>
  );
}

export default OrdinaryButtons;